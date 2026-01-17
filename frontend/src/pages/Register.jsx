import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    if (res.ok) {
      alert('Registered successfully! You can now log in.');
    } else {
      alert(data.detail);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl mb-4 font-bold">Register</h2>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" className="w-full mb-4 p-2 border rounded" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full mb-4 p-2 border rounded" required />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Register</button>
      </form>
    </div>
  );
}

export default Register;
