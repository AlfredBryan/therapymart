import React from 'react';
import { Image, View } from 'react-native';
import {
  Container,
  Content,
  Text,
  H1,
  H3,
  Form,
  Input,
  Button,
  Card,
} from 'native-base';
import PropTypes from 'prop-types';
import Spacer from './UI/Spacer';

class About extends React.Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    const { loading } = this.props;
    const { search } = this.state;
    return (
      <Container>
        <Content padder>
          <Spacer size={30} />
          <Image
            style={{ width: '100%', height: 200, margin: '0%' }}
            source={{
              uri:
                'https://res.cloudinary.com/ephaig/image/upload/v1555447750/container.png',
            }}
          />
          <Text
            style={{
              position: 'absolute',
              top: '32%',
              width: '20%',
              left: '10%',
              height: '25%',
              backgroundColor: 'rgba(1, 173, 186, 0.5)',
            }}
          />
          <H1
            style={{
              position: 'absolute',
              top: '25%',
              left: '15%',
              fontWeight: '700',
              color: 'white',
            }}
          >
            {' '}
            Find the Right
            {'\n'}
            Therapist for You
          </H1>
          <Spacer size={10} />
          <Text
            style={{
              position: 'absolute',
              top: '40%',
              left: '15%',
              fontWeight: '700',
              color: 'white',
            }}
          >
            Search from over 250 professional {'\n'} therapists in over 40
            countries {'\n'} around the word
          </Text>

          <Spacer size={30} />
          <Spacer size={10} />
          <Form>
            <Input
              autoCapitalize="none"
              value={search}
              keyboardType="email-address"
              disabled={loading}
              onChangeText={v => this.handleChange('search', v)}
              style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderColor: '1px solid #BDBDBD',
              }}
            />
            <Button
              style={{ backgroundColor: '#01ADBA' }}
              block
              onPress={this.handleSubmit}
              disabled={loading}
            >
              <Text>{loading ? 'Loading' : 'Search'}</Text>
            </Button>
          </Form>

          <Spacer size={30} />
        </Content>
      </Container>
    );
  }
}

export default About;
