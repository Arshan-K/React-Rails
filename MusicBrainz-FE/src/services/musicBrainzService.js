import axios from 'axios';

export const fetchBandsByCity = async (city) => {
  try {
    const response = await axios.get(`https://react-rails-u4ek.onrender.com/api/v1/bands/search?city=${city}`);
    return response.data.bands || [];
  } catch (error) {
    console.error("Error fetching bands from backend:", error);
    return [];
  }
};