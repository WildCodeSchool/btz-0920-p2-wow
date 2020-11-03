import { useState } from 'react';
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Container,
  Input,
  FormGroup,
} from 'reactstrap';
import PropTypes from 'prop-types';

import WildCard from './WildCard';
// import Slide from './Slide';

const Slider = ({ slides, handleSelection }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const items = slides.map(({ title, cardNames }) => {
    return (
      <CarouselItem
        appear
        onExiting={() => setAnimating(false)}
        onExited={() => setAnimating(false)}
        key={title}
      >
        {/* Slide Title */}
        <div className="d-flex justify-content-center">
          <h1 className="border-vert m-5">{title}</h1>
        </div>
        {/* Slide Content */}
        <Container className="d-flex flex-wrap justify-content-center">
          {/* Slide Server Select Input */}
          {title === 'Server' ? (
            <FormGroup>
              <Input
                type="select"
                className="custom-select custom-select-lg"
                name="server"
                id="serverSelect"
              >
                {cardNames.map(([label]) => {
                  return (
                    <option key={label} className="text-dark">
                      {label}
                    </option>
                  );
                })}
              </Input>
            </FormGroup>
          ) : (
            // Slide Cards
            cardNames.map(([label, img]) => {
              return (
                <WildCard
                  handleClick={handleSelection}
                  key={label}
                  title={label}
                  image={img}
                  width={cardNames.length > 3 ? '200px' : '240px'}
                  height={cardNames.length > 3 ? '200px' : '240px'}
                />
              );
            })
          )}
        </Container>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      interval={false}
    >
      <CarouselIndicators
        items={slides}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {items}
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
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      cardNames: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)),
    })
  ).isRequired,
  handleSelection: PropTypes.func.isRequired,
};

export default Slider;
