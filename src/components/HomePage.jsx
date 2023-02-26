import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import SingleCard from "./SingleCard";
import SearchResultPageFetch from "./SearchResultPage";

const HomeFetch = () => {
  const rockClassics = useSelector((state) => state.redBasic.rockClassic);
  const popCulture = useSelector((state) => state.redBasic.popCulture);
  const hipHop = useSelector((state) => state.redBasic.hipHop);

  const getRandomElements = (array, maxElements) => {
    const shuffledArray = array.sort(() => 0.5 - Math.random());
    return shuffledArray.slice(0, maxElements);
  };

  const randomRockClassics = getRandomElements(rockClassics, 4);
  const randomPopCulture = getRandomElements(popCulture, 4);
  const randomHipHop = getRandomElements(hipHop, 4);

  return (
    <>
      <Col className="col-12 col-md-9 offset-md-3 mainPage">
        <Row>
          <Col className="col-10">
            <SearchResultPageFetch />
            <div id="rock">
              <h2>Rock Classics</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                {randomRockClassics.map((e, i) => (
                  <SingleCard element={e} key={`rock_${i}`} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-10">
            <div id="pop">
              <h2>Pop Culture</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection">
                {randomPopCulture.map((e, i) => (
                  <SingleCard element={e} key={`pop_${i}`} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-10">
            <div id="hiphop">
              <h2>#HipHop</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              >
                {randomHipHop.map((e, i) => (
                  <SingleCard element={e} key={`hiphop_${i}`} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default HomeFetch;
