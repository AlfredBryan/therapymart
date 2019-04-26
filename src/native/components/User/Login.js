import React from 'react';
import PropTypes from 'prop-types';
import { AsyncStorage } from 'react-native';
import {
  Container,
  Content,
  Form,
  Item,
  Label,
  Input,
  Text,
  Button,
  View,
} from 'native-base';
import Messages from '../UI/Messages';
import Header from '../UI/Header';
import Spacer from '../UI/Spacer';

class Login extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    success: PropTypes.string,
  };

  static defaultProps = {
    error: null,
    success: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => this.setState({ [name]: val });

  handleSubmit = () => {
    const { email, password } = this.state;
    fetch('https://hng5-whisper.herokuapp.com/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        AsyncStorage.setItem('token', responseJson.data.token);
        if (responseJson.status === 200) {
          this.props.navigation.navigate('profile');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const { error, success } = this.props;
    const { email, password } = this.state;

    return (
      <Container>
        <Content>
          <View padder>
            <Header
              title="Welcome back"
              content="Please use your email and password to login."
            />
            {error && <Messages message={error} />}
            {success && <Messages type="success" message={success} />}
          </View>

          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                autoCapitalize="none"
                value={email}
                keyboardType="email-address"
                onChangeText={v => this.handleChange('email', v)}
              />
            </Item>
            <Item stackedLabel>
              <Label>Password</Label>
              <Input
                value={password}
                secureTextEntry
                keyboardType="password"
                onChangeText={v => this.handleChange('password', v)}
              />
            </Item>

            <Spacer size={20} />
            <View padder>
              <Button
                style={{ backgroundColor: '#01ADBA' }}
                block
                onPress={this.handleSubmit}
              >
                <Text>Login</Text>
              </Button>
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
