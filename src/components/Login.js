import React, { useState } from 'react';
import { loginAction } from '../action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const EmailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //function to handle login when user submits data
  const onLogin = (e) => {
    e.preventDefault();
    if (!EmailRegex.test(email) || email === '' || password === '') {
      setErr(true);
    } else {
      dispatch(loginAction('login', { email, password }, navigate));
    }
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: '#9A616D' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: '1rem 0 0 1rem' }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={onLogin}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: '#ff6219' }}
                          ></i>
                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: '1px' }}
                        >
                          Sign into your account
                        </h5>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email address
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <div>
                            {err && email === '' ? (
                              <label className="text-danger">
                                Email is Required!
                              </label>
                            ) : null}
                            {email !== '' && !EmailRegex.test(email) ? (
                              <label className="text-danger">
                                Please enter a valid email!
                              </label>
                            ) : null}
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <div>
                            {err && password === '' ? (
                              <label className="text-danger">
                                Password is Required!
                              </label>
                            ) : null}
                          </div>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        &nbsp;
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
