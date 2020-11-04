import { useEffect, useState } from 'react';
import { Col, Container, Navbar, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Hr from '../cssPages&Components/Hr';
import DalApi from '../../dal/DalApi';
import GuildRanking from './GuildRanking';
import LoadingSpinner from '../LoadingSpinner';
import GuildRoster from './GuildRoster';

const GuildPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [guild, setGuild] = useState(null);
  const [raidRankings, setRaidRankings] = useState(null);
  const [raidProgress, setRaidProgress] = useState(null);
  const [roster, setRoster] = useState(null);

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
      } catch (error) {
        // TODO: handle this error
      } finally {
        setLoading(false);
      }
    };

    getDatas();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="d-flex flex-column align-items-center">
          <div style={{ height: '100px', minWidth: '95vw' }} />
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div style={{ height: '100px', minWidth: '95vw' }} />
          <Container fluid className="w-50">
            <Container className="d-flex flex-column justify-content-center">
              <Row>
                <Col xs={12}>
                  <h1 className="text-center">
                    {guild.alt_name ? guild.alt_name : guild.name}
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>{guild.region.name}</Col>
                <Col xs={4}>{guild.realm.name}</Col>
                <Col xs={4}>{guild.faction}</Col>
              </Row>
            </Container>
            <Hr />
            <GuildRanking
              raidRankings={raidRankings}
              raidProgress={raidProgress}
            />
            <Hr />
            <GuildRoster roster={roster} />
          </Container>
        </>
      )}
    </div>
  );
};

export default GuildPage;
