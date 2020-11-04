import { useEffect, useState } from 'react';
import { Col, Container, Navbar, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Hr from '../cssPages&Components/Hr';
import DalApi from '../../dal/DalApi';
import GuildRanking from './GuildRanking';
import LoadingSpinner from '../LoadingSpinner';
import GuildRoster from './GuildRoster';
import Flag from '../flags/Flag';
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
        // console.log(guild);
        setRaidRankings(guildDetails.raidRankings);
        setRaidProgress(guildDetails.raidProgress);
        setRoster(rosterRes.data.guildRoster.roster);
        setFlagTag(DalApi.getRegionByName(guildDetails.guild.region.name).slug);
        // setFaction(guildDetails.guild.faction);
        setFaction(null);
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
        <LoadingSpinner />
      ) : (
        <>
          <Container fluid className="w-50">
            <Container className="d-flex flex-column justify-content-center">
              <Row>
                <Col xs={12}>
                  <h1 className="text-center">{guild.name}</h1>
                </Col>
              </Row>
              <Row>
                <Col xs={4}>
                  <Flag slug={flagTag} alt={guild.region.name} />
                </Col>
                <Col xs={4}>{guild.realm.name}</Col>
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
            <GuildRoster roster={roster} />
          </Container>
        </>
      )}
    </div>
  );
};

export default GuildPage;
