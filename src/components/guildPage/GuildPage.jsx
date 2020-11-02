import { useEffect, useState } from 'react';
import { Col, Container, Navbar, Row } from 'reactstrap';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Hr from '../Hr';
import DalApi from '../../dal/DalApi';
import GuildRanking from './GuildRanking';
import LoadingSpinner from '../LoadingSpinner';

const GuildPage = () => {
  const params = useParams();
  // const [name, setName] = useState('');
  // const [region, setRegion] = useState('');
  // const [realm, setRealm] = useState('');
  // const [faction, setFaction] = useState('');
  const [loading, setLoading] = useState(true);
  const [guild, setGuild] = useState(null);
  const [raidRankings, setRaidRankings] = useState(null);
  const [raidProgress, setRaidProgress] = useState(null);

  useEffect(() => {
    DalApi.getGuild(
      (data) => {
        const { guildDetails } = data;
        setGuild(guildDetails.guild);
        setRaidRankings(guildDetails.raidRankings);
        setRaidProgress(guildDetails.raidProgress);
        setLoading(false);

        // console.log(guildDetails);
      },
      params.region,
      params.realm,
      params.name
    );
  }, []);

  // refreshState(data) {
  //   set({ guild: data.guildDetails });
  // }

  return (
    <div>
      <Navbar />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div>{guild.name}</div>
          <Container>
            <Row>
              <Col sm={4}>{guild.region.name}</Col>
              <Col sm={4}>{guild.realm.name}</Col>
              <Col sm={4}>{guild.faction}</Col>
            </Row>
          </Container>
          <Hr />
          <Container>
            <GuildRanking
              raidRankings={raidRankings}
              raidProgress={raidProgress}
            />
          </Container>
        </div>
      )}
    </div>
  );
};

// GuildPage.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   match: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   realm: PropTypes.string.isRequired,
//   region: PropTypes.string.isRequired,
// };

export default GuildPage;
