import React from 'react';
import { useContext} from 'react';
import { Box } from '@mui/system';
import { ButtonBase,Typography } from '@mui/material'; 
import { AppContext } from '../../aplication/Provider';
import { Link } from 'react-router-dom';


const styledBox = {
  display: 'flex',
  flexFlow: 'column',
  flexWrap: 'wrap',
  mt: 7,
  ml: 7
};

const styledTypo = {
  mt: 1,
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
            <img style={{
            resizeMode: "contain",
            height: 100,
            width: 200
          }} src={video.snippet.thumbnails.high.url} alt=''/>
            <Typography variant="body1" color="initial" align='left' sx={styledTypo}>
              {video.snippet.title}
            </Typography>
      </Box>
      </ButtonBase>
    </Link>
)};

export default VideoItem;
