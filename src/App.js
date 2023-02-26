import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

//SHARED COMPONENTS//
import SidebarVertical from "./components/SidebarVertical";
import NavBarTop from "./components/NavBarTop";
import NavBarFlexBottom from "./components/NavBarFlexBottom";

//PAGES//
import HomePage from "./components/HomePage";
import AlbumPage from "./components/AlbumPage";
import ArtistPage from "./components/ArtistPage";
import SongDetails from "./components/SongDetails";

const App = () => (
  <>
    <SidebarVertical />
    <Container>
      <BrowserRouter>
        <NavBarTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/album/:id" element={<AlbumPage />} />
          <Route path="/artist/:id" element={<ArtistPage />} />
        </Routes>
        <NavBarFlexBottom />
      </BrowserRouter>
    </Container>
  </>
);

export default App;
