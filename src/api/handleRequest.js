import axios from "axios";

const TIMEOUT = 500

function handleAllSavedTracks(access_token){
    return getSavedTracks(access_token, 0).then((data) => {
        var totalSavedTracks = data.data.total
        var offset = data.data.offset
        var savedTracks = [];

        while(offset < totalSavedTracks) {
            try {
                const temp = getSavedTracks(access_token, offset).then((response) => {
                    return response.data.items.map((item) => { return item.track.id })
                })
                savedTracks.push(temp)
                offset += 50
            }
            catch(e) {
                console.log('error getting saved tracks', e)
            }
        }

        return Promise.all(savedTracks).then((allTracks) => {
            var track_ids = []
            allTracks.forEach((tracks) => {
                track_ids = track_ids.concat(tracks)
            })
            return track_ids
        })
    })
}

function handleAllRecentlyPlayedTracks(access_token){
    return getRecentlyPlayedTracks(access_token).then((data) => {
        return data.data.items.map((item) => { return item.track.id })
    })
}

function handleAllTopTracks(access_token){
    return getTopItems(access_token, 0, 'tracks').then((data) => {
        var totalTopTracks = data.data.total
        var offset = data.data.offset
        var topTracks = [];

        while(offset < totalTopTracks) {
            try {
                const temp = getTopItems(access_token, offset, 'tracks').then((response) => {
                    return response.data.items.map((item) => { return item.id })
                })
                topTracks.push(temp)
                offset += 50
            }
            catch(e) {
                console.log('error getting top tracks', e)
            }
        }

        return Promise.all(topTracks).then((allTracks) => {
            var track_ids = []
            allTracks.forEach((tracks) => {
                track_ids = track_ids.concat(tracks)
            })
            return track_ids
        })
    })
}

function handleSavedPlaylistsTracks(access_token, playlist_ids){
    return playlist_ids.then((data) => {
        return data.map((playlist_id) => {
            return getPlaylistsTracks(access_token, 0, playlist_id).then((data) => {
                var totalPlaylistTracks = data.data.total
                var offset = data.data.offset
                var playlistTracks = [];
        
                while(offset < totalPlaylistTracks) {
                    try {
                        const temp = getPlaylistsTracks(access_token, offset, playlist_id).then((response) => {
                            return response.data.items.map((item) => { return item.track ? item.track.id : null })
                        })
                        playlistTracks.push(temp)
                        offset += 50
                    }
                    catch(e) {
                        console.log('error getting saved tracks', e)
                    }
                }
                return Promise.all(playlistTracks).then((allTracks) => {
                    var track_ids = []
                    allTracks.forEach((tracks) => {
                        track_ids = track_ids.concat(tracks)
                    })
                    return track_ids
                })
            })
        })
    }).then((data) => {
        return Promise.all(data).then((allTracks) => {
            var track_ids = []
            allTracks.forEach((tracks) => {
                track_ids = track_ids.concat(tracks)
            })
            return track_ids
        })
    })
}

function handleAllSavedPlaylists(access_token){
    const playlist_ids = getSavedPlaylists(access_token, 0).then((data) => {
        var totalSavedPlaylists = data.data.total
        var offset = data.data.offset
        var savedPlaylists = [];

        while(offset < totalSavedPlaylists){
            try {
                const temp = getSavedPlaylists(access_token, offset).then((response) => {
                    return response.data.items.map((item) => { return item.id })
                })
                savedPlaylists.push(temp)
                offset += 50
            }
            catch(e) {
                console.log('error getting saved playlists tracks', e)
            }
        }
        return Promise.all(savedPlaylists).then((allPlaylists) => {
            var playlist_ids = []
            allPlaylists.forEach((playlists) => {
                playlist_ids = playlist_ids.concat(playlists)
            })
            return playlist_ids
        })
    })

    return handleSavedPlaylistsTracks(access_token, playlist_ids)
}

function handleAllSavedAlbums(access_token){
    return getSavedAlbums(access_token, 0).then((data) => {
        var totalSavedAlbums = data.data.total
        var offset = data.data.offset
        var savedAlbums = [];

        while(offset < totalSavedAlbums){
            try {
                const temp = getSavedAlbums(access_token, offset).then((response) => {
                    return response.data.items.map((item) => {
                        //for each album, retrieve all tracks
                        return item.album.tracks.items.map((track) => { return track.id })
                    })
                })
                savedAlbums.push(temp)
                offset += 50
            }
            catch(e) {
                console.log('error getting saved albums tracks', e)
            }
        }
        
        return Promise.all(savedAlbums).then((data) => {
            var track_ids = []
            data.forEach((allTracks) => {
                allTracks.forEach((tracks) => {
                    track_ids = track_ids.concat(tracks)
                })
            })
            return track_ids
        })
    })
}

//retrieve all track ids from user's listening history
function handleAllTracks(access_token){
    //retrieve user saved tracks
    const savedTracks = handleAllSavedTracks(access_token)

    //retrieve user recent tracks
    const recentTracks = handleAllRecentlyPlayedTracks(access_token)

    //retrieve user top tracks
    const topTracks = handleAllTopTracks(access_token)

    //retrieve user playlists
    const savedPLaylistsTracks = handleAllSavedPlaylists(access_token)

    //retrieve saved albums tracks
    const savedAlbumsTracks = handleAllSavedAlbums(access_token)

    return Promise.all([savedTracks, recentTracks, topTracks, savedPLaylistsTracks, savedAlbumsTracks]).then((data) => {
        var track_ids = []
        data.forEach((sub_track_ids) => {
            if(sub_track_ids !== undefined){
                track_ids = track_ids.concat(sub_track_ids)
            }
        })
        return track_ids
    })
}

function handleAudioFeaturesByBatch(access_token, track_ids, beginIndex, endIndex){
    return getTracksAudioFeatures(access_token, track_ids.slice(beginIndex,endIndex).join(',')).then((data) => {
        return data.data.audio_features
    })
}

//retrieve audio features from user's listening history
export function handleAudioFeatures(access_token){
    var track_ids_promise = handleAllTracks(access_token)
  
    var audio_features = []
    return track_ids_promise.then((track_ids) => {
        var batchSize = 100
        var numBatches = Math.floor(track_ids.length / batchSize)
    
        var curBatch = 0
        while(curBatch <= numBatches){
            var beginIndex = curBatch * batchSize
            var endIndex = (curBatch === numBatches) ? track_ids.length : beginIndex + batchSize
            audio_features.push(handleAudioFeaturesByBatch(access_token, track_ids, beginIndex, endIndex))
            curBatch++
        }
        return audio_features
    }).then((data) => {
        return Promise.all(data).then((audio_features) => {
            var audio_features_json = []
            audio_features.forEach((feature) => {
                audio_features_json = audio_features_json.concat(feature)
            })
            return audio_features_json
        })
    })
}

export function handleTrack(access_token, track_id){
    return getTrack(access_token, track_id)
}


// -------------------- Spotify API Call --------------------------------

async function getSavedTracks(access_token, offsetIndex){
    await sleep(TIMEOUT)
    return axios.get("https://api.spotify.com/v1/me/tracks", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        params: {
            limit: 50,
            offset: offsetIndex
        }
    })
}

async function getRecentlyPlayedTracks(access_token, offsetIndex){
    await sleep(TIMEOUT)
    return axios.get("https://api.spotify.com/v1/me/player/recently-played", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        params: {
            limit: 50,
            offset: offsetIndex
        }
    })
}

async function getTopItems(access_token, offsetIndex, type='tracks'){
    await sleep(TIMEOUT)
    return axios.get(`https://api.spotify.com/v1/me/top/${type}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        params: {
            limit: 50,
            offset: offsetIndex,
            time_range: 'long_term'
        }
    })
}

async function getSavedPlaylists(access_token, offsetIndex){
    await sleep(TIMEOUT)
    return axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        params: {
            limit: 50,
            offset: offsetIndex
        }
    })
}

async function getPlaylistsTracks(access_token, offsetIndex, playlist_id){
    await sleep(TIMEOUT)
    return axios.get(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        params: {
            limit: 50,
            offset: offsetIndex
        }
    })
}

async function getSavedAlbums(access_token, offsetIndex){
    await sleep(TIMEOUT)
    return axios.get("https://api.spotify.com/v1/me/albums", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        params: {
            limit: 50,
            offset: offsetIndex
        }
    })
}

async function getTracksAudioFeatures(access_token, track_ids){
    await sleep(TIMEOUT)
    const data = axios.get("https://api.spotify.com/v1/audio-features", {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
        params: {
            ids: track_ids
        }
    })
    return data
}

async function getTrack(access_token, track_id){
    await sleep(TIMEOUT)
    const data = axios.get(`https://api.spotify.com/v1/tracks/${track_id}`, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })
    return data
}

function sleep (milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
}