import React, { useState } from 'react';
import { postData } from '../../services/api';

function PostDataComponent() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postData({ name });
      console.log('Data posted:', result);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name Complet"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostDataComponent;
