import React from 'react'
import {useContext } from 'react';
import { AppContext } from '../../aplication/Provider';
import { Box} from '@mui/system';
import YouTube from 'react-youtube'; 
import Typography from '@mui/material/Typography'
import img from './img/videoDetailnull.png' 

const styledBox = {
  ml: 5
};

const styledTypo = {
  mb: 1,
  mt: 3,
}

const VideoDetail = () => {
  const [selectedVideo] = useContext(AppContext);
  const opts = {
    height: '393',
    width: '700',
    playerVars: {
      autoplay: 1,
    },
  };
 /* if (!selectedVideo){
    return(
     <Box sx={{width: 680, height: 460}}>
    <Paper elevation={0} sx={styledPaper}>
    <img style={{
            resizeMode: "contain",
            height: 450,
            width: 699
          }} 
          src={img} alt=''/>
    </Paper>
    </Box>
    )};  */

     
    /* const videoPlayer =  <Box sx={styledBox}>
                            <YouTube videoId={selectedVideo.id.videoId} opts={opts}/>
                            <Box>
                              <Typography variant="h6" color="initial" sx={styledTypo}>
                                {selectedVideo.snippet.title}
                              </Typography>
                                <Typography variant="body1" color="initial">
                                  {selectedVideo.snippet.description}
                                </Typography>
                            </Box>
                        </Box>; */

    const youtubeLogo = <Box>
                          <img style={{
                                  resizeMode: "contain",
                                  height: 450,
                                  width: 699
                                }} 
                                src={img} alt=''/>
                        </Box>
                              
  return (
      selectedVideo ? 
      <Box sx={styledBox}>
      <YouTube videoId={selectedVideo.id.videoId} opts={opts}/>
      <Box>
        <Typography variant="h6" color="initial" sx={styledTypo}>
          {selectedVideo.snippet.title}
        </Typography>
          <Typography variant="body1" color="initial">
            {selectedVideo.snippet.description}
          </Typography>
      </Box>
  </Box> 
  : youtubeLogo
)};

export default VideoDetail;
