import React, { useContext } from 'react';
import { useState } from 'react';
import './Searchbar.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box } from '@mui/system';
import { Alert, Modal, Typography } from '@mui/material';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
/* import app from '../../aplication/firebase'; */
import { AppContext } from '../../aplication/Provider';



const Searchbar = ({handleFormSubmit}) => {
  const [setLoggedIn] = useContext(AppContext);

  const [term,setTerm] = useState('');

  const [modalLogin,setModalLogin] = useState(false);
  const [modalRegistre, setModalRegistre] = useState(false);

  const [registerSucces, setRegisterSucces] = useState(false);
  const [registerFail, setRegisterFail] = useState(false);
  const [loginSucces, setLoginSucces] = useState(false);
  const [loginFail, setLoginFail] = useState(false);

  const [isLogged, setIsLogged] = useState(false);

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



/*   const succesRegister = () => {
    return(
    <Alert severity="success">Compte creat correctament!</Alert>)
  }; */

/*   const failRegister = () => {
    return(
    <Alert severity="error">Compte creat correctament!</Alert>)
  } */

  const register = () => {
          /* handleAuth(); */
          const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setRegisterSucces(true);
          setRegisterFail(false);
          setIsLogged(true);
          setLoggedIn(true);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setRegisterFail(true);
          setRegisterSucces(false);
          // ..
        });
        resetData();
  };

  const singIn = () => {
          const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setLoginSucces(true);
          setLoginFail(false);
          setIsLogged(true);
          setLoggedIn(true);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoginFail(true);
          setLoginSucces(false);
        });
  }

  const logOut = () => {
        const auth = getAuth();
    signOut(auth).then(() => {
      setIsLogged(false);
      setLoggedIn(false);
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
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


 return(
   
    <Box sx={{
      display: 'flex',
      flexFlow: 'row'
    }}>
        <TextField
          id="search"
          label="search"
          onChange={handleChange} 
          sx={{
            width: 1000
          }}
        />
        <Button variant="contained" color="error" onClick={handleSubmit} sx={{
          ml: 3
        }}>
          SEARCH
        </Button>
        <Button onClick={handleModalLogin} variant="contained" color="error">Login</Button>
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
              {loginSucces && <Alert severity="success">Sessió iniciada correctament</Alert>}
              {loginFail && <Alert severity="error">No s'ha pogut iniciar sessió</Alert>} 
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
                />
                <Button variant="contained" color="error" onClick={singIn} sx={{
                  mt: 3
                }}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Modal>

          <Button onClick={handleModalRegistre} variant="contained" color="error">Registre</Button>
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
             {registerSucces && <Alert severity="success">Compte creat correctament!</Alert>}
             {registerFail && <Alert severity="error">No s'ha pogut crear el compte</Alert>} 
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
          <Button onClick={logOut} variant="contained" color="error">Log Out</Button>
          {isLogged && <Alert severity="success">Compte creat correctament!</Alert>}
    </Box>
  );
};

export default Searchbar;
