import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDataToView } from '../action';

const ViewIndividualData = () => {
  const id = useParams()?.viewId || null;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(getDataToView(`posts/${id}`));

  const { viewData } = useSelector((state) => state.credReducer);

  return (
    <div>
      <div className="d-flex">
        <div className="card m-4" style={{ width: '18rem' }}>
          <img
            className="card-img-top"
            src={viewData.image}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Title : {viewData.title}</h5>
            <p className="card-text">Description : {viewData.description}</p>
            <p className="card-text">Keywords : {viewData.keywords}</p>
            <span className="function-buttons">
              <button
                className="ml-2 btn btn-info"
                onClick={() => navigate('/blog-management')}
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

export default ViewIndividualData;
