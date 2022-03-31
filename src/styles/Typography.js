import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

export const Typography = StyleSheet.create({
  headingWhite: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: 'white',
  },
  normalWhite: {
    fontFamily: 'Inter-Lite',
    fontSize: 14,
    color: 'white',
  },
  buttonText: {
    fontFamily: 'Inter-Lite',
    fontSize: 14,
    color: Colors.primary,
  },
});
