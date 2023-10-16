import React, { useEffect } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import Review from '../components/Review';
import { movieAction } from '../redux/action/movieAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Moviedetail2 = () => {
    /* let [showDetail, setShowDetail] = useState({});
    const API_KEY = process.env.REACT_APP_API_KEY; */

    /* 리덕스로 변환 */
    const dispatch = useDispatch();
    const {
        movieDetail2,
    } = useSelector((state) => state.people);
    let { id } = useParams();

    /* 리덕스 선언안할거면 이대로 써도 됨 */
    /* const detail = async () => {
      let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
  
      let response = await fetch(url);
      let data = await response.json();
      setShowDetail(data);
      //console.log(data)
    };   
     useEffect(() => {
      detail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showDetail]);
   */

    useEffect(() => {
        dispatch(movieAction.getMovieDetail2(id));
        dispatch(movieAction.getPeople());
    }, [id, dispatch]);

    return (
        <Container>
            <Row>
                <Col lg={6} className="detail_section detail_img_card">
                    <div
                        className="detail-img"
                        style={{
                            backgroundImage:
                                "url(" +
                                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieDetail2?.profile_path
                                }` +
                                ")",
                        }}
                    ></div>
                </Col>

                <Col lg={6} className="detail_section">
                    {/* <ul className="details-genres">
                        genres 배열이 있는지 확인 후 렌더링
                        {movieDetail2.genres &&
                            movieDetail2.genres.map((genre, idx) => (
                                <li key={idx}>{genre.name}</li>
                            ))}
                    </ul> */}
                    <div className="detail_title">{movieDetail2?.name}</div>
                    <div className='detail_button'><Link to='/movies'>go back</Link></div>
                    <div className="detail_tagline">{movieDetail2?.birthday}</div>
                    <hr />
                    <div className="detail_overview">{movieDetail2?.biography}</div>
                    
                    <hr />

                    <div className="detail_info">
                        {/* <FontAwesomeIcon
              className="detail_star"
              icon={faStar}
              style={{ color: "#ecd227" }}
            /> */}
                        <ul className="social-group">
                            <li className="vote-average">
                                <span className="imdb">IMDB</span>
                                {movieDetail2?.vote_average}
                            </li>
                            <li className='users'>
                                <FontAwesomeIcon icon={faUsers} className='users-icon' />
                                <span className="users-text">{movieDetail2?.popularity}</span>
                            </li>
                            {/* <li className="adult-info">
                                <span>
                                    {movieDetail2?.adult ? "18+" : "under 18"}
                                </span>
                            </li> */}
                        </ul>
                    </div>

                    <hr />
                    <div className="detail_info2">
                        <div>
                            <Badge bg='danger' text="light">
                                place_of_birth
                            </Badge>
                            <span className="badge-text">{movieDetail2?.place_of_birth}</span>
                        </div>
                        <div>
                            <Badge bg='danger' text="light">
                                known_for_department
                            </Badge>
                            <span className="badge-text">{movieDetail2?.known_for_department}</span>
                        </div>
                        {/* <div>
                            <Badge bg='danger' text="light">
                                Runtime
                            </Badge>
                            <span className="badge-text">{movieDetail2?.runtime}</span>
                        </div> */}
                        <div>
                            <Badge bg='danger' text="light">
                                Popularity
                            </Badge>
                            <span className="badge-text">{movieDetail2?.popularity}</span>
                        </div>
                    </div>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
};

export default Moviedetail2;

