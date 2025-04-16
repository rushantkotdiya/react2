import React, { useState } from 'react';

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>{isLoggedIn ? 'Welcome' : 'Please Log In'}</h1>
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default LoginLogout;
