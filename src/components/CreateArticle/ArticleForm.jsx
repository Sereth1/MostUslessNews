import React, { useEffect, useRef, useState } from "react";
import "../../css/articleForm.css";
import { useArticleState } from "../../helpers/articleReduser";
import { articleLabel } from "../../helpers/utilities";
import { createArticle } from "../../helpers/creatingArticle";
import { useNavigate } from "react-router-dom";
import { updateArticlesIdTitleForUser } from "../../helpers/pushingArtIDTitle";

function ArticleForm({ user, userId }) {
  articleLabel;
  let navigate = useNavigate();
  const formRef = useRef(null);

  const [
    {
      Title,
      Author,
      Date,
      imgArt,
      Tags,
      Considerations,
      Body,
      ID,
      ArticleTitle,
    },
    dispatch,
  ] = useArticleState();

  console.log(`asdadssa${ID}`);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let articleData = {
      Title,
      Author,
      Date,
      imgArt,
      Tags,
      Considerations,
      Body,
    };

    if (user === null) {
      navigate("/login");
    } else {
      try {
        ID === null
          ? createArticle(articleData, dispatch)
          : updateArticlesIdTitleForUser(userId, ID, ArticleTitle);

        formRef.current.reset();
        console.log(articleData);
      } catch (error) {
        console.error("Failed to create and update article:", error);
      }
    }
  };

  const articleForm = articleLabel.map((el, i) => (
    <React.Fragment key={i}>
      <label className="labArt pixelated" key={el.label}>
        {el.label}
      </label>
      <input
        onChange={(e) => dispatch({ type: el.label, payload: e.target.value })}
        className="inpArt"
        style={i > 5 ? { height: 150 } : { height: 30 }}
        key={i}
      ></input>
    </React.Fragment>
  ));
  return (
    <div className="parentContainer">
      <div className="masterArt">
        <div className="box1Art">
          <form ref={formRef} onSubmit={handleSubmit}>
            {articleForm}
            <button className="btnSArt pixelated ">post</button>
          </form>
        </div>
        <button></button>
      </div>
    </div>
  );
}

export default ArticleForm;
//
