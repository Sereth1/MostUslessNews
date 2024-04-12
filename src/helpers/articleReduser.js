import { useReducer } from "react";

export const initialState = {
  status: "initial",
  Title: null,
  Author: null,
  Date: null,
  imgArt: null,
  Tags: null,
  Considerations: null,
  Body: null,
  ID: null,
  imgArt: null,
};

export const articleFormRed = (state, action) => {
  switch (action.type) {
    case "status":
      return { ...state, status: "" };
    case "Title":
      return { ...state, Title: action.payload };
    case "Author":
      return { ...state, Author: action.payload };
    case "imgArt":
      return { ...state, imgArt: action.payload };
    case "Tags":
      return { ...state, Tags: action.payload };
    case "Considerations":
      return { ...state, Considerations: action.payload };
    case "Date":
      return { ...state, Date: action.payload };
    case "Body":
      return { ...state, Body: action.payload };
    case "ID":
      return { ...state, ID: action.payload };
    case "ArticleTitle":
      return { ...state, ArticleTitle: action.payload };
    case "emptyInput":
      return initialState;

    default:
      return state;
  }
};

export const useArticleState = () => {
  const [state, dispatch] = useReducer(articleFormRed, initialState);

  return [state, dispatch];
};
