import React, {useState} from 'react';
import {
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BackSpaceSVG from '../assets/svg/BackSpaceSVG';
import CloseSVG from '../assets/svg/CloseSVG';
import MoneySVG from '../assets/svg/MoneySVG';
import {Colors, Typography} from '../styles';

const MoneyDialer = ({visible, onClose, type}) => {
  const [typedValue, setTypedValue] = useState('');

  /**
   * Function for processing numbers
   * @param {Number} i Typed number, -1 for backspace.
   * @returns combined string
   */
  const handleClick = i => {
    const includesDot = typedValue.includes('.');
    const isDot = i === '.';
    if (i === -1) {
      const endDot = typedValue.charAt(typedValue.length - 1) === '.';
      setTypedValue(typedValue.slice(0, endDot ? -2 : -1));
      return;
    }
    if (isDot && includesDot) {
      return;
    }
    const dotIndex = typedValue.indexOf('.');
    if (dotIndex !== -1 && typedValue.length - dotIndex >= 3) {
      return;
    }
    if (!isDot && typedValue.length >= (includesDot ? 13 : 10)) {
      return;
    }
    setTypedValue(typedValue + i);
  };

  /**
   * A function which will arrange numbers in rows
   * @returns an element which will render keypad
   */
  const populateNumbers = () => {
    const output = [];
    let row = [];
    for (let i = 1; i <= 9; i++) {
      row.push(
        <TouchableOpacity
          key={`T${i}`}
          style={styles.padding20}
          onPress={() => handleClick(i)}>
          <Text style={Typography.h1White}>{i}</Text>
        </TouchableOpacity>,
      );
      if (i % 3 === 0) {
        output.push(
          <View key={`V${i}`} style={styles.row1}>
            {row}
          </View>,
        );
        row = [];
      }
    }
    return output;
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <StatusBar backgroundColor="rgba(0,0,0,0.6)" animated={true} />
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
            <Text style={Typography.dialerMoney}>
              {typedValue === '' ? '0.00' : formatString(typedValue)}
            </Text>
          </View>
          {populateNumbers()}
          <View style={styles.row1}>
            <TouchableOpacity
              style={styles.padding20}
              onPress={() => handleClick('.')}>
              <Text style={Typography.h1White}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.padding20}
              onPress={() => handleClick(0)}>
              <Text style={Typography.h1White}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleClick(-1)}>
              <BackSpaceSVG marginRight={25} marginLeft={19} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.sendMoney}>
            <Text style={Typography.h4White}>{type} money</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'rgba(0,0,0,0.6)'},
  closeButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  innerContainer: {
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
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  padding20: {padding: 30},
  sendMoney: {
    backgroundColor: Colors.rose,
    width: 173,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 30,
  },
});

/**
 * Function to format string as money
 * @param {string} input The string to format
 * @returns formatted string
 */
function formatString(input) {
  if (input === '.') {
    return '0.00';
  }
  return parseFloat(input).toFixed(2);
}

export default MoneyDialer;
