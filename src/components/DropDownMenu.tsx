import React, { useState } from 'react';
import axios from 'axios';

const AddHospital: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddHospital = async () => {
    try {
      const response = await axios.post('https://hospital-listing-app-backend.onrender.com/api/v1/hospital', {
        email,
        name,
        address,
        location,
        phone,
      });
      

      // Handle successful addition of hospital
      console.log('Hospital added successfully!');
      setName('');
      setEmail('');
      setAddress('');
      setLocation('');
      setPhone('');
      setErrorMessage('');
    } catch (error) {
      console.error('Error adding hospital:', error);
      setErrorMessage('Failed to add hospital. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Add Hospital</h2>
      {errorMessage && <div>{errorMessage}</div>}
      <form onSubmit={handleAddHospital}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div>
          <label htmlFor="location">Location</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <button type="submit">Add Hospital</button>
      </form>
    </div>
  );
};

const DropdownMenu: React.FC = () => {
  const [showAddHospital, setShowAddHospital] = useState(false);

  const handleAddHospitalClick = () => {
    setShowAddHospital(true);
  };

  return (
    <div>
      <button type="button">Resources</button>
      {showAddHospital && <AddHospital />}
    </div>
  );
};

export default DropdownMenu;
