import React from 'react';

const UserProfile: React.FC = () => {
  // Retrieve user information from state or API

  const handleUpdateProfile = (formData: any) => {
    // Handle profile update logic
    console.log(formData);
  };

  const handleUpdatePassword = (formData: any) => {
    // Handle password update logic
    console.log(formData);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleUpdateProfile}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <button type="submit">Update Profile</button>
      </form>

      <h2>Change Password</h2>
      <form onSubmit={handleUpdatePassword}>
        <label htmlFor="currentPassword">Current Password</label>
        <input type="password" id="currentPassword" name="currentPassword" />

        <label htmlFor="newPassword">New Password</label>
        <input type="password" id="newPassword" name="newPassword" />

        <label htmlFor="confirmPassword">Confirm New Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />

        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default UserProfile;
