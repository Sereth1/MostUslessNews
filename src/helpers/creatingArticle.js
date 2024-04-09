exports.createArticle = async (articleData, dispatch) => {
  try {
    const response = await fetch("http://localhost:4000/create/articles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
    });
    const result = await response.json();

    if (response.ok) {
      dispatch({
        type: "ArticleTitle",
        payload: result.newArticle.Title,
      });
      dispatch({
        type: "ID",
        payload: result.newArticle._id,
      });

      console.log("Article has been created with ID:", result.newArticle._id);

      return result.newArticle._id;
    } else {
      console.log(`Failed to create Article: ${result.message}`);
      return null;
    }
  } catch (error) {
    console.error("Network error", error);
    return null;
  }
};
