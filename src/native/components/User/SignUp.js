import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, AsyncStorage } from 'react-native';
import {
  Content,
  Text,
  Form,
  Item,
  Label,
  Input,
  Button,
  Picker,
} from 'native-base';
import Messages from '../UI/Messages';
import Header from '../UI/Header';
import Spacer from '../UI/Spacer';

class SignUp extends React.Component {
  static propTypes = {
    success: PropTypes.string,
    error: PropTypes.string,
  };

  static defaultProps = {
    error: null,
    success: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      designation: '',
      password: '',
      image: '',
      age: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => this.setState({ [name]: val });

  handleSubmit = () => {
    const { first_name, last_name, email, designation, password } = this.state;
    fetch('https://hng5-whisper.herokuapp.com/api/v1/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        designation,
        password,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        AsyncStorage.setItem('token', responseJson.data.token);
        console.log(responseJson.data.token);
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const { error, success } = this.props;
    const { first_name, last_name, email, designation, password } = this.state;

    return (
      <ScrollView>
        <Content padder>
          <Header
            title="Welcome"
            content="We're glad to welcome you to the community. There's only a few questions and you'll be on your way."
          />

          {error && <Messages message={error} />}
          {success && <Messages type="success" message={success} />}

          <Form>
            <Item stackedLabel>
              <Label>First Name</Label>
              <Input
                value={first_name}
                onChangeText={v => this.handleChange('first_name', v)}
              />
            </Item>

            <Item stackedLabel>
              <Label>Last Name</Label>
              <Input
                value={last_name}
                onChangeText={v => this.handleChange('last_name', v)}
              />
            </Item>

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
                onChangeText={v => this.handleChange('password', v)}
              />
            </Item>

            <Item stackedLabel>
              <Label>Choose Designation</Label>
              <Picker
                selectedValue={designation}
                style={{ height: 50, width: 100 }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ designation: itemValue })
                }
              >
                <Picker.Item disabled label="Select" value="none" />
                <Picker.Item label="Normal" value="normal" />
                <Picker.Item label="Admin" value="admin" />
                <Picker.Item label="Therapist" value="therapist" />
              </Picker>
            </Item>

            <Spacer size={20} />

            <Button
              style={{ backgroundColor: '#01ADBA' }}
              block
              onPress={this.handleSubmit}
            >
              <Text>Sign Up</Text>
            </Button>
          </Form>
        </Content>
      </ScrollView>
    );
  }
}

export default SignUp;
