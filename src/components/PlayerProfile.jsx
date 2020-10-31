import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { GiEarthAsiaOceania, GiEuropeanFlag, GiUsaFlag } from 'react-icons/gi';
import { Col, Row, Container } from 'reactstrap';
import DalApi from '../dal/DalApi';
import LoadingSpinner from './LoadingSpinner';

const PlayerProfile = ({ name, realm, region }) => {
  const [playerRegion, setPlayerRegion] = useState('');
  const [playerRealm, setPlayerRealm] = useState('');
  const [playerName, setPlayerName] = useState('');
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
        setPlayerRegion(data.region);
        setPlayerRealm(data.realm);
        setPlayerName(data.name);
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
      name,
      realm,
      region
    );
  }, []);

  const displaysFlag = (reg) => {
    switch (reg) {
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
    <Container fluid>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Container>
          <Row>
            <Col xs={3}>
              <img src={thumbnail} alt="" />
            </Col>
            <Col xs={6}>
              <h1>{playerName}</h1>
            </Col>
            <Col xs="3">{displaysFlag(playerRegion)}</Col>
            <Col>{playerRealm}</Col>
          </Row>
          <Row>
            <Col>
              <img
                src={displaysClass(charClass)}
                alt=""
                height="64px"
                width="64px"
              />
            </Col>

            <Col>{specName}</Col>
            <Col>
              <img src={displaysSpecRole(specRole)} alt="" height="64px" />
            </Col>
          </Row>
          <Row>
            <Col xs={3}>
              <p>Guild</p>
            </Col>
            <Col xs={9}>{guild}</Col>
          </Row>
          <Row>
            <Col xs={3}>Item level</Col>
            <Col>{itemLevel}</Col>
          </Row>
          <Row>
            <Col xs={9}>Current raid score</Col>
            <Col xs={3}>{raidScore}</Col>
          </Row>
          <Row>
            <Col xs={9}>Current mythic score</Col>
            <Col xs={3}>{mythicScore}</Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};

PlayerProfile.propTypes = {
  name: PropTypes.string.isRequired,
  realm: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
};

export default PlayerProfile;
