import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import User5 from '../assets/images/User5.jpg';
import BGVectorSVG from '../assets/svg/BGVectorSVG';
import CircleSVG from '../assets/svg/CircleSVG';
import MoneySVG from '../assets/svg/MoneySVG';
import {Colors, Typography} from '../styles';

const RequestScreen = () => (
  <View style={styles.container}>
    <View style={styles.bgSVG}>
      <BGVectorSVG width="100%" />
    </View>
    <Text style={[Typography.title, styles.center]}>New Request</Text>
    <View style={styles.circle}>
      <CircleSVG />
      <Image style={styles.photo} source={User5} resizeMode="cover" />
    </View>
    <Text style={[Typography.name, styles.name]}>Adeleke Ramon</Text>
    <Text style={[Typography.h4White, styles.center]}>is requesting for:</Text>
    <View style={styles.row0}>
      <MoneySVG color="white" marginRight={8} />
      <Text style={Typography.dialerMoney}>200,000</Text>
    </View>
    <TouchableOpacity style={styles.sendMoney}>
      <Text style={Typography.h4White}>Send money</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.dontSendMoney}>
      <Text style={Typography.h4Violet}>Don't send</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.background, paddingTop: 53},
  bgSVG: {position: 'absolute', width: '100%'},
  center: {alignSelf: 'center'},
  sendMoney: {
    backgroundColor: Colors.rose,
    width: 173,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  dontSendMoney: {
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.violet1,
    width: 173,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 40,
  },
  row0: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 20,
  },
  name: {alignSelf: 'center', marginVertical: 20},
  circle: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  photo: {position: 'absolute', width: 100, height: 100, borderRadius: 50},
});

export default RequestScreen;
