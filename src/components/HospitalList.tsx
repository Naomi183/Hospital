import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Hospital {
  id: string;
  name: string;
  address: string;
  email: string;
  location: string;
  phone: string;
}

const HospitalList: React.FC = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchHospitals();
  }, []);

  const fetchHospitals = async () => {
    try {
      const response = await axios.get<Hospital[]>('https://hospital-listing-app-backend.onrender.com/api/v1/hospital');
      setHospitals(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
      setError('Failed to fetch hospitals. Please try again later.');
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Hospital List</h2>
      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            <div>
              <strong>Name:</strong> {hospital.name}
            </div>
            <div>
              <strong>Address:</strong> {hospital.address}
            </div>
            <div>
              <strong>Email:</strong> {hospital.email}
            </div>
            <div>
              <strong>Location:</strong> {hospital.location}
            </div>
            <div>
              <strong>Phone:</strong> {hospital.phone}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HospitalList;
