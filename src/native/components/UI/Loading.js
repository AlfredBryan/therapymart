import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const About = () => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
    <ActivityIndicator size="large" color="rgba(1, 173, 186, 0.5)" />
  </View>
);

export default About;
