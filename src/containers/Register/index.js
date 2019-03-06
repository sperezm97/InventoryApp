import React, { Component } from 'react';
import { } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Title, Button, Icon, View, Text } from 'native-base';
import TitleBar from '@components/TitleBar';
import { globalStyle } from '@config/globalStyles';
import InputStyle from '@components/InputStyle';

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

  renderLeftTitleBar() {
    return (
      <Button transparent small icon>
        <Icon active name="ios-arrow-back" type="Ionicons" style={globalStyle.iconSize} />
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
      <Container>
        <TitleBar
          left={this.renderLeftTitleBar()}
          body={this.renderCenterTitleBar()}
          right={<View />}
        />
        <Content style={globalStyle.globalContainer}>
          <View style={globalStyle.contentContainer}>
            <InputStyle
              onChangeText={value => this.setState(prevState => ({ data: { ...prevState.data, email: value } }))}
              value={email}
              placeholder="Email"
            />
            <InputStyle
              onChangeText={value => this.setState(prevState => ({ data: { ...prevState.data, password: value } }))}
              value={password}
              placeholder="Password"
              password
            />
            <InputStyle
              onChangeText={value => this.setState(prevState => ({ data: { ...prevState.data, confirmPassword: value } }))}
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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
