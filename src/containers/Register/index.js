import React, { Component } from 'react';
import { } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Title, Button, Icon, View, Text } from 'native-base';
import TitleBar from '@components/TitleBar';
import { globalStyle } from '@config/globalStyles';
import InputStyle from '@components/InputStyle';
import { Navigation } from 'react-native-navigation';
import * as screens from '../screens';

class Register extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);

    this.state = {
      data: {
        email: '',
        password: '',
        confirmPassword: '',

      },
      error: null,
      isloading: null
    };
  }

  setValueToState(property : string, value : string) {
    const data = { ...this.state.data };
    data[property] = value;
    this.setState(data);
  }

  renderLeftTitleBar() {
    return (
      <Button transparent small icon onPress={() => Navigation.pop(this.props.componentId)}>
        <Icon active name="ios-arrow-back" type="Ionicons" style={globalStyle.iconSizeNav} />
      </Button>
    );
  }

  renderCenterTitleBar() {
    return (
      <Title>Register</Title>
    );
  }

  render() {
    const { email, password, confirmPassword } = this.state.data;
    return (
      <Container >
        <TitleBar
          left={this.renderLeftTitleBar()}
          body={this.renderCenterTitleBar()}
          right={<View />}
        />
        <Content contentContainerStyle={{ flex: 1, justifyContent: 'center', alignContent: 'flex-start' }}>
          <View style={globalStyle.contentContainer}>
            <InputStyle
              onChangeText={value => this.setValueToState('email', value)}
              value={email}
              placeholder="Email"
            />
            <InputStyle
              onChangeText={value => this.setValueToState('password', value)}
              value={password}
              placeholder="Password"
              password
            />
            <InputStyle
              onChangeText={value => this.setValueToState('confirmPassword', value)}
              value={confirmPassword}
              placeholder="Confirm Password"
              password
            />
          </View>
          <View>
            <Button block success large>
              <Text>
                Save
              </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = {

}

export default connect(null, mapDispatchToProps)(Register);
