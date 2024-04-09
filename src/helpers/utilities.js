exports.randStr = () =>
  Array.from({ length: 6 }, () =>
    String.fromCharCode(97 + Math.random() * 26)
  ).join("");

exports.label = [
  {
    labels: ["userName", "password", "name", "email"],
  },
];

exports.articleLabel = [
  { label: "Title" },
  { label: "Author" },
  { label: "Date" },
  { label: "imgArt" },
  { label: "Tags" },
  { label: "Considerations" },
  { label: "Body" },
];

exports.closeLogin = (dispatch) => {
  setTimeout(() => {
    dispatch({ type: "loggedIn" });
  }, 2000);
};
