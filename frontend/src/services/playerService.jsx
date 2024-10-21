import axios from 'axios';


export const fetchPlayers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/players`);
    return response.data;
  } catch (error) {
    console.error('Error fetching players:', error);
    return [];
  }
};

export const createTeam = async (teamData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/teams`, teamData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error('Error creating team:', error);
    return { success: false };
  }
};
