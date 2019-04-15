import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import { Container, Content, Button, Icon, View, Text } from 'native-base';
import InputStyle from '@components/InputStyle';
import { globalStyle } from '@config/global-styles';
import SvgUri from 'react-native-svg-uri';
import { saveUserData } from '@actions/auth';
import svgIcons from '@config/images-uri';
import styles from './styles';
import { colors } from '@config/colors-partial';
import axios from '@config/axios';
import * as screens from '../screens';
import { pmHelpers, deviceHeight, deviceWidth } from '@config/margin-layout';

class Login extends Component {
  static propTypes = {
    saveUserData: PropTypes.func.isRequired,
  }

  static navigatorStyle = {

  }

  constructor(props) {
    super(props);
    this.state = {
      data: {
        username: '',
        password: ''
      },
      error: '',
      isLoading: null
    };
  }

  setValueToState(property : string, value : string) {
    const data = { ...this.state.data };
    data[property] = value;
    this.setState({ data });
  }

  singInUser() {
    axios.post('/auth/login', this.state.data)
      .then((res) => {
        this.props.saveUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  goRegisterScreen() {
    Navigation.push(this.props.componentId, {
      component: {
        name: screens.SCREEN_REGISTER,
      }
    });
  }

  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: colors.green7 }} contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
          <View style={[globalStyle.contentContainer, { backgroundColor: colors.lightGrey, borderRadius: 30, margin: pmHelpers.small, paddingVertical: 30 }]}>
            <View style={styles.svgContainer}>
              <SvgUri
                height={200}
                width={200}
                source={svgIcons.inventoryLogo.uri}
                fill={colors.green6}
              />
            </View>
            <View>
              <InputStyle
                onChangeText={value => this.setValueToState('username', value)}
                value={this.state.data.username}
                placeholder="Email"
                Icon={<Icon active name="ios-contact" type="Ionicons" />}
              />
              <InputStyle
                onChangeText={value => this.setValueToState('password', value)}
                value={this.state.data.password}
                placeholder="Password"
                Icon={<Icon active name="ios-key" type="Ionicons" />}
                password
              />
              <View>
                <Button block iconLeft success style={styles.button} onPress={() => this.singInUser()}>
                  <Icon active name="login-variant" type="MaterialCommunityIcons" />
                  <Text>Sign in</Text>
                </Button>
                <Button block iconLeft bordered success style={styles.button} onPress={() => this.goRegisterScreen()}>
                  <Icon active name="user-follow" type="SimpleLineIcons" />
                  <Text>Register</Text>
                </Button>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
const mapDispatchToProps = {
  saveUserData
};

export default connect(null, mapDispatchToProps)(Login);
