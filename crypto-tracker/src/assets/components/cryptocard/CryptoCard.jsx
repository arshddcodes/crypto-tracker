import { Badge, Button, Card, Image, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../../../redux/features/crypto/favourite/favouriteSlice";

function CryptoCard({ coins, status }) {
  const favourite = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Header>
        <h3>Currencies</h3>
      </Card.Header>
      <Card.Body>
        {status === "loading" ? (
          <h1>loading</h1>
        ) : (
          <ListGroup>
            {coins.map((coin) => (
              <ListGroup.Item
                key={coin.id}
                className="d-flex justify-content-between align-items-center py-4"
              >
                <div className="d-flex align-items-center">
                  <Image
                    src={coin.image}
                    alt="image"
                    width={24}
                    height={24}
                    className="me-2"
                    rounded
                  />
                  <span className="fw-medium ">{coin.name}</span>
                </div>
                <Badge bg="success">{coin.current_price}</Badge>
                {favourite.includes(coin.id) ? (
                  <Button onClick={() => dispatch(removeFavourite(coin.id))}>
                    Remove
                  </Button>
                ) : (
                  <Button onClick={() => dispatch(addFavourite(coin.id))}>
                    add Favourite
                  </Button>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
}

export default CryptoCard;
