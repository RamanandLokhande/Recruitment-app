// src/Pages/signup.jsx

import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup Data:', formData);
    // Add API call or logic here
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create an Account</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit"  style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#1e1e2f',
    color: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    fontSize: '16px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default Signup;
