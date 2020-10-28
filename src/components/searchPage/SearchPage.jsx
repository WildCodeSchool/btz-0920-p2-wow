import { useState } from 'react';
import './SearchPage.css';
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
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
        <WildCard title={item.title} />
      </CarouselItem>
    );
  });

  return (
    <Container>
      <h1 className="border-bot-primary title-y">Looking For</h1>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
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

      <Container
        className="d-flex flex-column justify-content-center"
        style={{ marginTop: '10vh' }}
      >
        <Row>
          <Col className="d-flex justify-content-center m-5">
            <h1 className="border-bot-primary title-y">Looking For</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <WildCard title="Guild" />
        </Row>
      </Container>
    </Container>
  );
};

export default SearchPage;
