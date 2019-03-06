import React from 'react';
import PropTypes from 'prop-types';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import styles from './styles';
import { globalStyle } from '../../config/globalStyles';

const TitleBar = ({ left, body, right }) => (
  <Header style={styles.headerBackground}>
    <Left style={styles.leftContainer}>{left}</Left>
    <Body style={styles.containerCentered}>{body}</Body>
    <Right style={styles.rightContainer}>{right}</Right>
  </Header>
);

TitleBar.propTypes = {
  left: PropTypes.element.isRequired,
  body: PropTypes.element.isRequired,
  right: PropTypes.element.isRequired
};

TitleBar.deafultProps = {
  left: <Button transparent small><Icon name="menu" style={globalStyle.iconSize} /></Button>,
  body: <Title>Title Name</Title>,
  right: <Text>prueba</Text>
};

export default TitleBar;
