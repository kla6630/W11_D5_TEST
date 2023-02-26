import { Navbar, Nav, Image } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { BsFillBookFill } from "react-icons/bs";
import SpotifyLogo from "../assets/img/logo/Spotify_Logo.png";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";
import SearchResultPageFetch from "./SearchResultPage";

const SideBarVertical = () => {
  return (
   
      <Navbar
        className=" ps-3 navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
        id="sidebar"
      >
        <Navbar.Brand href="/">
          <Image src={SpotifyLogo} alt="Spotify_Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse className="align-items-start" id="navbarNavAltMarkup">
          <Nav className="flex-column ">
            <Nav.Link href="/">
              <FaHome className="fas fa-home fa-lg" />
              &nbsp;Home
            </Nav.Link>
            <Nav.Link href="#">
              <BsFillBookFill className="fas fa-book-open fa-lg" />
              &nbsp;Your Library
            </Nav.Link>
            <SearchResultPageFetch />
          </Nav>
        </Navbar.Collapse>
        <div>
          <div className="nav-btn">
            <button className="btn signup-btn" type="button">
              Sign Up
            </button>
            <button className="btn login-btn" type="button">
              Login
            </button>

            <div>
              <a href="#"> Cookie Policy</a> |<a href="#"> Privacy</a>
            </div>
            {/* <Link to="#">Cookie Policy</Link> | <Link to="#"> Privacy</Link> */}
          </div>
        </div>
      </Navbar>
    
  );
};

export default SideBarVertical;
