import React from 'react';
import './VideoList.css';
import { Box } from '@mui/system';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({videos}) => {

  const renderedVideos = videos.map((video,index) => <VideoItem video={video}  key={index}/>);
  
  return (
    <Box sx={{
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'space-around',
    }}>
      {renderedVideos}
    </Box>
  )
}


export default VideoList;
