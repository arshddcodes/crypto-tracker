import React from "react";
import { Badge, Card, Image, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const FavouriteCard = ({ coins }) => {
  const favourite = useSelector((state) => state.favourite.list);
  return (
    <Card className="stick-top" style={{ top: "20px;" }}>
      <Card.Header className="bg-warning text-dark">
        <h4 className="mb-0">Your Fav</h4>
      </Card.Header>
      <Card.Body>
        {favourite.length === 0 ? (
          <h4>you have no favourite</h4>
        ) : (
          <ListGroup variant="flush" className="border-0">
            {favourite.map((fav) => {
              const coin = coins.find((c) => c.id === fav);
              return coin ? (
                <ListGroup.Item className="border-0 px-0 d-flex justify-content-between align-items-center">
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
                </ListGroup.Item>
              ) : null;
            })}
          </ListGroup>
        )}
      </Card.Body>
    </Card>
  );
};

export default FavouriteCard;
