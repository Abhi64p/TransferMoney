import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';
import Animated, {
  interpolateColor,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

import {Colors, Typography} from '../styles';
import BackButton from '../components/BackButton';
import User6 from '../assets/images/User6.jpg';
import User7 from '../assets/images/User7.jpg';
import User8 from '../assets/images/User8.jpg';
import User9 from '../assets/images/User9.jpg';
import User10 from '../assets/images/User10.jpg';
import User11 from '../assets/images/User11.jpg';

const {width} = Dimensions.get('window');
const timingConfig = {duration: 200, easing: Easing.cubic};
const users = [
  {
    id: 1,
    name: 'Adedoyin Leke',
    photo: User6,
    left: width * 0.4,
    top: width * 0.09,
  },
  {
    id: 2,
    name: 'Adeleke Adeyanju',
    photo: User7,
    left: width * 0.66,
    top: width * 0.25,
  },
  {
    id: 3,
    name: 'Adelaide Uti (son)',
    photo: User8,
    left: width * 0.08,
    top: width * 0.25,
  },
  {
    id: 4,
    name: 'Adedoyin Leke',
    photo: User10,
    left: width * 0.67,
    top: width * 0.6,
  },
  {
    id: 5,
    name: 'Adolph Colleague',
    photo: User9,
    left: width * 0.19,
    top: width * 0.51,
  },
  {
    id: 6,
    name: 'Aduni Wale',
    photo: User11,
    left: width * 0.4,
    top: width * 0.75,
  },
];

const SendScreen = () => {
  const [selectedUser, setSelectedUser] = useState();
  const sheetValue = useSharedValue(50);

  useEffect(() => {
    sheetValue.value = withTiming(selectedUser ? 310 : 50, timingConfig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUser]);

  const animatedStyle = useAnimatedStyle(() => ({height: sheetValue.value}));

  const handleIdChange = _user =>
    setSelectedUser(_user?.id === selectedUser?.id ? undefined : _user);

  return (
    <View style={styles.container}>
      <View style={styles.row0}>
        <BackButton containerStyle={styles.marginTop0} />
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.flex1Center}>
        <View style={styles.outerCircle}>
          <View style={styles.middleCircle} />
          <View style={styles.innerCircle} />
          {users.map(user => (
            <Circle
              key={user.id}
              {...user}
              selected={selectedUser?.id === user.id}
              onPress={() => handleIdChange(user)}
            />
          ))}
        </View>
      </View>
      <Animated.View style={[styles.bottomSheet, animatedStyle]}>
        <View style={styles.bottomSheetNob} />
        <Image
          style={styles.selectedPhoto}
          source={selectedUser?.photo}
          resizeMode="cover"
        />
        <Text style={[Typography.h2White, styles.userName]}>
          {selectedUser?.name}
        </Text>
        <Text style={[Typography.h4White, styles.center]}>
          (+234) 905 169 275
        </Text>
        <TouchableOpacity style={styles.sendMoney}>
          <Text style={Typography.h4White}>Continue</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const Circle = ({name, photo, left, top, selected, onPress}) => {
  const colorValue = useSharedValue(0);
  const sizeValue = useSharedValue(36);
  const borderValue = useSharedValue(2);

  useEffect(() => {
    colorValue.value = withTiming(selected ? 1 : 0, timingConfig);
    sizeValue.value = withTiming(selected ? 72 : 36, timingConfig);
    borderValue.value = withTiming(selected ? 4 : 2, timingConfig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const animatedStyle = useAnimatedStyle(
    () => ({
      color: interpolateColor(
        colorValue.value,
        [0, 1],
        ['white', Colors.green],
      ),
    }),
    [],
  );

  const circleStyle = useAnimatedStyle(
    () => ({
      borderColor: interpolateColor(
        colorValue.value,
        [0, 1],
        ['white', Colors.green],
      ),
      width: sizeValue.value,
      height: sizeValue.value,
      borderRadius: sizeValue.value / 2,
      borderWidth: borderValue.value,
    }),
    [],
  );

  return (
    <TouchableOpacity
      style={[styles.photoContainer, {left, top}]}
      onPress={onPress}
      activeOpacity={1}>
      <Animated.View style={circleStyle}>
        <Image style={styles.photo} source={photo} resizeMode="cover" />
      </Animated.View>
      <Animated.Text style={[Typography.h6White, animatedStyle]}>
        {name}
      </Animated.Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.background, paddingTop: 50},
  flex1Center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  bottomSheet: {
    backgroundColor: Colors.background1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: 20,
  },
  bottomSheetNob: {
    backgroundColor: Colors.violet2,
    width: 64,
    height: 7,
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.green,
    flex: 1,
    height: 48,
    borderRadius: 8,
    marginLeft: 20,
  },
  row0: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 20,
  },
  marginTop0: {marginTop: 0},
  outerCircle: {
    aspectRatio: 1,
    width: '95%',
    borderWidth: 2,
    borderColor: Colors.background2,
    borderRadius: width * 0.5,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleCircle: {
    aspectRatio: 1,
    width: '73%',
    borderWidth: 2,
    borderColor: Colors.background2,
    borderRadius: width * 0.5,
    position: 'absolute',
  },
  innerCircle: {
    aspectRatio: 1,
    width: '44%',
    borderWidth: 2,
    borderColor: Colors.background2,
    borderRadius: width * 0.5,
    position: 'absolute',
  },
  photoContainer: {alignItems: 'center', position: 'absolute'},
  photo: {width: '100%', height: '100%', borderRadius: 36},
  sendMoney: {
    backgroundColor: Colors.rose,
    width: 173,
    height: 60,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
  },
  center: {alignSelf: 'center'},
  userName: {alignSelf: 'center', marginVertical: 10},
  selectedPhoto: {
    width: 72,
    height: 72,
    borderRadius: 36,
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default SendScreen;
