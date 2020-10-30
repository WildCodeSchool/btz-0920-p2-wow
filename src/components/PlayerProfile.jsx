import { Table } from 'reactstrap';

const PlayerProfile = () => {
  return (
    <div className="d-flex justify-content-center">
      <Table className="w-50">
        <thead className="d-flex justify-content-center col-md-12">
          <img alt="" />
          <div className="mx-5">
            <h1>Leeroy Jenkins</h1>
            <p>Laughing Skull</p>
          </div>
        </thead>
        <tbody>
          <tr>
            <th>Img</th>
            <th>Retribution</th>
            <th>Img</th>
          </tr>
          <tr>
            <th>Guild</th>
            <th>Pals for life</th>
          </tr>
          <tr>
            <th>Item level</th>
            <th>60</th>
          </tr>
          <tr>
            <th>Current raid score</th>
            <th>0/12</th>
          </tr>
          <tr>
            <th>Current mythic score</th>
            <th>1337</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default PlayerProfile;
