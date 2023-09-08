import client from "./client";

export const POST_Research = async (setIsLoading, isLoading, tag) => {
  try {
    setIsLoading(true);
    const res = await client.get("/ques/gettag", { params: { tag: tag } });
    setIsLoading(false);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
