import { Col, Table, Container, Row } from 'reactstrap';

import { motion } from 'framer-motion';
import DalApi from '../dal/DalApi';
import Flag from './flags/Flag';
import Hr from './cssPages&Components/Hr';
import { enterBottom } from './animations';

function Debugger() {
  const playerRegion = 'eu';
  const playerRealm = 'Hyjal';
  const playerName = 'Raquette';
  const thumbnail =
    '//render-eu.worldofwarcraft.com/character/hyjal/11/163290891-avatar.jpg?alt=wow/static/images/2d/avatar/29-1.jpg';
  const faction = 'alliance';
  const specName =
    'Subtlety, React, JavaScript, NVidia-lover, Button Designer...';
  const specRole =
    'https://external-preview.redd.it/S38BJlfOcffd02QmOfbhABLi-J9C_FsRDkPcf66F_d4.png?auto=webp&s=8422980d40b8218136652c9ecbc53aa94b38128c';
  const guild = 'Apple (traitor...^^)';
  const itemLevel = '...Out of Range';
  const mythicScore = 'NaN (a number is not enough...)';
  const displaysClass = DalApi.getClassesAndSpecsByName('Rogue').image;

  return (
    <Container
      fluid
      className={`w-100 ${faction === 'alliance' ? 'bgAlliance' : 'bgHorde'}`}
      style={{ marginTop: '100px' }}
    >
      <motion.div
        variants={enterBottom}
        initial="hidden"
        animate="visible"
        exit="exit"
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
              <Col xs="12" md="3" className="d-flex align-items-start my-2">
                <Flag slug={playerRegion} />
              </Col>
              <Col
                xs="12"
                md="9"
                className="d-flex flex-column align-items-start justify-content-center"
              >
                <h3 className="pl-3">{playerRealm}</h3>
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
                      src={displaysClass}
                      alt=""
                      height="48px"
                      width="48px"
                    />
                    <h4 className="ml-2">{specName}</h4>
                  </th>
                  <th>
                    <img src={specRole} alt="" height="48px" width="48px" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="d-flex align-items-center clickable">
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
      </motion.div>
    </Container>
  );
}

export default Debugger;
