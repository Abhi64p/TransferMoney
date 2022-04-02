import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BackSVG from '../assets/svg/BackSVG';
import {Typography} from '../styles';

const BackButton = ({containerStyle}) => {
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity style={[styles.margins, containerStyle]} onPress={goBack}>
      <BackSVG />
      <Text style={Typography.h4White}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  margins: {marginTop: 10, flexDirection: 'row', alignItems: 'center'},
});

export default BackButton;
