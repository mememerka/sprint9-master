import React, { useContext } from 'react';
import './VideoDetail.css';
import { AppContext } from '../../aplication/Provider';
import { Box} from '@mui/system';
import YouTube from 'react-youtube';
import Typography from '@mui/material/Typography'
import img from '../img/videoDetailnull.png'



const VideoDetail = () => {
  const [selectedVideo] = useContext(AppContext);
  const opts = {
    height: '393',
    width: '700',
    playerVars: {
      autoplay: 1,
    },
  };
  if (!selectedVideo){
    return(
    <Box>
    <img src={img} alt=''/>
    </Box>)}
  return (
  <Box sx={{
    ml: 5,
  }}>
      <YouTube videoId={selectedVideo.id.videoId} opts={opts}/>
      <Box>
        <Typography variant="h6" color="initial" sx={{
          mb: 1,
          mt: 3,
        }}>
          {selectedVideo.snippet.title}
        </Typography>
        
          <Typography variant="body1" color="initial">
            {selectedVideo.snippet.description}
          </Typography>
      </Box>
  </Box>
)};

export default VideoDetail;
