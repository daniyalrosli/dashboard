import axios from 'axios';

export const fetchSalesData = async () => {
  const response = await axios.get('/api/sales'); // You can mock this initially
  return response.data;
};