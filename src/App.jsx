
/*
import {  useState } from 'react'

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
   const [message, setMessage] = useState(""); 
   const [forInvalid, setForInvalid] = useState('');
 const handleChange = (e) => {
const {name, value} = e.target;
if(name === 'userName'){
  setUserName(value);
} else if (name === 'password'){
  setPassword(value);
}
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(userName === 'user' && password === 'password'){
      setMessage("Welcome, user!");
      setUserName('');
      setPassword('');
      
    }
    else {
       setForInvalid("Invalid username or password");
    }
  }

  if(message){
     return(<div> <p role="alert">{message}</p></div>)
  }
  
  return (
  
      <div>
   

      <h1>Login Page</h1>

      {forInvalid && <p role="alert">{forInvalid}</p>}
   
  <form onSubmit = {handleSubmit}>

    <div>
      <label htmlFor='userName'>User Name:</label>
      <input placeholder="username" id = 'userName' value={userName} type = 'text' name = "userName" onChange= {handleChange} required/>
      </div>
    <div>
      <label htmlFor='password'>Password:</label>
      <input placeholder="password" id = 'password' value={password} type = 'password' name = "password" onChange= {handleChange} required/>
      </div>
      <button type = 'submit'>Submit</button>
    
     </form>


       
      </div>
     
    
  )
}

export default App
*/

import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // JS guard (belt + suspenders; native required already blocks empty submits)
    if (!username.trim() || !password.trim()) {
      setMessage("Both fields are required.");
      return;
    }

    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
    } else {
      setMessage("Invalid username or password");
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      {message && (
        <p role="alert" aria-live="polite">
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
            autoFocus
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
