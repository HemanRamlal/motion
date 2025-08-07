import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedForm = () => {
  // State to track whether we're in signup or signin mode
  const [isSignUp, setIsSignUp] = useState(true);
  
  // Form field states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Toggle between signup and signin modes
  const toggleMode = () => setIsSignUp(!isSignUp);
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { 
      email, 
      password, 
      name: isSignUp ? name : undefined,
      rememberMe: !isSignUp ? rememberMe : undefined
    });
    // Add your actual form submission logic here
  };

  // Animation variants for form fields
  const formFieldVariants = {
    hidden: { opacity: 0, y: 20, height: 0 },
    visible: { opacity: 1, y: 0, height: 'auto' },
    exit: { opacity: 0, y: -20, height: 0 }
  };

  // Form container variants
  const formContainerVariants = {
    signup: { backgroundColor: '#f8f9fa', borderColor: '#4285f4' },
    signin: { backgroundColor: '#f1f3f4', borderColor: '#34a853' }
  };

  return (
    <motion.div 
      className="form-container"
      variants={formContainerVariants}
      animate={isSignUp ? 'signup' : 'signin'}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        layout
        style={{ display: 'inline-block' }}
      >
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </motion.h1>
      
      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {/* This key changes between signin/signup to trigger a complete re-render with animation */}
          <motion.div
            key={isSignUp ? 'signup-form' : 'signin-form'}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ 
              staggerChildren: 0.1,
              when: "beforeChildren" 
            }}
          >
            {/* Conditionally render name field in signup mode */}
            {isSignUp && (
              <motion.div
                variants={formFieldVariants}
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

            {/* Email field - present in both modes */}
            <motion.div
              variants={formFieldVariants}
              className="form-field"
            >
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>

            {/* Password field - present in both modes */}
            <motion.div
              variants={formFieldVariants}
              className="form-field"
            >
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </motion.div>

            {/* Remember me checkbox - only in signin mode */}
            {!isSignUp && (
              <motion.div
                variants={formFieldVariants}
                className="form-field checkbox-field"
              >
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember">Remember me</label>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
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
          border: 2px solid;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: background-color 0.5s ease;
        }
        .form-field {
          margin-bottom: 15px;
          overflow: hidden;
        }
        .checkbox-field {
          display: flex;
          align-items: center;
        }
        .checkbox-field input {
          width: auto;
          margin-right: 8px;
        }
        .checkbox-field label {
          margin-bottom: 0;
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
          margin-top: 10px;
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
    </motion.div>
  );
};

export default EnhancedForm;