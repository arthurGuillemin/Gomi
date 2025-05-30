import axios from 'axios';

const API_URL = ' https://gomibackend.onrender.com/users';


export const updateUserdata = async (userId, token, updatedData) => {
  try {
    const response = await axios.put(
      `${API_URL}/${userId}`,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error updating user data:', error);
    throw error;
  }
};