import React from 'react';
import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Content,
  Text,
  H1,
  H3,
  H2,
  Form,
  Input,
  Button,
  Card,
} from 'native-base';
import Spacer from './UI/Spacer';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
  }

  render() {
    const { search } = this.state;
    return (
      <Container>
        <Content padder>
          <Spacer size={10} />
          <View>
            <Image
              style={{ width: '100%', height: 250, margin: '0%' }}
              source={{
                uri:
                  'https://res.cloudinary.com/ephaig/image/upload/v1555447750/container.png',
              }}
            />
            <Text
              style={{
                position: 'absolute',
                top: '33%',
                width: '20%',
                left: '10%',
                height: '32%',
                backgroundColor: 'rgba(1, 173, 186, 0.5)',
              }}
            />
            <H1
              style={{
                position: 'absolute',
                top: '21%',
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
            <Text
              style={{
                position: 'absolute',
                top: '45%',
                left: '15%',
                fontWeight: '700',
                color: 'white',
              }}
            >
              Search from over 250 professional {'\n'} therapists in over 40
              countries {'\n'} around the word
            </Text>
          </View>
          <Spacer size={30} />
          <Spacer size={10} />
          <Form>
            <Input
              autoCapitalize="none"
              value={search}
              keyboardType="email-address"
              onChangeText={v => this.handleChange('search', v)}
              style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
              }}
            />
            <Button
              style={{ backgroundColor: '#01ADBA' }}
              block
              onPress={this.handleSubmit}
            >
              <Text>Search</Text>
            </Button>
          </Form>

          <Spacer size={30} />
          <H1 style={{ textAlign: 'center' }}>Featured Therapist</H1>
          <Text style={{ textAlign: 'center' }}>
            A Quick view of therapist leading the Chart{' '}
          </Text>
          <View
            style={{
              borderBottomColor: '#01ADBA',
              borderBottomWidth: 4,
              width: '20%',
            }}
          />
          <Spacer size={30} />
          <View
            style={{
              width: '100%',
              flex: 2,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              style={{
                width: '80%',
              }}
            >
              <Image
                style={{
                  width: '100%',
                  height: 180,
                  margin: '0%',
                }}
                source={{
                  uri:
                    'https://res.cloudinary.com/ephaig/image/upload/v1555447743/Bitmap.png',
                }}
              />
              <View
                style={{
                  padding: '5%',
                }}
              >
                <H2>Lilly Schmidt</H2>
                <Text>2 reviews</Text>
                <H3>Marriage & Family Therapist</H3>
                <Icon size={20} name="location-on" color="#01ADBA">
                  <H3>Lagos, Nigeria</H3>
                </Icon>
              </View>
            </Card>
          </View>
          <Spacer size={30} />
          <View
            style={{
              width: '100%',
              flex: 2,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              style={{
                width: '80%',
              }}
            >
              <Image
                style={{
                  width: '100%',
                  height: 180,
                  margin: '0%',
                }}
                source={{
                  uri:
                    'https://res.cloudinary.com/ephaig/image/upload/v1555447782/Bitmap_1.png',
                }}
              />
              <View
                style={{
                  padding: '5%',
                }}
              >
                <H2>Nathaniel Edmund</H2>
                <Text>3 reviews</Text>
                <H3>Psychotherapist</H3>
                <Icon size={20} name="location-on" color="#01ADBA">
                  <H3>Atlanta, USA</H3>
                </Icon>
              </View>
            </Card>
          </View>
          <Spacer size={30} />
          <View
            style={{
              width: '100%',
              flex: 2,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              style={{
                width: '80%',
              }}
            >
              <Image
                style={{
                  width: '100%',
                  height: 180,
                  margin: '0%',
                }}
                source={{
                  uri:
                    'https://res.cloudinary.com/ephaig/image/upload/v1555447783/Bitmap_3.png',
                }}
              />
              <View
                style={{
                  padding: '5%',
                }}
              >
                <H2>Daemon Leger</H2>
                <Text>5 reviews</Text>
                <H3>Psychiatrist</H3>
                <Icon size={20} name="location-on" color="#01ADBA">
                  <H3>Lagos, Nigeria</H3>
                </Icon>
              </View>
            </Card>
          </View>
          <Spacer size={30} />
          <View
            style={{
              width: '100%',
              flex: 2,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              style={{
                width: '80%',
              }}
            >
              <Image
                style={{
                  width: '100%',
                  height: 180,
                  margin: '0%',
                }}
                source={{
                  uri:
                    'https://res.cloudinary.com/ephaig/image/upload/v1555447783/Bitmap_2.png',
                }}
              />
              <View
                style={{
                  padding: '5%',
                }}
              >
                <H2>Mark Schmid</H2>
                <Text>7 reviews</Text>
                <H3>Psychologist</H3>
                <Icon size={20} name="location-on" color="#01ADBA">
                  <H3>Austin, USA</H3>
                </Icon>
              </View>
            </Card>
          </View>
          <Spacer size={30} />
          <H1 style={{ textAlign: 'center' }}>Popular Therapist Issues</H1>
          <Text style={{ textAlign: 'center' }}>
            See our top pick of issues solved by most therapists
          </Text>
          <View
            style={{
              borderBottomColor: '#01ADBA',
              borderBottomWidth: 4,
              width: '20%',
            }}
          />
          <Spacer size={30} />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                width: '45%',
                height: 150,
                borderRadius: 5,
                borderWidth: 5,
                borderColor: '#01ADBA',
              }}
            >
              <H2
                style={{
                  textAlign: 'center',
                  paddingTop: '20%',
                  paddingBottom: '5%',
                  color: '#01ADBA',
                }}
              >
                Marriage
              </H2>
              <Text style={{ padding: '4%', textAlign: 'center' }}>
                2279 therapists
              </Text>
            </View>
            <View
              style={{
                width: '45%',
                height: 150,
                borderRadius: 5,
                borderWidth: 5,
                borderColor: '#01ADBA',
              }}
            >
              <H2
                style={{
                  textAlign: 'center',
                  paddingTop: '20%',
                  paddingBottom: '5%',
                  color: '#01ADBA',
                }}
              >
                Psychologists
              </H2>
              <Text style={{ padding: '4%', textAlign: 'center' }}>
                814 therapists
              </Text>
            </View>
          </View>
          <Spacer size={30} />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                width: '45%',
                height: 150,
                borderRadius: 5,
                borderWidth: 5,
                borderColor: '#01ADBA',
              }}
            >
              <H2
                style={{
                  textAlign: 'center',
                  paddingTop: '20%',
                  paddingBottom: '5%',
                  color: '#01ADBA',
                }}
              >
                Psychiatrists
              </H2>
              <Text style={{ padding: '4%', textAlign: 'center' }}>
                397 therapists
              </Text>
            </View>
            <View
              style={{
                width: '45%',
                height: 150,
                borderRadius: 5,
                borderWidth: 5,
                borderColor: '#01ADBA',
              }}
            >
              <H3
                style={{
                  textAlign: 'center',
                  paddingTop: '20%',
                  paddingBottom: '5%',
                  color: '#01ADBA',
                }}
              >
                Psychotherapists
              </H3>
              <Text style={{ padding: '4%', textAlign: 'center' }}>
                346 therapists
              </Text>
            </View>
          </View>
          <Spacer size={30} />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                width: '45%',
                height: 150,
                borderRadius: 5,
                borderWidth: 5,
                borderColor: '#01ADBA',
              }}
            >
              <H2
                style={{
                  textAlign: 'center',
                  paddingTop: '20%',
                  paddingBottom: '5%',
                  color: '#01ADBA',
                }}
              >
                Child Therapists
              </H2>
              <Text style={{ padding: '4%', textAlign: 'center' }}>
                184 therapists
              </Text>
            </View>
            <View
              style={{
                width: '45%',
                height: 150,
                borderRadius: 5,
                borderWidth: 5,
                borderColor: '#01ADBA',
              }}
            >
              <H2
                style={{
                  textAlign: 'center',
                  paddingTop: '20%',
                  paddingBottom: '5%',
                  color: '#01ADBA',
                }}
              >
                Career
              </H2>
              <Text style={{ padding: '4%', textAlign: 'center' }}>
                169 therapists
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default About;
