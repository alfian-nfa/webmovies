import { Card, Container, Row, Col, Image } from "react-bootstrap";
import scImages from "../assets/trending/shangchi.jpg";
import dune from "../assets/trending/dune.jpg";
import kenshin from "../assets/trending/kenshin.jpg";
import nobody from "../assets/trending/nobody.jpg";
import jamesbond from "../assets/trending/jamesbond.jpg";
import interstellar from "../assets/trending/interstellar.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <h1 className="text-white py-4">TRENDING MOVIES</h1>
        <Row>
          <Col id="trending" md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={scImages} alt="Shang-chi" height="auto" className="Images" />
              <Card.Title className="text-center mt-2">Shang-Chi</Card.Title>
              <Card.Text className="text-left p-2 m-1">This is a wider card with supporting text below as a natural content</Card.Text>
              <Card.Text className="text-left p-2 m-1">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={dune} alt="Dune" height="auto" className="Images" />
              <Card.Title className="text-center mt-2">Dune</Card.Title>
              <Card.Text className="text-left p-2 m-1">This is a wider card with supporting text below as a natural content</Card.Text>
              <Card.Text className="text-left p-2 m-1">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={kenshin} alt="Kenshin" height="auto" className="Images" />
              <Card.Title className="text-center mt-2">Kenshin</Card.Title>
              <Card.Text className="text-left p-2 m-1">This is a wider card with supporting text below as a natural content</Card.Text>
              <Card.Text className="text-left p-2 m-1">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={nobody} alt="Nobody" height="auto" className="Images" />
              <Card.Title className="text-center mt-2">Nobody</Card.Title>
              <Card.Text className="text-left p-2 m-1">This is a wider card with supporting text below as a natural content</Card.Text>
              <Card.Text className="text-left p-2 m-1">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={jamesbond} alt="James Bond" height="auto" className="Images" />
              <Card.Title className="text-center mt-2">James Bond</Card.Title>
              <Card.Text className="text-left p-2 m-1">This is a wider card with supporting text below as a natural content</Card.Text>
              <Card.Text className="text-left p-2 m-1">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Image src={interstellar} alt="interstellar" height="auto" className="Images" />
              <Card.Title className="text-center mt-2">Interstellar</Card.Title>
              <Card.Text className="text-left p-2 m-1">This is a wider card with supporting text below as a natural content</Card.Text>
              <Card.Text className="text-left p-2 m-1">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
