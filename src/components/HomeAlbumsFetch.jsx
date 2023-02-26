import { useState, useEffect, Link } from "react";

const HomeAlbumsFetch = () => {
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [hipHopSongs, setHipHopSongs] = useState([]);

  const fetchSongs = async (artist, setSongs) => {
    try {
      const headers = new Headers({
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
      });

      const endpoint = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`;
      const response = await fetch(endpoint, {
        method: "GET",
        headers,
      });

      if (response.ok) {
        const data = await response.json();
        setSongs(data.data.slice(0, 4));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];
    const popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];
    const hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

    rockArtists.forEach((artist) => {
      fetchSongs(artist, setRockSongs);
    });

    popArtists.forEach((artist) => {
      fetchSongs(artist, setPopSongs);
    });

    hipHopArtists.forEach((artist) => {
      fetchSongs(artist, setHipHopSongs);
    });
  }, []);

  return (
    <div>
      <h1>Rock and Classic Music</h1>
      {rockSongs.map((song) => (
        <div key={song.id} className="col text-center">
          <Link to={`/album/${song.album.id}`}>
            <img className="img-fluid" src={song.album.cover_medium} alt={song.title} />
          </Link>
          <p>
            <Link to={`/album/${song.album.id}`}>
              Album: {song.album.title.length < 16 ? song.album.title : `${song.album.title.substring(0, 16)}...`}
            </Link>
            <br />
            <Link to={`/artist/${song.artist.name}`}>Artist: {song.artist.name}</Link>
          </p>
        </div>
      ))}
      <h1>Pop Music</h1>
      {popSongs.map((song) => (
        <div key={song.id}>
          <h2>{song.title}</h2>
          <p>{song.artist.name}</p>
          <p>{song.album.title}</p>
        </div>
      ))}
      <h1>Hip Hop Music</h1>
      {hipHopSongs.map((song) => (
        <div key={song.id}>
          <h2>{song.title}</h2>
          <p>{song.artist.name}</p>
          <p>{song.album.title}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeAlbumsFetch;
