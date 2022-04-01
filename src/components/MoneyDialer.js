import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';

import {Colors, Typography} from '../styles';
import CloseSVG from '../assets/svg/CloseSVG';
import MoneySVG from '../assets/svg/MoneySVG';

const MoneyDialer = ({visible, onClose}) => (
  <Modal visible={visible} animationType="slide" transparent={true}>
    <View style={styles.container}>
      <View style={styles.closeButtonContainer}>
        <TouchableOpacity onPress={onClose}>
          <CloseSVG />
        </TouchableOpacity>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.row0}>
          <MoneySVG
            color="white"
            height={25}
            width={25}
            marginRight={5}
            marginTop={8}
          />
          <Text style={Typography.dialerMoney}>0.00</Text>
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgba(0,0,0,0.6)'},
  closeButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  innerContainer: {
    height: '80%',
    backgroundColor: Colors.background1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  row0: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
});

export default MoneyDialer;
