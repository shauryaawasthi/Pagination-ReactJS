import axios from "axios";
import { useEffect, useState } from "react";

function UseApi(url: string) {
  const [data, setData] = useState<any>([]);

  const getdata: any = async () => {
    try {
      const result = await axios.get(url);
      setData(result.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, [url]);
  return { data };
}

export default UseApi;
