import propTypes from 'prop-types';

const { Row, Col } = require('reactstrap');

export default function GuildRankingRow(props) {
  const {
    raid,
    raidProgress: {
      encountersDefeated: { mythic },
    },
  } = props;

  return (
    <Row>
      <Col sm="3">{raid.raid}</Col>
      <Col sm="1">{mythic.length}</Col>
      <Col offser-sm="5" />
      <Col sm="3">{raid.factionRanks.mythic.world}</Col>
    </Row>
  );
}

GuildRankingRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  raidProgress: propTypes.object.isRequired,
  raid: propTypes.string.isRequired,
  length: propTypes.number.isRequired,
  world: propTypes.string.isRequired,
};
