import React, { useEffect } from 'react';
import { getData } from '../action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData('posts'));
  }, []);

  const navigate = useNavigate();
  const { data } = useSelector((state) => state.credReducer);

  const [searchValue, setSearchValue] = useState('');

  const viewData = (id) => {
    navigate(`/view-blog/${id}`);
  };

  let search = data?.filter((e) => e.title?.includes(searchValue));

  return (
    <div className="container mt-5 mb-5 blogsDisplay">
      <input
        type="search"
        className="form-control ml-4"
        placeholder="Search blogs here..."
        onChange={(e) => setSearchValue(e.target.value.trim())}
        value={searchValue}
        style={{ width: '95%' }}
      />

      <div>
        <div className="d-flex display">
          {search?.map((data, index) => (
            <div className="card m-2" style={{ width: '250px' }} key={index}>
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
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
