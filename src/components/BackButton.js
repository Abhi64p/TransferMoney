import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import BackSVG from '../assets/svg/BackSVG';
import {Typography} from '../styles';

const BackButton = ({onPress}) => (
  <TouchableOpacity style={styles.margins} onPress={onPress}>
    <BackSVG />
    <Text style={Typography.h4White}>Back</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  margins: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default BackButton;
