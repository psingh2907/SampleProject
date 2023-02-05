import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {COLORS, icons, images} from '../../constants';
import {home_strings, walkthrough} from '../../constants/constants';
import Tab_View from '../../Tab_View';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profile = props => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Stripe Earned',
      subtitle: 'Top 10% of highest spending players in a month',
      image: require('../../../assets/images/rising_star.png'),
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Born Winner',
      subtitle: 'Top 10% of highest spending players in a month',
      image: require('../../../assets/images/rising_star.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Trader of the Month',
      subtitle: 'Won 7 under-over games in a row',
      image: require('../../../assets/images/rising_star.png'),
    },
    {
      id: '58694a0f-3da1-471f-bs96-145571e29d72',
      title: 'Rising Star',
      subtitle: 'Won 7 under-over games in a row',
      image: require('../../../assets/images/rising_star.png'),
    },
    {
      id: '58694a0f-3qa1-471f-bd96-145571e29d72',
      title: 'Jackpot',
      subtitle: 'Won 7 under-over games in a row',
      image: require('../../../assets/images/rising_star.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-145567e29d72',
      title: 'Impossible',
      subtitle: 'Won 7 under-over games in a row',
      image: require('../../../assets/images/rising_star.png'),
    },
    {
      id: '58694a0f-3da1-471f-bd96-ws5571w29d72',
      title: 'First Stripe Earned',
      subtitle: 'Won 7 under-over games in a row',
      image: require('../../../assets/images/rising_star.png'),
    },
  ];

  const Item = ({image,title,subtitle}) => (
    <View style={styles.item}>
         <FastImage
          style={styles.imageStyle}
          source={image}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={{width:'83%',marginLeft:15}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        </View>
    </View>
  );

  

  return (
    <SafeAreaView style={styles.Container}>
        <ScrollView>
      <View style={styles.innerMainView}>
        <View style={styles.HeaderView}>
          <FastImage
            style={styles.icon}
            source={icons.profile2}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.HeadingText}>Profile</Text>
          <FastImage
            style={styles.icon}
            source={icons.chat}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>

        <View
          style={{
            marginTop: '10%',
            alignSelf: 'center',
            width: '95%',
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <View>
              <FastImage
                style={styles.profileIcon}
                source={icons.user_icon}
                resizeMode={FastImage.resizeMode.contain}
              />
              <TouchableOpacity style={styles.EditButton}>
                <FastImage
                  style={styles.editIcon}
                  source={icons.edit}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.nameStyle}>{home_strings.JinaSimons}</Text>
            <Text
              style={[
                styles.nameStyle,
                {
                  color: COLORS.headingColor5,
                  lineHeight: 14.63,
                  marginVertical: 0,
                  fontSize: 12,
                },
              ]}>
              {home_strings.points}
            </Text>
            <Text
              style={[
                styles.nameStyle,
                {
                  color: COLORS.headingColor5,
                  lineHeight: 20,
                  marginVertical: 5,
                },
              ]}>
              {home_strings.info_jina}
            </Text>
          </View>

          <TouchableOpacity style={styles.LogoutButton}>
            <FastImage
              style={styles.LogoutIcon}
              source={icons.logout}
              resizeMode={FastImage.resizeMode.contain}
            />
            <Text
              style={[
                styles.nameStyle,
                {fontFamily: 'Montserrat-Regular', marginHorizontal: 10},
              ]}>
              {home_strings.logout}
            </Text>
          </TouchableOpacity>

          <View style={styles.percentBox}>
            <FastImage
              style={styles.starGroup}
              source={images.star_group}
              resizeMode={FastImage.resizeMode.contain}
            />
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Text style={styles.UnderOverStyleText}>
                    {home_strings.underOver2}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <FastImage
                      style={styles.arrowStyle}
                      source={icons.up_green}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                    <Text style={styles.percentTextStyle}>
                      {home_strings.uppercent}
                    </Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.UnderOverStyleText}>
                    {home_strings.top5}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <FastImage
                      style={styles.arrowStyle}
                      source={icons.down_red}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                    <Text style={styles.percentTextStyle}>
                      {home_strings.downpercent}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 4,
            backgroundColor: '#F3F2F7',
            width: windowWidth + 100,
            marginLeft: -100,
            marginVertical: 10,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 50,
          }}>
          <TouchableOpacity style={styles.TopTabButton}>
            <Text style={styles.TabText}>{home_strings.games_played}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.TopTabButton,
              {borderBottomWidth: 2, borderBottomColor: '#6231AD'},
            ]}>
            <Text style={[styles.TabText, {color: '#6231AD'}]}>
              {home_strings.badges}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: '#F6F3FA'}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} image={item.image} subtitle={item.subtitle} />}
          keyExtractor={item => item.id}
          style={{paddingBottom:100}}
        />
      </View>

      
      </ScrollView>
      <Tab_View
        home_tab1={() => props.navigation.navigate('Home')}
        home_tab2={() => props.navigation.navigate('Home')}
        an_flag5={true}
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerMainView: {
    width: '95%',
    alignSelf: 'center',
    // margin: 15,
  },
  icon: {
    height: 30,
    width: 30,
  },
  HeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:20
  },
  HeadingText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.07,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.headingColor5,
  },
  nameStyle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 17.07,
    fontFamily: 'Montserrat-Regular',
    color: COLORS.headingColor,
    marginVertical: 10,
  },
  profileIcon: {
    height: 75,
    width: 75,
  },
  editIcon: {
    // position: 'absolute',
    height: 13,
    width: 13,
  },
  EditButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    backgroundColor: '#EEEAF3',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  LogoutButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  LogoutIcon: {
    width: 18,
    height: 14,
  },
  percentBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EEEAF3',
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: '5%',
  },
  starGroup: {
    height: 31,
    width: 27,
    position: 'absolute',
    top: -15,
  },
  arrowStyle: {
    height: 32,
    width: 32,
  },
  UnderOverStyleText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17.07,
    fontFamily: 'Montserrat-Regular',
    color: COLORS.headingColor5,
  },
  percentTextStyle: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 29.26,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.headingColor5,
    marginLeft: 15,
  },
  TopTabButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TabText: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17.07,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.headingColor5,
  },
  imageStyle: {
    height: 60,
    width: 60,
  },
  //kjk
  item: {
    backgroundColor: COLORS.white,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
    flexDirection:'row'
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17.07,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.headingColor,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.headingColor5,
    width:'90%'
  },
});
