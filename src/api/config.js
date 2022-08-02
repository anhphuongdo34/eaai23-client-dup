export const CLIENT_ID = "<Include your Spotify Client_ID here>"
export const CLIENT_SECRET = "<Include your Spotify Client_SECRET here>"
export const REDIRECT_URI = "https://foam-music.vercel.app/callback"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "code"
const SCOPE = 'user-read-private user-read-email user-follow-read user-library-read user-read-recently-played user-top-read playlist-read-collaborative playlist-read-private';

export const AUTHORIZE_URL = `${AUTH_ENDPOINT}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`
