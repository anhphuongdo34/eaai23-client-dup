import axios from "axios";
import qs from 'qs';
import { Buffer } from "buffer";
import { CLIENT_ID, CLIENT_SECRET } from './config';

export const handleRefreshToken = async(refreshToken) => {
    const {data} = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: qs.stringify({
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
        },
    })

    return data;
};