import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hr from '../cssPages&Components/Hr';
import DalApi from '../../dal/DalApi';
import GuildRanking from './GuildRanking';
import LoadingSpinner from '../LoadingSpinner';
import GuildRoster from './GuildRoster';
import Error from '../Error';
import Flag from '../flags/Flag';
// import FactionIcons from '../flags/FactionIcons';
import { enterBottom } from '../animations';
import Faction from '../flags/Faction';

const GuildPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [guild, setGuild] = useState(null);
  const [raidRankings, setRaidRankings] = useState(null);
  const [raidProgress, setRaidProgress] = useState(null);
  const [roster, setRoster] = useState(null);
  const [flagTag, setFlagTag] = useState(null);
  const [faction, setFaction] = useState(null);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});

  useEffect(() => {
    const getDatas = async () => {
      try {
        const guildRes = await DalApi.getGuild(
          params.region,
          params.realm,
          params.name
        );

        const rosterRes = await DalApi.getGuildRoster(
          params.region,
          params.realm,
          params.name
        );

        const { guildDetails } = guildRes.data;
        setGuild(guildDetails.guild);
        setRaidRankings(guildDetails.raidRankings);
        setRaidProgress(guildDetails.raidProgress);
        setRoster(rosterRes.data.guildRoster.roster);
        setFlagTag(guildDetails.guild.region.slug);
        setFaction(guildDetails.guild.faction);
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

  return (
    <>
      {loading ? (
        <div className="d-flex flex-column align-items-center">
          <div style={{ height: '100px', minWidth: '95vw' }} />
          <LoadingSpinner />
        </div>
      ) : (
        <motion.div
          className="container mob-100 d-flex flex-column flex-1 leaderboard-container"
          style={{ style: '75%' }}
          variants={enterBottom}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div
            style={{ height: '100px', maxWidth: '100%', overflow: 'hidden' }}
          />

          <Container className="guildPage d-flex flex-column justify-content-center ">
            <Row>
              <Col xs={12}>
                <h1 className="my-5">
                  {guild.alt_name ? guild.alt_name : guild.name}
                </h1>
              </Col>
            </Row>
            <Row className="align-items-center d-flex  flex-sm-row justify-content-center">
              <Col xs={4}>
                <Flag
                  slug={flagTag}
                  alt={guild.region.name}
                  height="60px"
                  width="100px"
                />
              </Col>
              <Col
                xs={4}
                className="font-weight-bold pt-3 h3 sm-p d-flex justify-content-center"
              >
                {guild.realm.name}
              </Col>
              <Col xs={4}>
                <Faction faction={faction} />
              </Col>
            </Row>
          </Container>
          <Hr />
          <GuildRanking
            raidRankings={raidRankings}
            raidProgress={raidProgress}
          />
          <Hr />
          <GuildRoster
            roster={roster}
            region={params.region}
            realm={params.realm}
          />
        </motion.div>
      )}
    </>
  );
};

export default GuildPage;
