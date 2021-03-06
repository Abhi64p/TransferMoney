import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

export const Typography = StyleSheet.create({
  h0White: {fontFamily: 'Inter-SemiBold', fontSize: 32, color: 'white'},
  h1White: {fontFamily: 'Inter-SemiBold', fontSize: 18, color: 'white'},
  h2White: {fontFamily: 'Inter-Medium', fontSize: 16, color: 'white'},
  h3White: {fontFamily: 'Inter-Regular', fontSize: 14, color: 'white'},
  h4White: {fontFamily: 'Inter-Lite', fontSize: 14, color: 'white'},
  h4Violet: {fontFamily: 'Inter-Lite', fontSize: 14, color: Colors.violet4},
  h5White: {fontFamily: 'Inter-Lite', fontSize: 12, color: 'white'},
  h6White: {fontFamily: 'Inter-Lite', fontSize: 10, color: 'white'},
  dialerMoney: {fontFamily: 'Inter-SemiBold', fontSize: 40, color: 'white'},
  title: {fontFamily: 'Inter-Regular', fontSize: 18, color: 'white'},
  name: {fontFamily: 'Inter-Medium', fontSize: 24, color: 'white'},
  h3WhiteBold: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  h3VioletBold: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.violet4,
    fontWeight: 'bold',
  },
  buttonPrimary: {
    fontFamily: 'Inter-Lite',
    fontSize: 14,
    color: Colors.primary,
  },
  buttonSecondary: {
    fontFamily: 'Inter-Lite',
    fontSize: 14,
    color: Colors.violet,
  },
  buttonTertiary: {
    fontFamily: 'Inter-Lite',
    fontSize: 14,
    color: Colors.violet1,
  },
});
