import axios from "axios";

const key = 'AIzaSyD1ZAX19xbEPhFlAheIgL2HZkbdtyHKyGc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet', 
        maxResults: 3,
        key: key,
    }
});