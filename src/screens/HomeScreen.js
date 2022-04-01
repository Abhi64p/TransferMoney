import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';

import {Colors, Typography} from '../styles';
import DrawerIconSVG from '../assets/svg/DrawerIconSVG';
import MoneySVG from '../assets/svg/MoneySVG';
import FailedSVG from '../assets/svg/FailedSVG';
import ReceivedSVG from '../assets/svg/ReceivedSVG';
import SendSVG from '../assets/svg/SendSVG';
import DownArrowSVG from '../assets/svg/DownArrowSVG';
import User1 from '../assets/images/User1.jpg';
import User2 from '../assets/images/User2.jpg';
import User3 from '../assets/images/User3.jpg';
import User4 from '../assets/images/User4.jpg';
import MoneyDialer from '../components/MoneyDialer';

const RECEIVED = 'RECEIVED';
const FAILED = 'FAILED';
const SEND = 'SEND';

const users = [
  {
    id: 1,
    name: 'Adeboye Usman',
    photo: User1,
    status: RECEIVED,
    amount: '200,000',
  },
  {
    id: 2,
    name: 'Mercy Popoola',
    photo: User2,
    status: FAILED,
    amount: '110,000',
  },
  {
    id: 3,
    name: 'Onome Adetayo',
    photo: User3,
    status: SEND,
    amount: '10,000',
  },
  {
    id: 4,
    name: 'Kingsley Abiodun',
    photo: User4,
    status: RECEIVED,
    amount: '200,000',
  },
];

const HomeScreen = ({navigation: {navigate}}) => {
  const [dialerOpen, setDialerOpen] = useState(false);

  const openDialer = () => setDialerOpen(true);
  const closeDialer = () => setDialerOpen(false);
  const handleDrawerClick = () => navigate('RequestScreen');
  const handleSendMoneyClick = () => navigate('SendScreen');

  return (
    <>
      <StatusBar hidden={false} />
      <View style={styles.container}>
        <View style={styles.row0}>
          <TouchableOpacity
            style={styles.drawerIconContainer}
            onPress={handleDrawerClick}>
            <DrawerIconSVG />
          </TouchableOpacity>
          <Text style={[Typography.h2White, styles.marginLeft20]}>
            Hello Sandra,
          </Text>
          <View style={styles.flex1} />
          <TouchableOpacity style={styles.addMoneyButton}>
            <Text style={Typography.buttonSecondary}>Add money</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.innerContainer}>
          <Text style={Typography.h5White}>Your current balance is</Text>
          <View style={styles.row1}>
            <MoneySVG color="white" />
            <Text style={[Typography.h0White, styles.marginLeft15]}>
              200,000
            </Text>
          </View>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity
            style={styles.sendReceiveMoney}
            onPress={openDialer}>
            <Text style={Typography.buttonTertiary}>Request money</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sendReceiveMoney}
            onPress={handleSendMoneyClick}>
            <Text style={Typography.buttonTertiary}>Send money</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flex1} />
        <View style={styles.bottomSheet}>
          <View style={styles.bottomSheetNob} />
          <View style={styles.row6}>
            <Text style={Typography.h2White}>All Transactions</Text>
            <View style={styles.flex1} />
            <Text style={[Typography.h4White, {color: Colors.violet2}]}>
              Sort by:{'   '}
            </Text>
            <Text style={Typography.h4White}>Recent</Text>
            <DownArrowSVG top={1} left={5} />
          </View>
          {users?.map((user, index) => (
            <User key={user.id} index={index} {...user} />
          ))}
        </View>
      </View>
      <MoneyDialer visible={dialerOpen} onClose={closeDialer} />
    </>
  );
};

const User = ({name, photo, status, amount, index}) => {
  const backgroundColor = index % 2 === 0 ? Colors.violet3 : Colors.background1;
  const statusBG =
    status === RECEIVED
      ? Colors.green
      : status === SEND
      ? Colors.orange
      : Colors.red;

  return (
    <View style={[styles.row3, {backgroundColor}]}>
      <Image source={photo} style={styles.photo} resizeMode="cover" />
      <View style={styles.userInnerContainer}>
        <Text style={Typography.h3VioletBold}>{name}</Text>
        <View style={[styles.row4, {backgroundColor: statusBG}]}>
          {status === FAILED ? (
            <FailedSVG />
          ) : status === RECEIVED ? (
            <ReceivedSVG />
          ) : (
            <SendSVG />
          )}
          <Text style={[Typography.h5White, styles.marginLeft6]}>
            {status === RECEIVED
              ? 'Received'
              : status === SEND
              ? 'Send'
              : 'Failed'}
          </Text>
        </View>
      </View>
      <View style={styles.flex1} />
      <View style={styles.row5}>
        <MoneySVG height={16} width={16} color={statusBG} />
        <Text
          style={[Typography.h2White, styles.marginLeft6, {color: statusBG}]}>
          {amount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.background},
  drawerIconContainer: {
    height: 48,
    width: 48,
    borderRadius: 28,
    backgroundColor: Colors.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row0: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    paddingTop: 40,
  },
  row1: {flexDirection: 'row', marginTop: 10, alignItems: 'center'},
  row2: {flexDirection: 'row', marginVertical: 20, paddingHorizontal: 10},
  row3: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
  },
  row4: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    paddingRight: 10,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  row5: {flexDirection: 'row', alignItems: 'center'},
  row6: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  marginLeft20: {marginLeft: 20},
  marginLeft15: {marginLeft: 15},
  marginLeft6: {marginLeft: 6},
  flex1: {flex: 1},
  addMoneyButton: {
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tertiary,
  },
  innerContainer: {paddingHorizontal: 20, paddingTop: 30, paddingBottom: 20},
  sendReceiveMoney: {
    height: 60,
    flex: 1,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.violet1,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  photo: {width: 48, height: 48, borderRadius: 24},
  userInnerContainer: {paddingHorizontal: 15},
});

export default HomeScreen;
