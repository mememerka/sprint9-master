import { Box, TextField, Button, Alert, Container } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AppContext } from '../../aplication/Provider';
import './CommentSection.css';

const CommentSection = () => {
  const [comment, setComment] = useState('');
  const [commentSection, setCommentSection] = useState([]);
 
  const [currentUser] = useContext(AppContext);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const submmitComment = () => {
    setCommentSection([...commentSection,comment]);
    setComment('');
  };

  const styleBox = {
    display: 'flex',
    flexFlow: 'column',
    border: 1,
    borderRadius: 0.5,
    mb: 2,
    mt: 3,
    p: 2,
  };

  const styleBoxError = {
    mb: 2,
    mt: 5,
    p: 2,
    width: 750
  };

  const textFieldStyled = {
    width:750,
    mt: 3,
    mr: 2
  }

  const renderedComments = commentSection.map((item)=> <Box sx={styleBox}>{item}</Box>);

  const fullCommentSection = <Box sx={{ml: 3}}>
                                  {renderedComments}
                                <Box sx={{
                                  ml: 3,
                                  display: 'flex',
                                  flexFlow: 'column',
                                  alignItems: 'center',
                                }}>
                                  <TextField onChange={handleChange} multiline value={comment} sx={textFieldStyled}/>
                                    <Button variant="contained" color="primary" onClick={submmitComment} sx={{
                                        mt: 2
                                      }}>
                                        Submit
                                    </Button>
                                </Box>
                              </Box>

  const notLogged = <Box sx={styleBoxError}>
                      <Alert severity="error">Inicia Sessió per veure els comentaris</Alert>
                    </Box>
                        
return (<Container>
          {currentUser
          ? fullCommentSection 
          : notLogged}
        </Container>
)};

export default CommentSection;
