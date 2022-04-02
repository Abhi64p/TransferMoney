import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeInLeft,
  FadeInRight,
  FadeOut,
  FadeOutLeft,
  FadeOutRight,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';

import {Colors, Typography} from '../styles';
import SplashScreenSVG1 from '../assets/svg/SplashScreenSVG1';
import SplashScreenSVG2 from '../assets/svg/SplashScreenSVG2';
import SplashScreenSVG3 from '../assets/svg/SplashScreenSVG3';
import SplashScreenSVG4 from '../assets/svg/SplashScreenSVG4';
import SplashScreenSVG5 from '../assets/svg/SplashScreenSVG5';
import SplashScreenSVG6 from '../assets/svg/SplashScreenSVG6';
import SplashScreenSVG7 from '../assets/svg/SplashScreenSVG7';
import SplashScreenSVG8 from '../assets/svg/SplashScreenSVG8';
import SplashScreenSVG9 from '../assets/svg/SplashScreenSVG9';

const {width} = Dimensions.get('window');
const timingConfig = {duration: 200, easing: Easing.cubic};
const SPLASH_ONE = 'SPLASH_ONE';
const SPLASH_TWO = 'SPLASH_TWO';

const SplashScreen = ({navigation: {navigate}}) => {
  const [currentSplash, setCurrentSplash] = useState(SPLASH_ONE);
  const transition = useSharedValue(currentSplash === SPLASH_ONE ? 0 : 1);

  const boxAnimStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      transition.value,
      [0, 1],
      [Colors.secondary, 'white'],
    ),
  }));

  const buttonAnimStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      transition.value,
      [0, 1],
      ['white', Colors.background4],
    ),
  }));

  useEffect(() => {
    transition.value = withTiming(
      currentSplash === SPLASH_ONE ? 0 : 1,
      timingConfig,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSplash]);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (currentSplash === SPLASH_TWO) {
          setCurrentSplash(SPLASH_ONE);
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [currentSplash]),
  );

  const handleNext = () => setCurrentSplash(SPLASH_TWO);
  const handleStartBanking = () => navigate('HomeScreen');

  const boxTextColor =
    currentSplash === SPLASH_ONE ? 'white' : Colors.background4;
  const buttonTextColor =
    currentSplash === SPLASH_ONE ? Colors.background4 : 'white';

  return (
    <>
      <StatusBar translucent={true} backgroundColor={'rgba(0,0,0,0)'} />
      <View style={styles.container}>
        {currentSplash === SPLASH_ONE && (
          <Animated.View
            style={styles.svg2}
            entering={FadeIn}
            exiting={FadeOut}>
            <SplashScreenSVG2 width={width + 10} />
          </Animated.View>
        )}
        {currentSplash === SPLASH_ONE && (
          <Animated.View
            style={styles.svg1}
            entering={FadeInLeft}
            exiting={FadeOutLeft}>
            <SplashScreenSVG1 />
          </Animated.View>
        )}
        {currentSplash === SPLASH_ONE && (
          <Animated.View
            style={styles.svg3}
            entering={FadeInRight}
            exiting={FadeOutRight}>
            <SplashScreenSVG3 />
          </Animated.View>
        )}
        {currentSplash === SPLASH_ONE && (
          <Animated.View
            style={styles.svg5}
            entering={FadeIn}
            exiting={FadeOut}>
            <SplashScreenSVG5 width={width + 10} />
          </Animated.View>
        )}
        {currentSplash === SPLASH_ONE && (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <SplashScreenSVG4 />
          </Animated.View>
        )}
        {currentSplash === SPLASH_TWO && (
          <Animated.View
            style={styles.svg3}
            entering={FadeInRight}
            exiting={FadeOutRight}>
            <SplashScreenSVG9 />
          </Animated.View>
        )}
        {currentSplash === SPLASH_TWO && (
          <Animated.View
            style={styles.svg1}
            entering={FadeInLeft}
            exiting={FadeOutLeft}>
            <SplashScreenSVG7 />
          </Animated.View>
        )}
        <View style={styles.bottomBoxContainer}>
          <View>
            {currentSplash === SPLASH_TWO && (
              <Animated.View entering={FadeInLeft} exiting={FadeOutLeft}>
                <SplashScreenSVG8 top={10} />
              </Animated.View>
            )}
            <Animated.View style={[styles.bottomBox, boxAnimStyle]}>
              <View style={styles.row0}>
                <Bar selected={currentSplash === SPLASH_ONE} />
                <Bar selected={currentSplash === SPLASH_TWO} />
                <Bar selected={false} />
              </View>
              <Animated.Text
                key={`title${currentSplash}`}
                style={[Typography.h1White, {color: boxTextColor}]}
                entering={FadeInRight}
                exiting={FadeOutLeft}>
                {currentSplash === SPLASH_ONE
                  ? 'Transfer That Is Safe'
                  : 'Transfer Money With Ease'}
              </Animated.Text>
              <Animated.Text
                key={`message${currentSplash}`}
                style={[
                  Typography.h4White,
                  styles.marginTop10,
                  {color: boxTextColor},
                ]}
                entering={FadeInRight}
                exiting={FadeOutLeft}>
                {currentSplash === SPLASH_ONE
                  ? 'You have nothing to be scared\nabout, we got you covered'
                  : 'Making money is hard enough, we\nmake transferring it easy enough.'}
              </Animated.Text>
              <TouchableOpacity
                onPress={
                  currentSplash === SPLASH_ONE ? handleNext : handleStartBanking
                }>
                <Animated.View style={[styles.bankingButton, buttonAnimStyle]}>
                  <Text
                    style={[
                      Typography.buttonPrimary,
                      {color: buttonTextColor},
                    ]}>
                    {currentSplash === SPLASH_ONE ? 'Next' : 'Start banking'}
                  </Text>
                </Animated.View>
              </TouchableOpacity>
            </Animated.View>
          </View>
          <View style={styles.svg6}>
            <SplashScreenSVG6 />
          </View>
        </View>
      </View>
    </>
  );
};

const Bar = ({selected}) => {
  const barWidth = useSharedValue(selected ? 48 : 16);

  const animatedStyle = useAnimatedStyle(() => ({
    width: barWidth.value,
    backgroundColor: interpolateColor(
      barWidth.value,
      [16, 48],
      [Colors.liteYellow, Colors.yellow],
    ),
  }));

  useEffect(() => {
    barWidth.value = withSpring(selected ? 48 : 16);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return <Animated.View style={[styles.bar, animatedStyle]} />;
};

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
  svg6: {justifyContent: 'flex-end', left: -5},
  svg8: {alignSelf: 'flex-start', zIndex: 30, top: -80},
  bottomBox: {borderTopRightRadius: 70, padding: 20, width: 300},
  bottomBoxContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    flexDirection: 'row',
  },
  bankingButton: {
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'flex-start',
    width: 120,
    alignItems: 'center',
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
  bar: {
    backgroundColor: Colors.yellow,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
});

export default SplashScreen;
