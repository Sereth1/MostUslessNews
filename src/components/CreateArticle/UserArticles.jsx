import { useEffect, useState } from "react";
import "../../css/userArticles.css";

function UserArticles({ userId }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/login/${userId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(`${data}`);
        setArticles(data.articlesIdTitle);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, [userId]);

  return (
    <div className="boxArt pixelated">
      <div className="myArticles">MyArticles</div>
      <div className="artCard">
        {" "}
        {articles.map((article) => (
          <div key={article.id.$oid}>
            Title:{article.title} Id: {article.id}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserArticles;
