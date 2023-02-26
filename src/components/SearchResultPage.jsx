import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SearchBar from "./SearchBar";

const SearchResultPageFetch = () => {
  const [songInfo, setSongInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchSong = async () => {
      if (searchQuery) {
        setIsLoading(true);
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchQuery}&limit=10`
        );
        if (response.ok) {
          const data = await response.json();
          setSongInfo(data.data);
        }
        setIsLoading(false);
      }
    };
    fetchSong();
  }, [searchQuery]);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <>
      <Container>
        <SearchBar placeholder="Search" onSearch={handleSearch} />
      </Container>
      {songInfo.length > 0 && (
        <Container>
          <Row>
            {songInfo.map((song) => (
              <Col key={song.id} xs={12} md={4} className="mb-3">
                <div className="text-center">
                  <a href={`/album_page.html?id=${song.album.id}`}>
                    <img className="img-fluid" src={song.album.cover_medium} alt={song.album.title} />
                  </a>
                  <p>
                    <a href={`/album_page.html?id=${song.album.id}`}>
                      Album:{" "}
                      {song.album.title.length < 16 ? song.album.title : `${song.album.title.substring(0, 16)}...`}
                    </a>
                  </p>
                  <p>
                    <a href={`/artist_page.html?id=${song.artist.id}`}>Artist: {song.artist.name}</a>
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}
      {isLoading && <div>Loading...</div>}
    </>
  );
};

export default SearchResultPageFetch;
