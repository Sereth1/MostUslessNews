import ArticleForm from "./ArticleForm";
import UserArticles from "./UserArticles";

function UserProfile({ user, userId }) {
  return (
    <div
      className=""
      style={{ display: "flex", gap: 30, justifyContent: "flex-end" }}
    >
      <UserArticles user={user} userId={userId} />
      <ArticleForm user={user} userId={userId} />
    </div>
  );
}

export default UserProfile;
