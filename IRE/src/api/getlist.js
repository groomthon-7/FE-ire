import client from "./client";

export const getList = (id) => {
  try {
    const res = client.get("/ques/all", { params: { id: id } });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getDetail = (id) => {
  try {
    const res = client.get("/details", { params: { id: id } });
    return res.data;
  } catch (err) {
    throw err;
  }
};

// export const getPlace = (lat,lon) => {
//     try {
//       const res = client.get("/details", { params: { id: id } });
//       return res.data;
//     } catch (err) {
//       throw err;
//     }
//   };

// MT1, AT4, FD6
