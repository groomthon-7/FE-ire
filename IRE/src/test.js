import { GETTest } from "./api/test";
import { useEffect } from "react";

const Test = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GETTest();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <>test</>;
};

export default Test;
