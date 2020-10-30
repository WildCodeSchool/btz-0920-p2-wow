import { useState } from 'react';
import { GiEarthAsiaOceania, GiEuropeanFlag, GiUsaFlag } from 'react-icons/gi';
import { Table } from 'reactstrap';
import DalApi from '../dal/DalApi';

const PlayerProfile = () => {
  const [region, setRegion] = useState('');
  const [realm, setRealm] = useState('');
  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [charClass, setCharClass] = useState('');
  const [specName, setSpecName] = useState('');
  const [guild, setGuild] = useState('');

  DalApi.getPlayer(
    (data) => {
      setRegion(data.region);
      setRealm(data.realm);
      setName(data.name);
      setThumbnail(data.thumbnail_url);
      setCharClass(data.class);
      setSpecName(data.active_spec_name);
      setGuild(data.guild.name);
    },
    'us',
    'Illidan',
    'Trancem'
  );

  const displaysFlag = (playerRegion) => {
    switch (playerRegion) {
      case 'Europe':
        return <GiEuropeanFlag fontSize="3em" />;
      case 'us':
        return <GiUsaFlag fontSize="3em" />;
      case 'China':
        return <GiEarthAsiaOceania fontSize="3em" />;
      case 'Russian':
        return <GiEuropeanFlag fontSize="3em" />;
      default:
        return 'error';
    }
  };

  const displaysSpecRole = (specRole) => {
    switch (specRole) {
      case 'DPS':
        return 'https://static.wikia.nocookie.net/wowpedia/images/2/27/Dps_icon.png/revision/latest?cb=20120802091709';
      case 'TANK':
        return 'https://static.wikia.nocookie.net/wowpedia/images/5/5a/Tank_icon.png/revision/latest?cb=20110626220936';
      case 'HEALER':
        return 'https://static.wikia.nocookie.net/wowpedia/images/2/2a/Healer_icon.png/revision/latest?cb=20120802091522';
      default:
        return 'error';
    }
  };

  const displaysClass = (playerClass) => {
    switch (playerClass) {
      case 'Death Knight':
        return DalApi.getClassesAndSpecs()[0].image;
      case 'Demon Hunter':
        return DalApi.getClassesAndSpecs()[1].image;
      case 'Druid':
        return DalApi.getClassesAndSpecs()[2].image;
      case 'Hunter':
        return DalApi.getClassesAndSpecs()[3].image;
      case 'Mage':
        return DalApi.getClassesAndSpecs()[4].image;
      case 'Monk':
        return DalApi.getClassesAndSpecs()[5].image;
      case 'Paladin':
        return DalApi.getClassesAndSpecs()[6].image;
      case 'Priest':
        return DalApi.getClassesAndSpecs()[7].image;
      case 'Rogue':
        return DalApi.getClassesAndSpecs()[8].image;
      case 'Shaman':
        return DalApi.getClassesAndSpecs()[9].image;
      case 'Warlock':
        return DalApi.getClassesAndSpecs()[10].image;
      case 'Warrior':
        return DalApi.getClassesAndSpecs()[11].image;
      default:
        return 'error';
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Table className="w-50">
        <tbody>
          <tr className="d-flex justify-content-around align-items-center col-md-12">
            <td>
              <img src={thumbnail} alt="" />
            </td>
            <td>
              <h1>{name}</h1>
            </td>
            <td>
              <p>{realm}</p>
            </td>
            <td>{displaysFlag(region)}</td>
          </tr>
          <tr>
            <td>
              <img
                src={displaysClass(charClass)}
                alt=""
                height="64px"
                width="64px"
              />
            </td>

            <th>{specName}</th>
            <th>
              <img src={displaysSpecRole(specName)} alt="" />
            </th>
          </tr>
          <tr>
            <th>{guild}</th>
            <th>Pals for life</th>
          </tr>
          <tr>
            <th>Item level</th>
            <th>60</th>
          </tr>
          <tr>
            <th>Current raid score</th>
            <th>0/12</th>
          </tr>
          <tr>
            <th>Current mythic score</th>
            <th>1337</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PlayerProfile;
