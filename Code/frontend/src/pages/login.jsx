import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:7001/api/login', {
        username,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.data.success) {
        navigate('/');
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('登录请求失败:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>登录</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="用户名" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="密码" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">登录</button>
      </form>
    </div>
  );
}

export default Login;
