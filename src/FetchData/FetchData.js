import { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
  const [loader, setLoader] = useState(true);
  const [datas, setData] = useState([]);
  console.log("dsds");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {loader ? (
        <div>...loading</div>
      ) : (
        <div>
          <ul>
            {datas.map((data) => (
              <li key={data.id}>{data.title}</li>
            ))}{" "}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FetchData;
