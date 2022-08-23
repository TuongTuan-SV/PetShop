
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Button} from 'reactstrap';
  import { useState } from 'react';
  import Hinh1 from '../Image/1.jpg';
  import Hinh2 from '../Image/2.jpg';
  import Hinh3 from '../Image/3.jpg';
  import Hinh4 from '../Image/4.jpg';
  
  import '../CSS/Carousel.css'
  const items = [
    {
      src: Hinh1
    },
    {
      src: Hinh2
    },
    {
      src: Hinh3,
    },
    {
      src: Hinh4,
    }
  ];
  
  const Carousel1 = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="item-carousel"
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
         
          <img className="image-slide" src={item.src} alt={item.altText} /> 
         
        </CarouselItem>
      );
    });
  
    return (
      <div>
      
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        > 
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="next" directionText="Next" onClickHandler={next}/>
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous}  />
        </Carousel>
        <div className = "line" style = {{background :"#a99e9e"}} ></div>
      </div>
    );
  }
  
  export default Carousel1;