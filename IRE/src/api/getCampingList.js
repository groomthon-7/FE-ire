import client from './client';

export const getAllCampingApi = () => {
  try {
    const res = client.get('/api/ques/all');
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getJejuCampingApi = () => {
  try {
    const res = client.get('/api/ques/jeju');
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getSeogwipoCampingApi = () => {
  try {
    const res = client.get('/api/ques/seogwipo');
    return res.data;
  } catch (err) {
    throw err;
  }
};
