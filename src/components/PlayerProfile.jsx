import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Col, Table, Container, Row } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';

import DalApi from '../dal/DalApi';
import LoadingSpinner from './LoadingSpinner';
import Flag from './flags/Flag';
import Error from './Error';

const PlayerProfile = () => {
  const { name, realm, region } = useParams();
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
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  const history = useHistory();

  // link to player page
  const guildLink = () => {
    history.push(`/guild/${playerRegion}/${realm}/${guild}/`);
  };
  useEffect(() => {
    const getDatas = async () => {
      try {
        const player = await DalApi.getPlayer(region, realm, name);

        setPlayerRegion(player.data.region);
        setPlayerRealm(player.data.realm);
        setPlayerName(player.data.name);
        setThumbnail(player.data.thumbnail_url);
        setCharClass(player.data.class);
        setSpecName(player.data.active_spec_name);
        setSpecRole(player.data.active_spec_role);
        setGuild(player.data.guild.name);
        setItemLevel(player.data.gear.item_level_equipped);
        setRaidScore(
          player.data.raid_progression['nyalotha-the-waking-city'].summary
        );
        setMythicScore(player.data.mythic_plus_scores_by_season[0].scores.all);
        setLoading(false);
      } catch (err) {
        setIsError(true);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getDatas();
  }, []);

  if (isError) {
    return <Error msg={error.message} />;
  }

  const displaysSpecRole = (playerSpecRole) => {
    switch (playerSpecRole) {
      case 'DPS':
        return 'https://external-preview.redd.it/S38BJlfOcffd02QmOfbhABLi-J9C_FsRDkPcf66F_d4.png?auto=webp&s=8422980d40b8218136652c9ecbc53aa94b38128c';
      case 'TANK':
        return 'https://i.pinimg.com/236x/6a/2e/da/6a2edae61362537b8558c9007d92a3b6.jpg';
      case 'HEALING':
        return 'https://i.pinimg.com/736x/86/bf/ea/86bfea90a098cafd1e185429a73e3a6f.jpg';
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

  if (error) return <Error msg={error.response.data.statusText} />;

  return (
    <Container fluid className="w100" style={{ marginTop: '100px' }}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Row className="d-flex justify-content-center flex-wrap pt-5">
            <Col
              xs="6"
              className="d-flex flex-column align-items-end justify-content-center"
            >
              <img src={thumbnail} alt="" className="border border-primary" />
            </Col>
            <Col
              xs="6"
              className="d-flex flex-column align-items-start justify-content-center border-vert"
            >
              <Row>
                <Col xs="12">
                  <h1>{playerName}</h1>
                </Col>
              </Row>
              <Row>
                <Col xs="12" md="4" className="d-flex align-items-start">
                  <Flag slug={playerRegion} />
                </Col>
                <Col xs="12" md="8" className="d-flex align-items-start">
                  <h3>{playerRealm}</h3>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-5 justify-content-center">
            <Col xs="12" md="8">
              <Table className="table table-striped" opacity="0.5" borderless>
                <thead>
                  <tr className="table-primary">
                    <th className="d-flex align-items-center">
                      <img
                        src={displaysClass(charClass)}
                        alt=""
                        height="64px"
                        width="64px"
                      />
                      <h4 className="ml-2">{specName}</h4>
                    </th>
                    <th>
                      <img
                        src={displaysSpecRole(specRole)}
                        alt=""
                        height="64px"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr onClick={guildLink}>
                    <td className="d-flex align-items-start">
                      <h4>Guild</h4>
                    </td>
                    <td>
                      <h4>{guild}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-start">
                      <h4>Item level</h4>
                    </td>
                    <td>
                      <h4>{itemLevel}</h4>
                    </td>
                    <td />
                  </tr>
                  <tr>
                    <td className="d-flex align-items-start">
                      <h4>Current raid score</h4>
                    </td>
                    <td>
                      <h4>{raidScore}</h4>
                    </td>
                  </tr>
                  <tr>
                    <td className="d-flex align-items-start">
                      <h4>Current mythic score</h4>
                    </td>
                    <td>
                      <h4>{mythicScore}</h4>
                    </td>
                    <td />
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

// PlayerProfile.propTypes = {
//   params: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     realm: PropTypes.string.isRequired,
//     region: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default PlayerProfile;
