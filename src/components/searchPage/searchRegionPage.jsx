// import React, { Component } from 'react';
import './SearchPage.css';
import { Container, Row, Col } from 'reactstrap';
import WildCard from './WildCard';

const SearchRegionPage = () => {
  return (
    <Container
      className="d-flex flex-column justify-content-center"
      style={{ marginTop: '10vh' }}
    >
      <Row>
        <Col className="d-flex justify-content-center m-5">
          <h1 className="border-bot-primary title-y">Region</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <WildCard />
      </Row>
    </Container>
  );
};

export default SearchRegionPage;
