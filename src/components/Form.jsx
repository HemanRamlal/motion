import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Form = () => {
  // State to track whether we're in signup or signin mode
  const [isSignUp, setIsSignUp] = useState(true);
  
  // Form field states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // Toggle between signup and signin modes
  const toggleMode = () => setIsSignUp(!isSignUp);
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password, name: isSignUp ? name : undefined });
    // Add your actual form submission logic here
  };

  return (
    <div className="form-container">
      <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
      
      <form onSubmit={handleSubmit}>
        {/* AnimatePresence detects when components mount and unmount */}
          {isSignUp && (
            <motion.div
              key="name-field"
              initial={{opacity : 0, height: 0}}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="form-field"
            >
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </motion.div>
          )}

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </motion.button>
      </form>

      <p>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        <motion.button
          type="button"
          className="toggle-button"
          onClick={toggleMode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </motion.button>
      </p>

      {/* Optional: Adding some basic styles */}
      <style jsx>{`
        .form-container {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .form-field {
          margin-bottom: 15px;
          overflow: hidden;
        }
        label {
          display: block;
          margin-bottom: 5px;
        }
        input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          background-color: #4285f4;
          color: white;
          border: none;
          padding: 10px 15px;
          border-radius: 4px;
          cursor: pointer;
        }
        .toggle-button {
          background: none;
          color: #4285f4;
          border: none;
          padding: 0;
          margin-left: 5px;
          cursor: pointer;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Form;