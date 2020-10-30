import propTypes from 'prop-types';
import GuildRankingRow from './GuildRankingRow';

const { Container } = require('reactstrap');

export default function GuildRanking(props) {
  // eslint-disable-next-line react/prop-types
  const { raidRankings } = props;
  return (
    <Container>
      {raidRankings.map((ranking) => (
        <GuildRankingRow raid={ranking} />
      ))}
    </Container>
  );
}

GuildRanking.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // raidProgress: propTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  raidRankings: propTypes.object.isRequired,
};
