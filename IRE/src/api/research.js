import client from "./client";

export const POST_Research = async (people, view, camp, weather, other) => {
  try {
    const res = await client.post("/", {
      people: people,
      view: view,
      camp: camp,
      weather: weather,
      other: other,
    });

    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
