/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import './SearchPage.css';
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import PropTypes from 'prop-types';
import WildCard from './WildCard';

const items = [
  {
    cards: 2,
    cardNames: ['Guild', 'Character'],
    title: 'Guild',
  },
  {
    cards: 6,
    cardNames: ['EU', 'US', 'CN/KR', 'RU', 'OC', 'BR'],
    title: 'Region',
  },
  {
    cards: 6,
    cardNames: [
      'Archimonde',
      'Sargeras',
      "Eldre'thalas",
      'Hyjal',
      'Area 52',
      'Arthas',
    ],
    title: 'Server',
  },
  {
    cards: 2,
    cardNames: ['Horde', 'Alliance'],
    title: 'Faction',
  },
];

const SearchPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(false)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Container className="d-flex flex-wrap justify-content-center">
          {item.cardNames.map((cardName) => {
            return (
              <WildCard
                key={cardName}
                title={cardName}
                width="240px"
                height="240px"
              />
            );
          })}
        </Container>
      </CarouselItem>
    );
  });

  return (
    <Container
      className="d-flex flex-column justify-content-start align-items-center"
      style={{
        height: '100vh',
      }}
    >
      <div className="d-flex justify-content-center">
        <h1 className="border-bot-primary title-y m-5 ">Looking For</h1>
      </div>
      <Carousel
        style={{ display: 'contents' }}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={false}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </Container>
  );
};

export default SearchPage;

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: PropTypes.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: PropTypes.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: PropTypes.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: PropTypes.bool,
  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(['carousel', false]),
  // the interval at which the carousel automatically cycles (default: 5000)
  // If set to false, carousel will not Autoplay (i.e. will not automatically cycle).
  interval: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.bool,
    false,
  ]),
  children: PropTypes.array,
  // called when the mouse enters the Carousel
  mouseEnter: PropTypes.func,
  // called when the mouse exits the Carousel
  mouseLeave: PropTypes.func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool,
  cssModule: PropTypes.object,
  // controls whether the touch gestures on the Carousel works or not (default: true)
  enableTouch: PropTypes.bool,
};
