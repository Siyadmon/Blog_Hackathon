import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postDataAction } from '../action';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const EmailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onContactSubmit = (e) => {
    e.preventDefault();

    if (
      !EmailRegex.test(email) ||
      name.length < 3 ||
      subject.length < 3 ||
      message.length < 3
    ) {
      setErr(true);
    } else {
      dispatch(
        postDataAction('contact', {
          name: name,
          email: email,
          subject: subject,
          message: message,
        })
      );
      alert('Submitted Successfully ✓');
    }
  };

  return (
    <div>
      <div className="container">
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>

          <p className="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form name="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name" className="">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Your name here"
                        onChange={(e) => setName(e.target.value.trim())}
                        value={name}
                      />
                      {err && name === '' ? (
                        <label className="text-danger">Name is Required!</label>
                      ) : null}
                      {err && name.length > 0 && name.length < 3 ? (
                        <label className="text-danger">
                          Please enter a valid name!
                        </label>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email" className="">
                        Your email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
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

                      {EmailRegex.test(email) ? (
                        <label className="text-success">Looks Good ✓</label>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject" className="">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                      />
                      {err && subject === '' ? (
                        <label className="text-danger">
                          Subject is Required!
                        </label>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="message">Your message</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                      ></textarea>
                      {err && message === '' ? (
                        <label className="text-danger">
                          Message is Required!
                        </label>
                      ) : null}
                    </div>
                  </div>
                </div>
              </form>

              <div className="text-center text-md-left mt-4">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onContactSubmit}
                >
                  Send
                </button>
              </div>
              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <p>Spericorn Technology, CA 94126, TVM</p>
                </li>

                <li>
                  <i className="fas fa-phone mt-4 fa-2x"></i>
                  <p>+ 01 234 567 89</p>
                </li>

                <li>
                  <i className="fas fa-envelope mt-4 fa-2x"></i>
                  <p>contact@spericorn.com</p>
                </li>
              </ul>
            </div>

            <div className="mapouter mt-4 ml-3 container">
              <div className="gmap_canvas contact-map">
                <iframe
                  width="100%"
                  height="510"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=spericorn-technology&t=&z=10&ie=UTF8&iwloc=&output=embed"
                ></iframe>

                <br />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
