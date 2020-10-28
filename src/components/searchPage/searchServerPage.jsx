// import React, { Component } from 'react';
import './SearchPage.css';
import { Container, Row, Col } from 'reactstrap';
import WildCard from './WildCard';

const SearchServerPage = () => {
  return (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ marginTop: '10vh' }}
    >
      <Row>
        <Col className="d-flex justify-content-center m-5">
          <h1 className="border-bot-primary title-y">Server</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <WildCard title="Sargeras" />
        <WildCard title="Archimonde" />
        <WildCard title="Hyjal" />
        <WildCard title="Eldre'thalas" />
        <WildCard title="Area 52" />
        <WildCard title="Arthas" />
      </Row>
    </Container>
  );
};

export default SearchServerPage;
