import Carousel from "react-bootstrap/Carousel";

function CarouselTile(props) {
  return (
    <div className="carousel-topmost">
      <div className="carousel-main-div row">
        <div className="col carousel-inner">
          <Carousel interval="2000">
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={props.Image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={props.Image2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={props.Image3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default CarouselTile;
