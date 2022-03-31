import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {Colors, Typography} from '../styles';
import SplashScreenSVG1 from '../assets/svg/SplashScreenSVG1';
import SplashScreenSVG2 from '../assets/svg/SplashScreenSVG2';
import SplashScreenSVG3 from '../assets/svg/SplashScreenSVG3';
import SplashScreenSVG4 from '../assets/svg/SplashScreenSVG4';
import SplashScreenSVG5 from '../assets/svg/SplashScreenSVG5';

const {width} = Dimensions.get('window');

const SplashScreen = () => (
  <>
    <StatusBar
      animated={true}
      hidden={true}
      translucent={true}
      backgroundColor="rgba(0,0,0,0.3)"
    />
    <View style={styles.container}>
      <View style={styles.svg2}>
        <SplashScreenSVG2 />
      </View>
      <View style={styles.svg1}>
        <SplashScreenSVG1 />
      </View>
      <View style={styles.svg3}>
        <SplashScreenSVG3 />
      </View>
      <View style={styles.svg5}>
        <SplashScreenSVG5 width={width + 10} />
      </View>
      <SplashScreenSVG4 />
      <View style={styles.bottomBox}>
        <View style={styles.row0}>
          <View style={styles.smallBar} />
          <View style={styles.largeBar} />
          <View style={styles.smallBar} />
        </View>
        <Text style={Typography.headingWhite}>Transfer that is safe</Text>
        <Text style={[Typography.normalWhite, styles.marginTop10]}>
          You have nothing to be scared{'\n'}about, we got you covered
        </Text>
        <TouchableOpacity style={styles.bankingButton}>
          <Text style={Typography.buttonText}>Start banking</Text>
        </TouchableOpacity>
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg1: {position: 'absolute', left: 0, top: 0},
  svg2: {position: 'absolute', left: 0, top: 50},
  svg3: {position: 'absolute', right: 0, top: 0},
  svg5: {position: 'absolute', right: 0, top: '50%'},
  bottomBox: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderTopRightRadius: 70,
    backgroundColor: Colors.secondary,
    padding: 20,
    paddingRight: 60,
  },
  bankingButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  marginTop10: {marginTop: 10},
  row0: {flexDirection: 'row', marginBottom: 15},
  smallBar: {
    backgroundColor: Colors.liteYellow,
    width: 16,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  largeBar: {
    backgroundColor: Colors.yellow,
    width: 32,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
});

export default SplashScreen;
