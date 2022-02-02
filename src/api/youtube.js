import axios from "axios";

const key = 'AIzaSyBKBmhZlU36D5W2MwMg4Xxz27tJcwYSuRw'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet', 
        maxResults: 3,
        key: key,
    }
});