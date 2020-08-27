import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, updatePost } from "../../actions/postAction";
import { useParams, useHistory } from "react-router-dom";

const UpdatePost = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post);
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    loadPost();
  }, []);
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);
  const loadPost = () => {
    dispatch(getPost(id));
  };
  const submitForm = (e) => {
    e.preventDefault();
    const update_post = {
      id: post.id,
      title: title,
      body: body,
    };

    dispatch(updatePost(update_post));
    history.push("/");
  };
  return (
    <div className="container">
      <div className="py-4">
        <div className="card shadow">
          <div className="card-header">Update A Post</div>
          <div className="card-body">
            <form onSubmit={submitForm}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter Post Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <textarea
                  rows="5"
                  className="form-control form-control-lg"
                  placeholder="Enter Post Body Text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                ></textarea>
              </div>
              <button className="btn btn-primary btn-lg">Update Post</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
