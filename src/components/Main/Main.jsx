import { useEffect, useState } from "react";
import Image from "next/image";
import img from "../../app/imaaage.png";
import "../../css/Main.css";
function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/get/articles");
        if (!response.ok) {
          throw new Error("no response");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mainCtr">
      <div className="mainBox">
        {" "}
        {data.map((item) => (
          <div style={{ border: "solid 2px white", margin: 80 }} key={item._id}>
            <div className="txtTitle sizeT bB">{item.Title}</div>
            <div>
              <Image src={img} width={700} layout="intrinsic" />
            </div>
            <div className="mainBody mainBorder ">{item.Body}</div>
            <div className="">{item.tags}</div>
            <div className="mainBorder">{item.Author}</div>
            <div className="mainBorder">{item.Date}</div>
            <div className="mainBorder">{item.Considerations}</div>
            <div>{item.tags}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
