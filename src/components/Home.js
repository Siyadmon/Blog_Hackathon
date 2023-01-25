import React, { useEffect, useState } from 'react';
import content from './data';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../action';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData('posts'));
  }, []);

  const { data } = useSelector((state) => state.credReducer);

  let setValues = null;

  const [finalResult, setFinalResult] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  let [title, setTitle] = useState('');
  let [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [keywords, setKeyWords] = useState('');

  //function to handle search with keyword
  const handleSearch = () => {
    // setValues = data.filter((data) => data.keywords.split(' ') === searchValue);

    setValues = data.filter((data) =>
      data.keywords?.split(' ')?.includes(searchValue)
    );
    setValues = setValues?.map((data, index) => {
      setTitle(data.title);
      setDescription(data.description);
      setImage(data.image);
      setKeyWords(data.keywords);
    });
    if (setValues !== null) {
      setFinalResult(true);
      // setSearchValue('');
    } else {
      setFinalResult(false);
      setSearchValue('');
    }
  };

  return (
    <div>
      <div className="d-flex m-5">
        <input
          type="search"
          className="form-control "
          placeholder="Search blogs keywords here..."
          onChange={(e) => setSearchValue(e.target.value.trim())}
          value={searchValue}
          style={{ width: '80%' }}
        />

        <span>
          <button className="btn btn-primary ml-2" onClick={handleSearch}>
            Search
          </button>
        </span>
      </div>

      {title !== '' && finalResult === true && searchValue !== '' ? (
        <div className="d-flex home-blog-display">
          <div className="card mb-5" style={{ width: '250px' }}>
            <img
              className="card-img-top"
              src={image}
              alt="Card image cap"
              style={{ height: '150px' }}
            />
            <div className="card-body">
              <h5 className="card-title">Title : {title}</h5>
              <p className="card-text">Description : {description}</p>
              <p className="card-text">Keywords : {keywords}</p>
              <span className="function-buttons">
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setFinalResult(false);
                    setSearchValue('');
                    setTitle('');
                    setDescription('');
                    setImage('');
                    setKeyWords('');
                  }}
                >
                  Close
                </button>
              </span>
            </div>
          </div>
        </div>
      ) : null}

      <div className="carousal">
        <Carousel
          autoPlay={true}
          interval={1800}
          transitionTime={1000}
          infiniteLoop={true}
        >
          {content.map((d, key) => (
            <div key={key}>
              <img src={d.link} />
            </div>
          ))}
        </Carousel>

        <div className="home-images container">
          {content?.map((data, index) => (
            <div
              className="card m-2 data-img"
              style={{ width: '250px' }}
              key={index}
            >
              <img
                className="card-img-top"
                src={data.link}
                alt="Card image cap"
              />

              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer  Section ----------------------------------------------------------------------------------------           */}

      <footer className="footer-section mt-5">
        <div className="container">
          <div className="footer-cta pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>1010 Avenue, sw 54321, chandigarh</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone"></i>
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>9876543210 0</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta">
                  <i className="far fa-envelope-open"></i>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>mail@info.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img
                        src="https://i.ibb.co/QDy827D/ak-logo.png"
                        className="img-fluid"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <div className="footer-text">
                    <p>
                      Lorem ipsum dolor sit amet, consec tetur adipisicing elit,
                      sed do eiusmod tempor incididuntut consec tetur
                      adipisicing elit,Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="#">
                      <i className="fab fa-facebook-f facebook-bg"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter twitter-bg"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-google-plus-g google-bg"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">services</a>
                    </li>
                    <li>
                      <a href="#">portfolio</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Our Services</a>
                    </li>
                    <li>
                      <a href="#">Expert Team</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                    <li>
                      <a href="#">Latest News</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>
                      Don’t miss to subscribe to our new feeds, kindly fill the
                      form below.
                    </p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button>
                        <i className="fab fa-telegram-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; 2018, All Right Reserved{' '}
                    <a href="">Siyad</a>
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Policy</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
