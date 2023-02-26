import { Row, Col, Container, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FaHome } from "react-icons/fa";
// import { BsFillBookFill } from "react-icons/bs";

import PlayButton from "../assets/img/playerbuttons/Play.png";
import NextButton from "../assets/img/playerbuttons/Next.png";
import PreviousButton from "../assets/img/playerbuttons/Previous.png";
import RepeatButton from "../assets/img/playerbuttons/Repeat.png";
import ShuffleButton from "../assets/img/playerbuttons/Shuffle.png";

const NavBarFlexBottom = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row>
        <Col className="col-lg-10 offset-lg-2">
          <Row>
            <Col className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
              <Row className="pulsanti">
                <a href="#">
                  <Image src={ShuffleButton} alt="shuffle" />
                </a>
                <a href="#">
                  <Image src={PreviousButton} alt="previous" />
                </a>
                <a href="#">
                  <Image src={PlayButton} alt="shuffle" />
                </a>
                <a href="#">
                  <Image src={NextButton} alt="shuffle" />
                </a>
                <a href="#">
                  <Image src={RepeatButton} alt="shuffle" />
                </a>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default NavBarFlexBottom;
