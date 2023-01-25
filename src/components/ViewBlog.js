import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogView, editDataAction } from '../action';

const ViewBlog = () => {
  const id = useParams()?.blogId || null;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let value = null;

  const { viewBlog } = useSelector((state) => state.credReducer);
  useEffect(() => {
    dispatch(getBlogView(`posts/${id}`));
  }, []);

  //function for handling subscribe button
  const handleSubscribe = () => {
    if (viewBlog.subscribed === false) {
      value = true;
      dispatch(
        editDataAction(`posts/${id}`, { ...viewBlog, subscribed: value })
      );
      dispatch(getBlogView(`posts/${id}`));
    } else {
      value = false;

      dispatch(
        editDataAction(`posts/${id}`, { ...viewBlog, subscribed: value })
      );
      dispatch(getBlogView(`posts/${id}`));
    }
  };

  return (
    <div>
      <div className="d-flex">
        <div className="card m-4" style={{ width: '18rem' }}>
          <img
            className="card-img-top"
            src={viewBlog.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Title : {viewBlog.title}</h5>
            <p className="card-text">Description : {viewBlog.description}</p>
            <p className="card-text">Keywords : {viewBlog.keywords}</p>
            <span className="function-buttons">
              <button
                className={`ml-2 btn  ${
                  viewBlog.subscribed ? 'btn-danger' : 'btn-success'
                }`}
                onClick={handleSubscribe}
              >
                {viewBlog.subscribed ? 'Subscribed 🔔' : 'Subscribe'}
              </button>
              <button
                className="ml-2 btn btn-info"
                onClick={() => navigate('/blogs')}
              >
                Back
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBlog;
