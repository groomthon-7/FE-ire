import client from "./client";

export const GETTest = async () => {
  try {
    const res = await client.get("/api/hello");
    console.log(res);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
