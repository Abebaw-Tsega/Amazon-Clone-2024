import classes from "./carousel.module.css"
import { Carousel } from "react-responsive-carousel";
import { images } from "./img/Data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        // transitionTime={1000}
        interval={5000}
        className={classes.carousel_pointer}
      >
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} alt="" />
            </div>
          );

        }
        )}
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  )
}

export default CarouselEffect;