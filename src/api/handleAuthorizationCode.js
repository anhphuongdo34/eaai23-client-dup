import axios from "axios";
import qs from 'qs';
import { Buffer } from "buffer";
import { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } from './config';

export const handleAuthorizationCode = async(code) => {
    const {data} = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: qs.stringify({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: REDIRECT_URI
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        },
    })

    return data;
}