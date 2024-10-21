import axios from 'axios';

export const fetchTeamById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/teams/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching team:', error);
    return null;
  }
};
