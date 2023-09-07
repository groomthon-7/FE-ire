import client from "./client";

export const GETTest = () => {
  const res = client.get("/api/hello");
  console.log(res);
};
