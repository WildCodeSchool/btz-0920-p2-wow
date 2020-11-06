import { useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
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
import { Link } from 'react-router-dom';

import { eu, us, tw, kr } from '../../dal/realms.json';
import WildCard from './WildCard';

import './SearchPage.css';

const Slider = ({ slides, handleSelection, regionData, requestData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [region, setRegion] = useState([]);
  const [server, setServer] = useState('Server');

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

  useEffect(() => {
    switch (regionData.toLowerCase()) {
      case 'eu':
        setRegion(eu);
        break;
      case 'us':
        setRegion(us);
        break;
      case 'tw':
        setRegion(tw);
        break;
      case 'kr':
        setRegion(kr);
        break;
      default:
        break;
    }
  }, [regionData]);

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
                onChange={(e) => {
                  setServer(e.target.value);
                  next();
                }}
                type="select"
                className="custom-select custom-select-lg serverSelect"
                name="server"
                id="serverSelect"
              >
                console.log(server)
                {region.map((realm) => {
                  return (
                    <option
                      key={realm.slug}
                      value={realm.name}
                      className="text-dark"
                    >
                      {realm.name}
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
                  next={next}
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

  const history = createBrowserHistory({ forceRefresh: true });
  const dataCheck = () => {
    if (
      requestData[0] !== 'Search Type' &&
      requestData[1] !== 'Region' &&
      server !== 'Server' &&
      requestData[2] !== 'Faction'
    ) {
      history.push(`/GuildsArray/${requestData[1]}/${server}/`);
    }
    return false;
  };
  dataCheck();
  return (
    <>
      <p>{`${requestData[0]} / ${requestData[1]} / ${server} / ${requestData[2]}`}</p>
      <Link
        to={`/GuildsArray/${requestData[1]}/${server}/`}
        style={{ textDecoration: 'none' }}
      >
        GO
      </Link>
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
    </>
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
  regionData: PropTypes.string.isRequired,
  requestData: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slider;
