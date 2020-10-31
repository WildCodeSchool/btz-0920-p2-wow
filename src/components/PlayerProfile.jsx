import { useEffect, useState } from 'react';
import { GiEarthAsiaOceania, GiEuropeanFlag, GiUsaFlag } from 'react-icons/gi';
import { Table } from 'reactstrap';
import DalApi from '../dal/DalApi';
import LoadingSpinner from './LoadingSpinner';

const PlayerProfile = () => {
  const [region, setRegion] = useState('');
  const [realm, setRealm] = useState('');
  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [charClass, setCharClass] = useState('');
  const [specName, setSpecName] = useState('');
  const [specRole, setSpecRole] = useState('');
  const [guild, setGuild] = useState('');
  const [itemLevel, setItemLevel] = useState(0);
  const [raidScore, setRaidScore] = useState('');
  const [mythicScore, setMythicScore] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    DalApi.getPlayer(
      (data) => {
        setRegion(data.region);
        setRealm(data.realm);
        setName(data.name);
        setThumbnail(data.thumbnail_url);
        setCharClass(data.class);
        setSpecName(data.active_spec_name);
        setSpecRole(data.active_spec_role);
        setGuild(data.guild.name);
        setItemLevel(data.gear.item_level_equipped);
        setRaidScore(data.raid_progression['nyalotha-the-waking-city'].summary);
        setMythicScore(data.mythic_plus_scores_by_season[0].scores.all);
        setLoading(false);
      },
      'us',
      `Illidan`,
      'Trancem'
    );
  }, []);

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

  const displaysSpecRole = (playerSpecRole) => {
    switch (playerSpecRole) {
      case 'DPS':
        return 'https://static.wikia.nocookie.net/wowpedia/images/2/27/Dps_icon.png/revision/latest?cb=20120802091709';
      case 'TANK':
        return 'https://i.pinimg.com/236x/6a/2e/da/6a2edae61362537b8558c9007d92a3b6.jpg';
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
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Table className="w-50" hover>
          <tbody>
            <tr>
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
                <img src={displaysSpecRole(specRole)} alt="" height="64px" />
              </th>
            </tr>
            <tr>
              <th>Guild</th>
              <th>{guild}</th>
            </tr>
            <tr>
              <th>Item level</th>
              <th>{itemLevel}</th>
            </tr>
            <tr>
              <th>Current raid score</th>
              <th>{raidScore}</th>
            </tr>
            <tr>
              <th>Current mythic score</th>
              <th>{mythicScore}</th>
            </tr>
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default PlayerProfile;
