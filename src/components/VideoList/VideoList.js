import React from 'react';
import { Box } from '@mui/system';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({videos}) => {

  const renderedVideos = videos.map((video,index) => <VideoItem video={video}  key={index}/>);

  const styledListBox = {
    display: 'flex',
    flexFlow: 'column',
  };
  
  return (
        <Box sx={styledListBox}>
          {renderedVideos}
        </Box>
  )
};

export default VideoList;
