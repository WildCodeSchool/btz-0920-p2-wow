/* eslint-disable react/forbid-prop-types */
import { useState } from 'react';
import { Carousel } from 'reactstrap';
import PropTypes from 'prop-types';

import Slider from './Slider';

import {
  guild,
  character,
  europe,
  usa,
  korea,
  taiwan,
  dh,
  dk,
  druid,
  hunter,
  mage,
  monk,
  paladin,
  priest,
  rogue,
  shaman,
  warlock,
  warrior,
} from '../../img';
import { classesAndSpecs } from '../../dal/staticData';

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
      title: 'Server',
    },
    {
      cardNames: [
        [classesAndSpecs[0].name, dh],
        [classesAndSpecs[1].name, dk],
        [classesAndSpecs[2].name, druid],
        [classesAndSpecs[3].name, hunter],
        [classesAndSpecs[4].name, mage],
        [classesAndSpecs[5].name, monk],
        [classesAndSpecs[6].name, paladin],
        [classesAndSpecs[7].name, priest],
        [classesAndSpecs[8].name, rogue],
        [classesAndSpecs[9].name, shaman],
        [classesAndSpecs[10].name, warlock],
        [classesAndSpecs[11].name, warrior],
      ],
      title: 'Class',
    },
    // {
    //   cardNames: [
    //     classesAndSpecs.map((item) => {
    //       return item.name, item.image;
    //     }),
    //   ],
    //   title: 'Class',
    // },
  ]);

  const [searchTypeData, setSearchTypeData] = useState('Search Type');
  const [regionData, setRegionData] = useState('Region');
  const [classData, setClassData] = useState('Class');

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
      case 'Death Knight':
        setClassData('Death Knight');
        break;
      case 'Demon Hunter':
        setClassData('Demon Hunter');
        break;
      case 'Druid':
        setClassData('Druid');
        break;
      case 'Hunter':
        setClassData('Hunter');
        break;
      case 'Mage':
        setClassData('Mage');
        break;
      case 'Monk':
        setClassData('Monk');
        break;
      case 'Paladin':
        setClassData('Paladin');
        break;
      case 'Priest':
        setClassData('Priest');
        break;
      case 'Rogue':
        setClassData('Rogue');
        break;
      case 'Shaman':
        setClassData('Shaman');
        break;
      case 'Warlock':
        setClassData('Warlock');
        break;
      case 'Warrior':
        setClassData('Warrior');
        break;
      default:
        break;
    }
  };

  const requestData = [searchTypeData, regionData, classData];

  return (
    <div
      className="d-flex flex-column flex-1 container-fluid"
      style={{ marginTop: '10px' }}
    >
      <Slider
        slides={
          searchTypeData === 'Character'
            ? items.filter((item) => item.title !== 'Server')
            : items.slice(0, 3)
        }
        handleSelection={handleSelection}
        regionData={regionData}
        requestData={requestData}
      />
    </div>
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
