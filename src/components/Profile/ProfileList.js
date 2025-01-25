import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile, deleteProfile } from '../../redux/slices/profileSlice';
import './ProfileList.css';

function ProfileList() {
  const profiles = useSelector((state) => state.profiles || []); // Ajoutez une valeur par défaut vide
  const dispatch = useDispatch();
  const [editingProfile, setEditingProfile] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleEdit = (profile) => {
    setEditingProfile(profile.id);
    setName(profile.name);
    setEmail(profile.email);
    setPhone(profile.phone);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ id: editingProfile, name, email, phone }));
    setEditingProfile(null);
    setName('');
    setEmail('');
    setPhone('');
  };

  const handleDelete = (id) => {
    dispatch(deleteProfile(id));
  };

  return (
    <div className="profile-list-container">
      <h2>Profile List</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {editingProfile === profile.id ? (
              <form onSubmit={handleUpdate}>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                />
                <button type="submit">Update</button>
              </form>
            ) : (
              <>
                <span>{profile.name} - {profile.email} - {profile.phone}</span>
                <button onClick={() => handleEdit(profile)}>Edit</button>
                <button onClick={() => handleDelete(profile.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfileList;
