import propTypes from 'prop-types';
import { Col, Container, Row, Table } from 'reactstrap';
import GuildRankingRow from './GuildRankingRow';

// const { Container } = require('reactstrap');

export default function GuildRanking(props) {
  // eslint-disable-next-line react/prop-types
  const { raidRankings, raidProgress } = props;
  return (
    <Table className="d-flex flex-column">
      {raidRankings.map((ranking, index) => (
        <GuildRankingRow
          raid={ranking}
          raidProgress={raidProgress[index]}
          key={ranking.raid}
        />
      ))}
      <Container>
        <Row>
          <Col>sdfsf</Col>
        </Row>
      </Container>
    </Table>
  );
}

GuildRanking.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // raidProgress: propTypes.array.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  raidRankings: propTypes.array.isRequired,
};
