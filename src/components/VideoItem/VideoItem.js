import React from 'react';
import { useContext} from 'react';
import { Box } from '@mui/system';
import { ButtonBase,Typography } from '@mui/material'; 
import { AppContext } from '../../aplication/Provider';
import { Link } from 'react-router-dom';


const styledBox = {
  display: 'flex',
  flexFlow: 'column',
  pr: 4,
};

const styledTypo = {
  mt: 1,
  ml: 2
};

const VideoItem = ({video}) => {
  const [selectedVideo,setSelectedVideo] = useContext(AppContext);
  
  const selectVideo = () => {
    setSelectedVideo(video);
  };

  console.log(selectedVideo);
  return(
    <Link to='/videodetail'>
      <ButtonBase onClick={selectVideo}>
      <Box sx={styledBox}>
        <Box sx={{width: 100}}>
            <img src={video.snippet.thumbnails.high.url} alt=''/>
        </Box>
            <Typography variant="body1" color="initial" align='left' sx={styledTypo}>
              {video.snippet.title}
            </Typography>
      </Box>
      </ButtonBase>
    </Link>
)};

export default VideoItem;
