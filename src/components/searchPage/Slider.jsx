import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Container,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';

import { eu, us, tw, kr } from '../../dal/realms.json';
import WildCard from './WildCard';

import './SearchPage.css';

// COMPONENT START
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

  // Setting regions
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

  // Settings cards to generate
  const history = useHistory();
  useEffect(() => {
    const dataCheck = () => {
      if (
        requestData[0] !== 'Search Type' &&
        requestData[0] !== 'Character' &&
        requestData[1] !== 'Region' &&
        server !== 'Server' &&
        requestData[3] !== 'Faction'
      ) {
        history.push(
          `/TopGuilds/${requestData[1]}/${server}/${requestData[3]}`
        );
      } else if (
        requestData[0] === 'Character' &&
        requestData[1] !== 'Region' &&
        requestData[2] !== 'Class'
      ) {
        history.push(`/TopPlayers/${requestData[1]}/${requestData[2]}`);
      }
      return false;
    };
    dataCheck();
  }, [next]);

  // React-select options
  const customStyles = {
    option: () => ({
      fontSize: 18,
      color: '#495057',
      padding: 15,
      cursor: 'pointer',
    }),
    control: (base) => ({
      ...base,
      height: 100,
      minHeight: 100,
      fontSize: 18,
    }),
    placeholder: () => ({
      fontSize: 18,
    }),
    input: () => ({
      fontSize: 24,
    }),
  };
  const handleChange = (e) => {
    setServer(e.value);
    next();
  };

  // Generetings carousel slides
  const items = (requestData[0] !== 'Character'
    ? slides.slice(0, 4)
    : slides
  ).map(({ title, cardNames }) => {
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
        <Container
          className="cardsContainer d-flex flex-wrap justify-content-center flex-1"
          style={{
            alignItems: 'center',
            alignContent: 'center',
            marginBottom: '50px',
          }}
        >
          {/* Slide Server Select Input */}
          {title === 'Server' ? (
            <div className="w-75" style={{ zIndex: '500' }}>
              <Select
                onChange={handleChange}
                className="react-select-container"
                classNamePrefix="react-select"
                styles={customStyles}
                options={region
                  .sort((a, b) => (a.name > b.name ? 1 : -1))
                  .map((realm) => ({
                    label: realm.name,
                    value: realm.name,
                  }))}
              />
            </div>
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
                  width={cardNames.length === 12 ? '120px' : '240px'}
                  height={cardNames.length === 12 ? '120px' : '240px'}
                />
              );
            })
          )}
        </Container>
      </CarouselItem>
    );
  });

  // RETURN COMPONENT
  return (
    <>
      {/* <p>
        {requestData[0] === 'Character'
          ? `${requestData[0]} / ${requestData[1]} / ${requestData[3]}`
          : `${requestData[0]} / ${requestData[1]} / ${server} / ${requestData[2]}`}
      </p> */}
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

// PROPTYPES
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
