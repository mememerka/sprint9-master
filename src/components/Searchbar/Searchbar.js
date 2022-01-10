import React from 'react';
import { useState } from 'react';
import './Searchbar.css';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Box } from '@mui/system';
import { Modal, Typography } from '@mui/material';



const Searchbar = ({handleFormSubmit}) => {
  const [term,setTerm] = useState('');

  const [modalLogin,setModalLogin] = useState(false);
  const [modalRegistre, setModalRegistre] = useState(false);

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

/*const [email,setEmail] = useContext(AppContext);
  const [password, setPassword] = useContext(AppContext);
  const [emailError,setEmailErorr] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false); */
  
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

/*   const handleLogin = () =>{
    clearErrors();
    app
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err)=>{
        switch (err.code){
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailErorr(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        };
      });
  };

  const handleSignup = () =>{
    clearErrors();
    app
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err)=>{
        switch (err.code){
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailErorr(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        };
      });
  };

  const handleLogout = () => {
    app.auth().signOut();
  };

  const authListener = () => {
    app.auth().onAuthStateChanged(email => {
      if(email){
        clearInputs();
        setEmail(email);
      } else {
        setEmail('');
      }
    });
  };

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailErorr('');
    setPasswordError('');
  };

  useEffect(()=>{
    authListener();
  },[]); */

/*   const register = () => {
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  } */


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
              <Box sx={{
              display: 'flex',
              flexFlow: 'column'
              }}>
                <TextField
                  id=""
                  label="Email"
                  onChange={(e)=>setEmail(e.target.value)}
                  sx={{
                    mb:2,
                    mt:2
                  }}
                />
                <TextField
                  id=""
                  label="Contrasenya"
                  onChange={(e)=>setPassword(e.target.value)}              
                />
                <Button variant="contained" color="error" onClick={(console.log(email+ '' +password))} sx={{
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
              <Box sx={{
              display: 'flex',
              flexFlow: 'column'
              }}>
                <TextField
                  id=""
                  label="Usuari"
                  onChange={(e)=>setEmail(e.target.value)}
                  sx={{
                    mb:2,
                    mt:2
                  }}
                />
                <TextField
                  id=""
                  label="Contrasenya"
                  onChange={(e)=>setPassword(e.target.value)}             
                />
                <Button variant="contained" color="error" /* onClick={register()} */ sx={{
                  mt: 3
                }}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Modal>


    </Box>
  );
}

export default Searchbar;
