import { Box, TextField, Button} from '@mui/material';
import React, { useState } from 'react';

const CommentSection = () => {
  const [comment, setComment] = useState('');
  const [commentSection, setCommentSection] = useState([]);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const submmitComment = () => {
    setCommentSection([...commentSection,comment]);
    setComment('');
  };

  const styledComments = {
    display: 'flex',
    flexFlow: 'column',
    border: 1,
    borderRadius: 0.5,
    mb: 2,
    mt: 3,
    p: 2,
  };

  const styledFullCommentSection = {
    ml: 3
  };

  const styledCommentSection = {
      ml: 3,
      display: 'flex',
      flexFlow: 'column',
      alignItems: 'center',
  };

  const textFieldStyled = {
    width:750,
    mt: 3,
    mr: 2
  };

  const styledSubmit = {
    mt: 2
  }

  const renderedComments = commentSection.map((item)=> <Box sx={styledComments}>{item}</Box>);

  const fullCommentSection = <Box sx={styledFullCommentSection}>
                                  {renderedComments}
                                <Box sx={styledCommentSection}>
                                  <TextField onChange={handleChange} multiline value={comment} sx={textFieldStyled}/>
                                    <Button variant="contained" color="primary" onClick={submmitComment} sx={styledSubmit}>
                                        Submit
                                    </Button>
                                </Box>
                              </Box>
                        
return ( 
  fullCommentSection
)};

export default CommentSection;

