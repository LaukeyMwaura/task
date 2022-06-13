import React from "react";
import renderHTML from "react-render-html";
import "./posts.css" // This is the css file for the posts
export default ({
  match: {
    params: { id },
  },
  history,
  posts,
  handleBookmark,
  handleRemoveBookmark,
  handleRemove,
}) => {
  let post = posts.filter((post) => post.id === id);
  post = post[0];
  const checkType = (data) => {
    let type = data.type;
    if (/^image\//.test(type)) {
      <img src={post.path} alt="" />;
    } else if (/^video\//.test(type)) {
      <video src={post.path} autoPlay loop controls />;
    } else {
      return;
    }
  };
  return (
    <div className="single-post">
      <h1 className="header">{post.title}</h1>
      <div className="single-post__body">
        {post.data ? checkType: ""}
        {renderHTML(post.body)}
      </div>

      <ul className="post-foot">
        <li>
          {post.bookmark ? (
            <button
              className="btn btn-remove-bookmarks"
              onClick={() => handleRemoveBookmark(post)}
            >
              Remove from Bookmark
            </button>
          ) : (
            <button
              className="btn btn-bookmarks"
              onClick={() => handleBookmark(post)}
            >
              Add to Bookmark
            </button>
          )}
        </li>
        <li>
          <button
            className="btn btn-remove"
            onClick={() => handleRemove(post, history)}
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  );
};
