import client from './client';

export const getAllCampingApi = () => {
  try {
    const res = client.get('/api/ques/all');
    return res.data;
  } catch (err) {
    throw err;
  }
};
