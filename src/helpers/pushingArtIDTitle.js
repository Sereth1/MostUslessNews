export async function updateArticlesIdTitleForUser(
  userId,
  articleId,
  articleTitle
) {
  const payload = {
    articlesIdTitle: {
      id: articleId,
      title: articleTitle,
    },
  };

  const endpoint = `http://localhost:4000/api/login/${userId}`;

  try {
    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const textResponse = await response.text();
      console.error("Failed to update user:", textResponse);
      throw new Error(
        `HTTP error! status: ${response.status}, body: ${textResponse}`
      );
    }

    const updatedUser = await response.json();
    console.log("Updated user:", updatedUser);
    return updatedUser;
  } catch (error) {
    console.error("Could not update user:", error);
    throw error;
  }
}
