import { useEffect, useState } from 'react';
import { Col, Table, Container, Row } from 'reactstrap';
import { useHistory, useParams } from 'react-router-dom';

import { motion } from 'framer-motion';
import DalApi from '../dal/DalApi';
import LoadingSpinner from './LoadingSpinner';
import Flag from './flags/Flag';
import Error from './Error';
import Hr from './cssPages&Components/Hr';
import { enterBottom } from './animations';

const PlayerProfile = () => {
  const { name, realm, region } = useParams();
  const [playerRegion, setPlayerRegion] = useState('');
  const [playerRealm, setPlayerRealm] = useState('');
  const [playerName, setPlayerName] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [faction, setFaction] = useState('');
  const [specName, setSpecName] = useState('');
  const [specRole, setSpecRole] = useState('');
  const [guild, setGuild] = useState('');
  const [itemLevel, setItemLevel] = useState(0);
  const [raidScore, setRaidScore] = useState('');
  const [mythicScore, setMythicScore] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [displayClass, setDisplaysClass] = useState(null);

  const history = useHistory();

  // link to player page
  const guildLink = () => {
    history.push(`/Guild/${playerRegion}/${realm}/${guild}/`);
  };

  // if useEffect success promise
  const succesPromise = (player) => {
    try {
      setPlayerRegion(player.data.region);
      setPlayerRealm(player.data.realm);
      setFaction(player.data.faction);
      setPlayerName(player.data.nameold);
      setThumbnail(player.data.thumbnail_url);
      setSpecName(player.data.active_spec_name);
      setSpecRole(player.data.active_spec_role);
      setGuild(player.data.guild.name);
      setItemLevel(player.data.gear.item_level_equipped);
      setRaidScore(
        player.data.raid_progression['nyalotha-the-waking-city'].summary
      );
      setMythicScore(player.data.mythic_plus_scores_by_season[0].scores.all);
      setDisplaysClass(
        DalApi.getClassesAndSpecsByName(player.data.class).image
      );
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // if useEffect failed promise
  const failPromise = (promiseError) => {
    // cause error => http://localhost:3000/Player/eu/Sargeras/Joker/
    setError(promiseError);
    setLoading(false);
  };

  useEffect(() => {
    const getDatas = async () => {
      const promise = DalApi.getPlayer(region, realm, name);
      promise.then(succesPromise, failPromise);
    };

    getDatas();
  }, []);

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

  if (error !== '') {
    return <Error msg={error.message} />;
  }

  return (
    <>
      {loading ? (
        <div className="cssStyle d-flex flex-column flex-1 align-items-center">
          <div style={{ height: '100px', minWidth: '95vw' }} />
          <LoadingSpinner />
        </div>
      ) : (
        <motion.div
          variants={enterBottom}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="cssStyle d-flex flex-column flex-1 align-items-center text-center"
          style={{ maxWidth: '100vw' }}
        >
          <Container
            fluid
            className={`w-100 ${
              faction === 'alliance'
                ? 'bgAlliance d-flex flex-column flex-1 justify-content-center'
                : 'bgHorde d-flex flex-column flex-1 justify-content-center'
            }`}
            style={{ marginTop: '100px' }}
          >
            <Row className="d-flex justify-content-center flex-wrap pt-3">
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
                  <Col xs="12" md="3" className="d-flex align-items-start">
                    <Flag slug={playerRegion} />
                  </Col>
                  <Col
                    xs="12"
                    md="9"
                    className="d-flex align-items-start text-left"
                  >
                    <h3>{playerRealm}</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Hr />
            <Row className="mt-5 justify-content-center">
              <Col xs="12" md="8">
                <Table className="table table-striped" opacity="0.5" borderless>
                  <thead>
                    <tr className="d-flex align-items-center test">
                      <th className="flex-1 d-flex justify-content-start align-items-center">
                        <img
                          src={displayClass}
                          alt=""
                          height="48px"
                          width="48px"
                        />
                        <h4 className="ml-2">{specName}</h4>
                      </th>
                      <th>
                        <img
                          src={displaysSpecRole(specRole)}
                          alt=""
                          height="48px"
                          width="48px"
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      className="d-flex align-items-center clickable"
                      onClick={guildLink}
                    >
                      <td className="flex-1 d-flex justify-content-start">
                        <h4>Guild</h4>
                      </td>
                      <td>
                        <h4>{guild}</h4>
                      </td>
                    </tr>
                    <tr className="d-flex align-items-center">
                      <td className="flex-1 d-flex justify-content-start">
                        <h4>Item level</h4>
                      </td>
                      <td>
                        <h4>{itemLevel}</h4>
                      </td>
                      <td />
                    </tr>
                    <tr className="d-flex align-items-center">
                      <td className="flex-1 d-flex justify-content-start">
                        <h4>Current raid score</h4>
                      </td>
                      <td>
                        <h4>{raidScore}</h4>
                      </td>
                    </tr>
                    <tr className="d-flex align-items-center">
                      <td className="flex-1 d-flex justify-content-start">
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
          </Container>
        </motion.div>
      )}
    </>
  );
};

export default PlayerProfile;
