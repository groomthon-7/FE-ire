import client from "./client";

export const getList = async (id) => {
  try {
    const res = await client.get("/ques/all", { params: { id: id } });
    console.log(res);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getDetail = async (id) => {
  try {
    const res = await client.get("/details", { params: { id: id } });
    console.log(res);
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
