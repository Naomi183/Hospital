import React from 'react';
import UserProfile from './UserProfile';

const Dashboard: React.FC = ({ location }: any) => {
  const user = location.state.user;

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <h3>User Information:</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <UserProfile />
    </div>
  );
};

export default Dashboard;
