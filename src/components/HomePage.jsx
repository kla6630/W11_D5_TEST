import { Component } from "react";

import SearchResultPageFetch from "./SearchResultPage";
// import HomeAlbumsFetch from "../components/HomeAlbumsFetch";

class HomePage extends Component {
  render() {
    return (
      <>
        <SearchResultPageFetch />
        {/* <HomeAlbumsFetch/> */}
      </>
    );
  }
}

export default HomePage;
