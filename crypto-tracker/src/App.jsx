import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import CryptoCard from "./assets/components/cryptocard/CryptoCard";
import FavouriteCard from "./assets/components/favouriteCard/FavouriteCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearCrypto, fetchCrypt } from "./redux/features/crypto/cryptoSlice";

function App() {
  const dispatch = useDispatch();
  const { coin, status, error } = useSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(fetchCrypt());
  }, [dispatch]);
  console.log("coin", coin);

  return (
    <>
      <Container>
        <Row className="mb-4">
          <Col>
            <h1 className="display-4 text-center mb-4">Crypto Price Tracker</h1>
            <div className="d-flex justify-content-center gap-3 mb-4">
              <Button onClick={() => dispatch(fetchCrypt())} variant="primary">
                Refresh
              </Button>
              <Button
                onClick={() => dispatch(clearCrypto())}
                variant="secondary"
              >
                Clear
              </Button>
            </div>
          </Col>
        </Row>
        {status === "failed" ? (
          <h1>{error}</h1>
        ) : (
          <Row>
            <Col lg={8}>
              <CryptoCard status={status} coins={coin} />
            </Col>
            <Col lg={4}>
              <FavouriteCard coins={coin} />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default App;
