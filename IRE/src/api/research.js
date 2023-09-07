import client from "./client";

export const POST_Research = async (people, view, camp, weather) => {
  try {
    const res = await client.post("/", {
      people: people,
      view: view,
      camp: camp,
      weather: weather,
    });

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
