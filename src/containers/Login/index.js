import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';
import _ from 'lodash';

class Login extends Component {
  static propTypes = {

  }

  static navigatorStyle = {

  }

  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: ''
      },
      error: '',
      isLoading: null
    }
  }


  setUserInfo(property: string, value: string) {
    const data = _.cloneDeep(this.state.data);
    data[property] = value;
    this.setState({ data });
  }

  render() {
    return (
      <Container>
        <Content padder>
          <View>
            {/* <Image source={{ uri: '' }} /> */}
          </View>
          <View>
            <Item rounded>
              <Icon name="ios-contact" type="Ionicons" />
              <Input placeholder="mail@mail.com" />
            </Item>
            <Item rounded last>
              <Icon name="ios-key" type="Ionicons" />
              <Input placeholder="*******" />
            </Item>
            <View>
              <Button iconLeft success>
                <Icon name="login-variant" type="MaterialCommunityIcons" />
                <Text>Sign in</Text>
              </Button>
              <Button iconLeft bordered success>
                <Icon name="user-follow" type="SimpleLineIcons" />
                <Text>Register</Text>
              </Button>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
