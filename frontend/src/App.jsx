import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE}/users`);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Error fetching users');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update user
        await axios.put(`${API_BASE}/users/${editingId}`, formData);
        setEditingId(null);
      } else {
        // Create user
        await axios.post(`${API_BASE}/users`, formData);
      }
      setFormData({ name: '', email: '', age: '' });
      fetchUsers();
    } catch (error) {
      console.error('Error saving user:', error);
      alert('Error saving user');
    }
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      age: user.age
    });
    setEditingId(user._id);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    
    try {
      await axios.delete(`${API_BASE}/users/${id}`);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    }
  };

  const cancelEdit = () => {
    setFormData({ name: '', email: '', age: '' });
    setEditingId(null);
  };

  return (
    <div className="app">
      <h1>User Management</h1>
      
      <form onSubmit={handleSubmit} className="user-form">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />
        <div className="form-buttons">
          <button type="submit">
            {editingId ? 'Update User' : 'Add User'}
          </button>
          {editingId && (
            <button type="button" onClick={cancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="users-list">
          <h2>Users ({users.length})</h2>
          {users.map(user => (
            <div key={user._id} className="user-card">
              <div className="user-info">
                <h3>{user.name}</h3>
                <p>Email: {user.email}</p>
                <p>Age: {user.age}</p>
                <small>Created: {new Date(user.createdAt).toLocaleDateString()}</small>
              </div>
              <div className="user-actions">
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user._id)} className="delete">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;