import React, { useEffect } from 'react';
import FileBase64 from 'react-file-base64';
import { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postDataAction, getEditDataById, editDataAction } from '../action';

const AddBlog = () => {
  const id = useParams()?.id || null;
  const [err, setErr] = useState(false);
  const [onBlurErr, setOBlurErr] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //to fetch data from index id
  useEffect(() => {
    if (id) {
      dispatch(getEditDataById(`posts/${id}`));
    }
  }, [id]);

  const { editData } = useSelector((state) => state.credReducer);

  let initialValues = {
    title: '',
    description: '',
    keywords: '',
    image: '',
    subscribed: false,
  };
  const [submitValues, setSubmitValues] = useState(initialValues);

  //to handle edit functionality
  useEffect(() => {
    if (editData) {
      setSubmitValues(editData);
    }
  }, [editData]);

  //function to handle form submit
  const onFormSubmit = (e) => {
    e.preventDefault();

    if (
      submitValues.title.length < 3 ||
      submitValues.description.length < 3 ||
      submitValues.keywords.length === '' ||
      submitValues.image === ''
    ) {
      setErr(true);
    } else {
      if (id !== null) {
        dispatch(editDataAction(`posts/${id}`, submitValues));
        navigate('/blog-management');
      } else {
        dispatch(postDataAction('posts', submitValues));
        navigate('/blog-management');
      }
    }
  };

  return (
    <div>
      <div className="container mt-5 mb-5 AddBlog">
        <h3 className="m-4">{id ? 'Edit Blog' : 'Add Blog'}</h3>
        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label>Blog Title</label>
            &nbsp;<label className="text-danger">*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Title"
              onChange={(e) =>
                setSubmitValues({
                  ...submitValues,
                  title: e.target.value,
                })
              }
              value={submitValues.title}
              onBlur={() =>
                submitValues.title === ''
                  ? setOBlurErr([...onBlurErr, 'title'])
                  : setOBlurErr(onBlurErr?.filter((e) => e !== 'title'))
              }
            />
            <div>
              {err && submitValues.title.length == '' ? (
                <label className="text-danger">Title is Required!</label>
              ) : null}
              {err &&
              submitValues.title.length > 0 &&
              submitValues.title.length < 3 ? (
                <label className="text-danger">
                  Please Enter a valid Title!
                </label>
              ) : null}

              {submitValues.title.length >= 3 ? (
                <label className="text-success">Looks Good ✓</label>
              ) : null}

              {submitValues.title === '' && onBlurErr.includes('title') ? (
                <label className="text-danger">Title is Required!</label>
              ) : null}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            &nbsp;<label className="text-danger">*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              onChange={(e) =>
                setSubmitValues({
                  ...submitValues,
                  description: e.target.value,
                })
              }
              value={submitValues.description}
              onBlur={() =>
                submitValues.description === ''
                  ? setOBlurErr([...onBlurErr, 'description'])
                  : setOBlurErr(onBlurErr.filter((e) => e !== 'description'))
              }
            />
            <div>
              {err && submitValues.description.length == '' ? (
                <label className="text-danger">Description is Required!</label>
              ) : null}
              {err &&
              submitValues.description.length > 0 &&
              submitValues.description.length < 3 ? (
                <label className="text-danger">
                  Please Enter a valid description!
                </label>
              ) : null}
              {submitValues.description === '' &&
              onBlurErr.includes('description') ? (
                <label className="text-danger">Description is Required!</label>
              ) : null}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">KeyWords</label>
            &nbsp;<label className="text-danger">*</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="keywords"
              onChange={(e) =>
                setSubmitValues({
                  ...submitValues,
                  keywords: e.target.value,
                })
              }
              value={submitValues.keywords}
              onBlur={() =>
                submitValues.keywords === ''
                  ? setOBlurErr([...onBlurErr, 'keywords'])
                  : setOBlurErr(onBlurErr.filter((e) => e !== 'keywords'))
              }
            ></textarea>
            {err && submitValues.keywords.length == '' ? (
              <label className="text-danger">Keywords is Required!</label>
            ) : null}
            {submitValues.description === '' &&
            onBlurErr.includes('keywords') ? (
              <label className="text-danger">Keywords is Required!</label>
            ) : null}
          </div>
          <div>
            <FileBase64
              multiple={false}
              onDone={(files) =>
                setSubmitValues({
                  ...submitValues,
                  image: files.base64,
                })
              }
              value={submitValues.image}
              className="file-base64"
            />
            <div>
              {err && submitValues.image.length == '' ? (
                <label className="text-danger">Image is Required!</label>
              ) : null}
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
          <NavLink
            to="/blog-management"
            type="button"
            className="btn btn-danger mt-4 ml-3"
            onClick={() => (editData = null)}
          >
            Back
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
