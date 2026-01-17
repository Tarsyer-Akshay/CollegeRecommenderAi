import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
     if (res.ok) {
      localStorage.setItem('token', data.access_token);
      navigate('/');
    } else {
      alert(data.detail);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4 font-bold">Login</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full mb-4 p-2 border rounded" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full mb-4 p-2 border rounded" required />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;
