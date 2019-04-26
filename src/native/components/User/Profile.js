import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, AsyncStorage } from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Body,
  Left,
  Text,
  Icon,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from '../UI/Header';

const token = AsyncStorage.getItem('token');

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      me: '',
    };

    this.parseJwt = this.parseJwt.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  parseJwt = token => {
    if (!token) {
      return;
    }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  };

  getUser = () => {
    const user = this.parseJwt(token);
    const userId = user._id;
    fetch(`https://hng5-whisper.herokuapp.com/api/v1/user/${userId}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ me: responseJson.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const { me } = this.state;
    const { nagvigate } = this.props.naviagtion;
    return (
      <Container>
        <Content>
          <List>
            {me && me.email ? (
              <View>
                <Content padder>
                  <Header
                    title={`Hi ${me.first_name},`}
                    content={`You are currently logged in as ${me.email}`}
                  />
                </Content>

                <ListItem onPress="" icon>
                  <Left>
                    <Icon name="person-add" />
                  </Left>
                  <Body>
                    <Text>Update My Profile</Text>
                  </Body>
                </ListItem>
                <ListItem onPress={this.logout} icon>
                  <Left>
                    <Icon name="power" />
                  </Left>
                  <Body>
                    <Text>Logout</Text>
                  </Body>
                </ListItem>
              </View>
            ) : (
              <View>
                <Content padder>
                  <Header
                    title="Hi there,"
                    content="Please login to gain extra access"
                  />
                </Content>

                <ListItem onPress="" icon>
                  <Left>
                    <Icon name="power" />
                  </Left>
                  <Body>
                    <Text>Login</Text>
                  </Body>
                </ListItem>
                <ListItem onPress={Actions.signup} icon>
                  <Left>
                    <Icon name="add-circle" />
                  </Left>
                  <Body>
                    <Text>Sign Up</Text>
                  </Body>
                </ListItem>
                <ListItem onPress={Actions.forgotPassword} icon>
                  <Left>
                    <Icon name="help-buoy" />
                  </Left>
                  <Body>
                    <Text>Forgot Password</Text>
                  </Body>
                </ListItem>
              </View>
            )}
          </List>
        </Content>
      </Container>
    );
  }
}

Profile.propTypes = {
  member: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  member: {},
};

export default Profile;
