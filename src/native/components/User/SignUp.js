import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import {
  Container,
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
    loading: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    error: null,
    success: null,
  };

  state = {
    first_name: '',
    last_name: '',
    email: '',
    designation: '',
    password: '',
    image: '',
    age: '',
  };

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => this.setState({ [name]: val });

  handleSubmit = () => {
    const { first_name, last_name, email, designation, password } = this.state;
    axios
      .post('https://hng5-whisper.herokuapp.com/api/v1/auth/signup', {
        first_name,
        last_name,
        email,
        password,
        designation,
      })
      .then(res => {
        res.data;
      });
  };

  render() {
    const { loading, error, success } = this.props;
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
                disabled={loading}
                value={first_name}
                onChangeText={v => this.handleChange('first_name', v)}
              />
            </Item>

            <Item stackedLabel>
              <Label>Last Name</Label>
              <Input
                disabled={loading}
                value={last_name}
                onChangeText={v => this.handleChange('last_name', v)}
              />
            </Item>

            <Item stackedLabel>
              <Label>Email</Label>
              <Input
                disabled={loading}
                autoCapitalize="none"
                value={email}
                keyboardType="email-address"
                onChangeText={v => this.handleChange('email', v)}
              />
            </Item>

            <Item stackedLabel>
              <Label>Password</Label>
              <Input
                disabled={loading}
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
                disabled={loading}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({ designation: itemValue })
                }
              >
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
              disabled={loading}
            >
              <Text>{loading ? 'Loading' : 'Sign Up'}</Text>
            </Button>
          </Form>
        </Content>
      </ScrollView>
    );
  }
}

export default SignUp;
