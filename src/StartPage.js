import React, { useState } from 'react';

function StartPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    // You can add authentication logic here
    // For simplicity, we'll navigate to the main page
    window.location.href = '/account-details';
  };

  return (
    <div className="start-page">
      <div className="left-side">
        {/* Place your content for the left side here */}
        <h2>Welcome to Canara Bank</h2>
        <p>This is a POC of our PoS system.</p>
      </div>
      <div className="right-side">
        {/* Username and password input fields */}
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {/* Login button */}
        <button onClick={handleLogin}>Login</button>
        {/* Register button */}
        <button onClick={() => window.location.href = '/register'}>Register</button>
      </div>
    </div>
  );
}

export default StartPage;
