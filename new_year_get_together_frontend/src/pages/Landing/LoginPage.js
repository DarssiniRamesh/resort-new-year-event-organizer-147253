import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Login page with boxed layout, grey/white split, forgot password.
 */
export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    const { error } = await login(form);
    if (error) setError(error.message);
    else navigate('/dashboard');
  }

  return (
    <div className="login-page boxed">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <label>Email:
          <input name="email" type="email" required autoFocus value={form.email} onChange={handleChange}/>
        </label>
        <label>Password:
          <input name="password" type="password" required value={form.password} onChange={handleChange}/>
        </label>
        <button className="btn btn-red btn-block">Sign In</button>
        {error && <div className="alert alert-red">{error}</div>}
        <div>
          <a href="/register" className="link-red">Create an account</a> · <a href="#" className="link-red">Forgot password?</a>
        </div>
      </form>
    </div>
  );
}
