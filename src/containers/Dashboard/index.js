import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Card, CardItem, Text, View, Body, Title, Button, Icon } from 'native-base';
import TitleBar from '@components/TitleBar';

class Dashboard extends Component {
  static propTypes = {

  }

  titleMenuLeft() {
    return (
      <Button icon transparent>
        <Icon name="ios-menu" type="Ionicons" />
      </Button>
    );
  }

  titleMenuBody() {
    return (
      <Title>
        Dashboard
      </Title>
    );
  }

  titleMenuRight() {
    return (
      <View />
    );
  }


  render() {
    return (
      <Container>
        <TitleBar left={this.titleMenuLeft()} body={this.titleMenuBody()} right={this.titleMenuRight()} />
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>hi</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
