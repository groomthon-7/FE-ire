import client from "./client";

export const GETHOME = () => {
  const res = client.get("");
  console.log(res.data);
};
