import React, { useContext } from 'react';
import { useState } from 'react';
import './Searchbar.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box } from '@mui/system';
import { Alert, Container, Modal, Typography } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, setPersistence, browserSessionPersistence } from "firebase/auth";
import { AppContext } from '../../aplication/Provider';
import { Link } from 'react-router-dom';



const Searchbar = ({handleFormSubmit}) => {

  const [term,setTerm] = useState('');

  const [modalLogin,setModalLogin] = useState(false);
  const [modalRegistre, setModalRegistre] = useState(false);

  const [currentUser, setCurrentUser] = useContext(AppContext);

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleModalLogin = () => {
    setModalLogin(!modalLogin);
  }

  const handleModalRegistre = () => {
    setModalRegistre(!modalRegistre);
  }

  const handleSubmit = () => {
    handleFormSubmit(term);
  }

  const handleChange = (e) =>{
    setTerm(e.target.value);
  }

   const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const resetData = () => {
    setEmail('');
    setPassword('');
  }


  const register = () => {
          setCurrentUser('');
          const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setCurrentUser(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
        resetData();
  };

  const singIn = () => {
          const auth = getAuth();
      setPersistence(auth, browserSessionPersistence)
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setCurrentUser(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
        resetData();
  }

  const logOut = () => {
        const auth = getAuth();
    signOut(auth).then(() => {
      setCurrentUser('');
    })
    .catch((error) => {
});
}

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const buttonStyled = {
    height: 37,
    m: 1,
    width: '75%' 
  }

 return(
   <Container>
    <Box sx={{
      display: 'flex',
      flexFlow: 'row',
      alignItems: 'center'
    }}>
        <TextField
          id="search"
          label="search"
          onChange={handleChange} 
          sx={{
            width: {
              xs: 600, 
              sm: 700, 
              md: 800, 
              lg: 900,
              xl: 1000
            }
          }}
        />
        <Link to='/'style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="error" onClick={handleSubmit} sx={{
          ml: 2,
          height:37}}>
          SEARCH
        </Button>
        </Link>
        <Box sx={{ml:4}}>
        <Button onClick={handleModalLogin} variant="contained" color="error" size="large" sx={buttonStyled}>Login</Button>
          <Modal
            open={modalLogin}
            onClose={handleModalLogin}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                LOGIN
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>

              {currentUser && <Alert severity="success">Sessió iniciada correctament</Alert>}

              <Box sx={{
              display: 'flex',
              flexFlow: 'column'
              }}>
                <TextField
                  id="email"
                  label="Email"
                  onChange={handleEmail}
                  sx={{
                    mb:2,
                    mt:2
                  }}
                />
                <TextField
                  id="contrasenya"
                  label="Contrasenya"
                  onChange={handlePassword}
                  type="password"        
                />
                <Button variant="contained" color="error" onClick={singIn} sx={{
                  mt: 3
                }}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Modal>

          <Button onClick={handleModalRegistre} variant="contained" color="error" size="large" sx={buttonStyled}>Registre</Button>
          <Modal
            open={modalRegistre}
            onClose={handleModalRegistre}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                REGISTRE
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>

              {currentUser && <Alert severity="success">Compte creat correctament!</Alert>}

              <Box sx={{
              display: 'flex',
              flexFlow: 'column'
              }}>
                <TextField
                  id=""
                  label="Usuari"
                  onChange={handleEmail}
                  sx={{
                    mb:2,
                    mt:2
                  }}
                />
                <TextField
                  id=""
                  label="Contrasenya"
                  type="password" 
                  onChange={handlePassword}          
                />
                <Button variant="contained" color="error" onClick={register}  sx={{
                  mt: 3
                }}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Modal>
          {currentUser && <Button onClick={logOut} variant="contained" color="error" sx={buttonStyled}>Log Out</Button>}
          </Box>
    </Box>
  </Container>
  );
};

export default Searchbar;
