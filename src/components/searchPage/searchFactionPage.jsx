// import React, { Component } from 'react';
import './SearchPage.css';
import { Container, Row, Col } from 'reactstrap';
import WildCard from './WildCard';

const SearchFactionPage = () => {
  return (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ marginTop: '10vh' }}
    >
      <Row>
        <Col className="d-flex justify-content-center m-5">
          <h1 className="border-bot-primary title-y">Faction</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <WildCard title="Horde" />
        <WildCard title="Alliance" />
      </Row>
    </Container>
  );
};

export default SearchFactionPage;
