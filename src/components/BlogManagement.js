import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getData } from '../action';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../action';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BlogManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getData('posts'));
  }, []);

  const { data } = useSelector((state) => state.credReducer);

  //function to delete blog
  const onDelete = (id) => {
    dispatch(deleteData(`posts/${id}`));
    navigate('/blog-management');
  };

  //function to navigate to specified url
  const onDataEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  //function to view data
  const viewData = (id) => {
    navigate(`/view/${id}`);
  };

  const [searchValue, setSearchValue] = useState('');
  let search = data?.filter((e) => e.title?.includes(searchValue));

  return (
    <div className="container mt-4 mb-5">
      <div>
        <span className="addBlog">
          <input
            type="search"
            className="form-control ml-5"
            placeholder="Search blogs..."
            onChange={(e) => setSearchValue(e.target.value.trim())}
            value={searchValue}
            style={{ width: '80%' }}
          />
          <NavLink to="/add-blog" className="btn btn-primary mr-3">
            Add Blog
          </NavLink>
        </span>
        <br />
        <div className="d-flex display">
          {search?.map((data, index) => (
            <div
              className="card ml-4 mt-4"
              style={{ width: '250px' }}
              key={index}
            >
              <img
                className="card-img-top"
                src={data.image}
                alt="Card image cap"
                style={{ height: '150px' }}
              />
              <div className="card-body">
                <h5 className="card-title">Title : {data.title}</h5>
                <p className="card-text">Description : {data.description}</p>
                <span className="function-buttons">
                  <button
                    className="btn btn-warning"
                    onClick={() => viewData(data.id)}
                  >
                    View
                  </button>
                  <button
                    className="ml-2 btn btn-info"
                    onClick={() => onDataEdit(data.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="ml-2 btn btn-danger"
                    onClick={() => onDelete(data.id)}
                  >
                    Delete
                  </button>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogManagement;
