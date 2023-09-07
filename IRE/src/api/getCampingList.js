import client from './client';

export const getAllCampingApi = () => {
  try {
    const res = client.get('/ques/all');
    return res.data;
  } catch (err) {
    throw err;
  }
};
