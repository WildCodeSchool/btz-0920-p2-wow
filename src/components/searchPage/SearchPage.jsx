/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import { Carousel, Container } from 'reactstrap';
import PropTypes from 'prop-types';

import Slider from './Slider';

import {
  guild,
  alliance,
  horde,
  character,
  europe,
  usa,
  korea,
  taiwan,
} from '../../img';

import './SearchPage.css';

const SearchPage = () => {
  const [items] = useState([
    {
      cardNames: [
        ['Guild', guild],
        ['Character', character],
      ],
      title: 'Search',
    },
    {
      cardNames: [
        ['EU', europe],
        ['US', usa],
        ['KR', korea],
        ['TW', taiwan],
      ],
      title: 'Region',
    },
    {
      cardNames: [
        ['Archimonde', character],
        ['Sargeras', guild],
        ["Eldre'thalas", character],
        ['Hyjal', guild],
        ['Area 52', character],
        ['Arthas', guild],
      ],
      title: 'Server',
    },
    {
      cardNames: [
        ['Horde', horde],
        ['Alliance', alliance],
      ],
      title: 'Faction',
    },
  ]);

  const [searchTypeData, setSearchTypeData] = useState('Search Type');
  const [regionData, setRegionData] = useState('Region');
  const [factionData, setFactionData] = useState('Faction');

  const handleSelection = (e) => {
    switch (e.target.id) {
      case 'Guild':
        setSearchTypeData('Guild');
        break;
      case 'Character':
        setSearchTypeData('Character');
        break;
      case 'EU':
        setRegionData('EU');
        break;
      case 'US':
        setRegionData('US');
        break;
      case 'KR':
        setRegionData('KR');
        break;
      case 'TW':
        setRegionData('TW');
        break;
      case 'Horde':
        setFactionData('Horde');
        break;
      case 'Alliance':
        setFactionData('Alliance');
        break;
      default:
        break;
    }
  };

  const requestData = [searchTypeData, regionData, factionData];

  return (
    <Container className="d-flex flex-column flex-1">
      <Slider
        slides={items}
        handleSelection={handleSelection}
        regionData={regionData}
        requestData={requestData}
      />
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
