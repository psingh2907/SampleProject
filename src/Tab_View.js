import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {icons} from './constants';

const Tab_View = props => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainView}>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-around',
          width: '95%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={props.home_tab1}
          style={[styles.TouchableStyle]}>
          <Image
            source={icons.home}
            style={{
              height: 25,
              width: 25,
              tintColor: props.an_flag1 ? '#6231AD' : '#B5C0C8',
            }}
            resizeMode="contain"
          />

          <Text
            style={{
              fontSize: 12,
              color: props.an_flag1 ? '#6231AD' : '#727682',
              marginTop: 5,
              fontFamily: 'Montserrat-Regular',
            }}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props.home_tab2}
          style={[styles.TouchableStyle]}>
          <Image
            source={icons.leagues}
            style={{
              height: 25,
              width: 25,
              tintColor: props.an_flag2 ? '#6231AD' : '#B5C0C8',
            }}
            resizeMode="contain"
          />

          <Text
            style={{
              fontSize: 12,
              color: props.an_flag2 ? '#6231AD' : '#727682',
              marginTop: 5,
              fontFamily: 'Montserrat-Regular',
            }}>
            Leagues
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.home_tab3}
          style={[styles.TouchableStyle]}>
          <Image
            source={icons.research}
            style={{
              height: 25,
              width: 25,
              tintColor: props.an_flag3 ? '#6231AD' : '#B5C0C8',
            }}
            resizeMode="contain"
          />

          <Text
            style={{
              fontSize: 12,
              color: props.an_flag3 ? '#6231AD' : '#727682',
              marginTop: 5,
              fontFamily: 'Montserrat-Regular',
            }}>
            Research
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.home_tab4}
          style={[styles.TouchableStyle]}>
          <Image
            source={icons.leaderboard}
            style={{
              height: 25,
              width: 25,
              tintColor: props.an_flag4 ? '#6231AD' : '#B5C0C8',
            }}
            resizeMode="contain"
          />

          <Text
            style={{
              fontSize: 12,
              color: props.an_flag4 ? '#6231AD' : '#727682',
              marginTop: 5,
              fontFamily: 'Montserrat-Regular',
            }}>
            Leaderboard
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={props.home_tab5}
          style={[styles.TouchableStyle]}>
          <Image
            source={icons.profile}
            style={{
              height: 25,
              width: 25,
              tintColor: props.an_flag5 ? '#6231AD' : '#B5C0C8',
            }}
            resizeMode="contain"
          />

          <Text
            style={{
              fontSize: 12,
              color: props.an_flag5 ? '#6231AD' : '#727682',
              // marginLeft: 10,
              marginTop: 5,
              fontFamily: 'Montserrat-Regular',
            }}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tab_View;

const styles = StyleSheet.create({
  tabBar: {
    height: 75,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    height: 75,
  },
  mainView: {
    flex: 1,
    height: 70,
    width: '100%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  TouchableStyle: {
    alignItems: 'center',
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
  },
});
