import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Button, Icon, View, Text } from 'native-base';
import InputStyle from '@components/InputStyle';
import { globalStyle } from '@config/globalStyles';
import SvgUri from 'react-native-svg-uri';
import svgIcons from '../../config/imagesUris';
import styles from './styles';
import { colors } from '../../config/colors';
import axios from '../../config/axios';
import { saveUserData } from '@actions/auth';

class Login extends Component {
  static propTypes = {

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

  singInUser() {
    axios.post('/auth/login', this.state.data)
      .then((res) => {
        this.props.saveUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Container style={{ flex: 1 }}>
        <Content style={{ backgroundColor: colors.green7 }}>
          <View style={[globalStyle.contentContainer, { backgroundColor: colors.lightGrey, borderRadius: 20, margin: 10 }]}>
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
                onChangeText={value => this.setState(prevState => ({ data: { ...prevState.data, username: value } }))}
                value={this.state.data.username}
                placeholder="Email"
                Icon={<Icon active name="ios-contact" type="Ionicons" />}
              />
              <InputStyle
                onChangeText={value => this.setState(prevState => ({ data: { ...prevState.data, password: value } }))}
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
                <Button block iconLeft bordered success style={styles.button}>
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

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
  saveUserData
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
