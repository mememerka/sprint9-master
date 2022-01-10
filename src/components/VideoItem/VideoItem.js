import React from 'react';
import { useContext} from 'react';
import './VideoItem.css';
import { Box } from '@mui/system';
import { ButtonBase,Typography } from '@mui/material'; 
import { AppContext } from '../../aplication/Provider';
import { Link } from 'react-router-dom';


const VideoItem = ({video}) => {
  const [selectedVideo,setSelectedVideo] = useContext(AppContext);
  console.log(selectedVideo);
  return(
    <Link to='/videodetail'>
    <div className='videoItem'>
      <ButtonBase onClick={()=>setSelectedVideo(video)}>
        <Box sx={{
          display: 'flex',
          flexFlow: 'row',
          pr: 10,
        }}>
            <img src={video.snippet.thumbnails.high.url} alt=''/>
            <Typography variant="body1" color="initial" align='left' sx={{
              mt: 1,
              ml: 2
            }}>
              {video.snippet.title}
            </Typography>
        </Box>
      </ButtonBase>
    </div>
  </Link>
)};

export default VideoItem;
