import React from 'react'
import { Box } from '@mui/system';
import Searchbar from './components/Searchbar/Searchbar';
import VideoDetail from './components/VideoDetail/VideoDetail';
import VideoList from './components/VideoList/VideoList';
import youtube from './api/youtube';
import { useState } from 'react';
import Provider from './aplication/Provider';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CommentSection from './components/CommentSection/CommentSection';
import { Container, Button } from '@mui/material';
import PrivateRoute from './components/CommentSection/commentprivate';
import NotLogged from './components/NotLogged/NotLogged';

function App() {
  const [videos,setVideos] = useState([]);
  const [button, setButton] = useState(true);

  const handleSubmit = async (term) => {
    console.log('app',term) 
    const response = await youtube.get('/search',{
      params:{
        q: term
      } 
    });
    setVideos(response.data.items);
    console.log(videos);
  };

  const showCommentButton = () => {
    setButton(!button);
  };

  const styledMainBox = {
    mt:5,
    ml: 5,
    display: 'flex',
    flexFlow: 'row',
    flexWrap: 'wrap',
  };

  const styledDetailMainBox = {
    display: 'flex',
  };

  const styledDetailBox = {
    width: 700,
    mt: 5,
    ml: 5,
    display: 'flex',
  };

  const styledCommentsBox = {
    display: 'flex',
    justifyContent: 'flex-start',
    mt: 5,
    ml: 12,
    pb: 10
  }

  return (
    <BrowserRouter>
     <Provider>
       <Container>
        <Box sx={styledMainBox}>
          <Box sx={{
            width: 1200
          }}> 
            <Searchbar handleFormSubmit={handleSubmit}/>
          </Box>
          <Box sx={styledDetailMainBox}>
            <Box sx={styledDetailBox}>
              <VideoDetail/>
            </Box>
            <Box>
              <VideoList videos={videos}/>
            </Box>
          </Box>
        </Box>
        <Box sx={styledCommentsBox}>
        <Routes>
          <Route element={<PrivateRoute/>}>
              <Route path='/comments' element={<CommentSection/>}/>
              </Route>
          <Route path='/notLogged' element={<NotLogged/>}/>
        </Routes>
            <Link to='/comments' style={{ textDecoration: 'none' }}>
              {
              button && 
              <Button variant="contained" color="error" onClick={showCommentButton}>
                Comments
              </Button>
              }
            </Link>
        </Box> 
      </Container>
    </Provider>
  </BrowserRouter>
  );
};

export default App;
