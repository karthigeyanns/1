import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import { BrowserRouter as router,route,Link,Switch } from "react-router-dom";
import "./stye.css";
import Home from "./Home";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(password === e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("Form submitted successfully!");
    } else {
      console.log("Passwords do not match!");
    }
  };

  return (
    <div className="container">
      <p className="title">Sign Up !</p>

      <form className="App" onSubmit={handleSubmit}>
      <label htmlFor="nameInput" >Username:</label>
      <TextField id="outlined-basic" label="Username" variant="outlined" />
        <label htmlFor="emailInput">Email:</label>
        <TextField id="outlined-basic" label="Email" variant="outlined" />

        <label  htmlFor="passwordInput">Password:</label>
        <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/>

          <Stack direction="row" className="ico" spacing={2} height={1}>
      <Avatar className='sig'  src="https://i.pinimg.com/736x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg" />
      <Avatar className='sig' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpSRDiK04g36atGsUnqmz96LTztYREEHRctfK3eIAnCI618FKzmM3F6sW5KjlL4obe88&usqp=CAU" />
      <Avatar className='sig' src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png" />
    </Stack>
        {!passwordMatch && (
          <p style={{ color: "red" }}>Passwords do not match!</p>
          )}

        <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <a href="/" >Sign In</a>
              </Button>
      </form>
    </div>
  );
}

export default Signup;
