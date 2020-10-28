import React from 'react';
import { Table } from 'reactstrap';

class PlayerProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img:
        'https://render-us.worldofwarcraft.com/character/illidan/3/203191555-avatar.jpg?alt=wow/static/images/2d/avatar/10-1.jpg',
    };
  }

  render() {
    const { img } = this.state;
    return (
      <div className="d-flex justify-content-center">
        <Table className="w-50">
          <thead className="d-flex justify-content-center col-md-12">
            <img src={img} alt="" />
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
  }
}

export default PlayerProfile;
