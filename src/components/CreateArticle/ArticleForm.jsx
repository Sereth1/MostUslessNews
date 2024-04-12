import React, { useEffect, useRef, useState } from "react";
import "../../css/articleForm.css";
import { useArticleState } from "../../helpers/articleReduser";
import { articleLabel } from "../../helpers/utilities";
import { createArticle } from "../../helpers/creatingArticle";
import { useNavigate } from "react-router-dom";
import { updateArticlesIdTitleForUser } from "../../helpers/pushingArtIDTitle";

function ArticleForm({ user, userId }) {
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgArt = URL.createObjectURL(file);

      dispatch({ type: "imgArt", payload: imgArt });
    }
  };
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const articleData = {
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
      return;
    }

    try {
      createArticle(articleData, dispatch);
      ID === null && updateArticlesIdTitleForUser(userId, ID, ArticleTitle);

      formRef.current.reset();
    } catch (error) {
      console.error("Failed to create or update article:", error);
    }
  };

  return (
    <div className="form-container">
      <form ref={formRef} onSubmit={handleSubmit} className="form">
        {articleLabel.map((el, i) => (
          <div className="form-field" key={el.label}>
            <label htmlFor={el.label}>{el.label}</label>
            {el.label === "imgArt" ? (
              <input
                type="file"
                name={el.label}
                accept="image/*" // Accept only images
                onChange={handleFileChange} // Custom handler for file input
              />
            ) : el.type === "textarea" ? (
              <textarea
                name={el.label}
                onChange={(e) =>
                  dispatch({ type: el.label, payload: e.target.value })
                }
              ></textarea>
            ) : (
              <input
                type="text"
                name={el.label}
                onChange={(e) =>
                  dispatch({ type: el.label, payload: e.target.value })
                }
              />
            )}
          </div>
        ))}
        <button type="submit" className="form-button">
          Post
        </button>
      </form>
    </div>
  );
}

export default ArticleForm;
