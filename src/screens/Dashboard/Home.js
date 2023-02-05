import React, { useRef } from 'react';
import {
  SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import FastImage from 'react-native-fast-image';
import { Picker } from 'react-native-wheel-pick';
import { COLORS, icons, images } from '../../constants';
import { home_strings } from '../../constants/constants';

const Home = props => {
  const actionSheetRef = useRef();

  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <Text style={styles.HeadingText}>{home_strings.todays_games}</Text>
        <View style={styles.innerContainer}>
          
          <FastImage
            style={styles.BannerImage}
            source={images.banner_image}
            resizeMode={FastImage.resizeMode.cover}>
            <View style={styles.bannerMainView}>
              <View style={styles.innerBannerView}>
                <Text style={styles.subHeaderStyle}>
                  {home_strings.under_or_over}
                </Text>
                <FastImage
                  style={styles.icon}
                  source={icons.information}
                  resizeMode={FastImage.resizeMode.contain}
                />
              </View>
              <View style={styles.innerBannerView}>
                <Text style={[styles.subHeaderStyle2]}>
                  {home_strings.starting_in}
                </Text>
                <FastImage
                  style={styles.icon}
                  source={icons.clock}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <Text
                  style={[
                    styles.subHeaderStyle2,
                    {color: COLORS.headingColor2, fontSize: 14},
                  ]}>
                  {home_strings.starting_in_time}
                </Text>
              </View>
            </View>
            <View style={styles.bannerMainView2}>
              <Text
                style={[
                  styles.subHeaderStyle,
                  {
                    lineHeight: 19,
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                  },
                ]}>
                {home_strings.bitcoin_price}
              </Text>

              <Text
                style={[
                  styles.subHeaderStyle2,
                  {
                    lineHeight: 19,
                    fontSize: 14,
                    fontFamily: 'Montserrat-Regular',
                    fontWeight: '700',
                    color: COLORS.white,
                  },
                ]}>
                {home_strings.dollar}
              </Text>
            </View>
          </FastImage>
          <View style={{backgroundColor: COLORS.white}}>
            <View style={[styles.bannerMainView]}>
              <View>
                <Text
                  style={[
                    styles.subHeaderStyle2,
                    {color: COLORS.headingColor4},
                  ]}>
                  {home_strings.prize_pool}
                </Text>
                <Text style={[styles.dataStyle]}>
                  {home_strings.prize_price}
                </Text>
              </View>

              <View>
                <Text
                  style={[
                    styles.subHeaderStyle2,
                    {color: COLORS.headingColor4},
                  ]}>
                  {home_strings.under}
                </Text>
                <Text style={[styles.dataStyle]}>
                  {home_strings.under_data}
                </Text>
              </View>

              <View>
                <Text
                  style={[
                    styles.subHeaderStyle2,
                    {color: COLORS.headingColor4},
                  ]}>
                  {home_strings.over}
                </Text>
                <Text style={[styles.dataStyle]}>{home_strings.over_data}</Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.subHeaderStyle2,
                    {color: COLORS.headingColor4},
                  ]}>
                  {home_strings.entery_fees}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                  }}>
                  <Text style={[styles.dataStyle]}>
                    {home_strings.entry_data}
                  </Text>
                  <FastImage
                    style={[styles.icon2, {marginHorizontal: 5, marginTop: 5}]}
                    source={icons.coin}
                    resizeMode={FastImage.resizeMode.contain}
                  />
                </View>
              </View>
            </View>
            <Text style={styles.predictionLabel}>
              {home_strings.whats_your_prediction}
            </Text>
            <View style={styles.ButtonContainer}>
              <TouchableOpacity style={styles.UpDownButton}>
                <FastImage
                  style={styles.icon}
                  source={icons.white_downarrow}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={[styles.buttonLabel]}>{home_strings.under1}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.UpDownButton,
                  {backgroundColor: COLORS.lightButton},
                ]}
                onPress={() => actionSheetRef.current?.show()}>
                <FastImage
                  style={styles.icon}
                  source={icons.white_uparrow}
                  resizeMode={FastImage.resizeMode.contain}
                />
                <Text style={[styles.buttonLabel]}>{home_strings.over1}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bannerMainView}>
            <View style={styles.innerBannerView}>
              <FastImage
                style={styles.icon}
                source={icons.players}
                resizeMode={FastImage.resizeMode.contain}
              />

              <Text
                style={[
                  styles.subHeaderStyle,
                  {color: COLORS.headingColor6, fontSize: 14},
                ]}>
                {home_strings.players}
              </Text>
            </View>
            <View style={styles.innerBannerView}>
              <FastImage
                style={styles.icon}
                source={icons.chart}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text
                style={[
                  styles.subHeaderStyle,
                  {color: COLORS.headingColor6, fontSize: 14},
                ]}>
                {home_strings.view_chart}
              </Text>
            </View>
          </View>
          <FastImage
            style={styles.bar}
            source={images.bar}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={styles.bannerMainView}>
            <View style={styles.innerBannerView}>
              <Text
                style={[
                  styles.subHeaderStyle,
                  {color: COLORS.headingColor4, fontSize: 12},
                ]}>
                {home_strings.predicted_over}
              </Text>
            </View>
            <View style={styles.innerBannerView}>
              <Text
                style={[
                  styles.subHeaderStyle,
                  {color: COLORS.headingColor4, fontSize: 12},
                ]}>
                {home_strings.predicted_over}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <ActionSheet ref={actionSheetRef} style={styles.ActionsheetStyle}>
        <Text style={styles.modalHeader}>{home_strings.your_prediction}</Text>
        <Text
          style={[
            styles.modalHeader,
            {color: COLORS.headingColor5, fontSize: 12},
          ]}>
          {home_strings.entry_tickets}
        </Text>
        <Picker
          style={{backgroundColor: 'white'}}
          textColor="#333333"
          selectedValue="15"
          pickerData={[
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
          ]}
          onValueChange={value => {
            console.log(value);
          }}
        />
        <View style={[styles.bannerMainView, {flexDirection: 'column'}]}>
          <View>
            <Text
              style={[styles.subHeaderStyle2, {color: COLORS.headingColor4}]}>
              {home_strings.you_can_win}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={[styles.dataStyle,{color:'#03A67F'}]}>{`$2000`}</Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.TotalText}>{`Total`}</Text>
              <FastImage
                style={[styles.icon2, {marginHorizontal: 10}]}
                source={icons.coin}
                resizeMode={FastImage.resizeMode.contain}
              />
              <Text style={styles.TotalText}>{`5`}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={[styles.submitButton, {backgroundColor: COLORS.lightButton}]}
            onPress={() => {
              actionSheetRef.current?.hide();
              props.navigation.navigate('Profile');
            }}>
            <Text style={[styles.buttonLabel]}>
              {home_strings.submit_my_prediction}
            </Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  HeadingText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21.86,
    fontFamily: 'AvenirNextLTPro-Regular',
    color: COLORS.headingColor,
    width: '95%',
    alignSelf: 'center',
    marginTop: 13,
  },
  predictionLabel: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17.07,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.headingColor5,
    width: '95%',
    alignSelf: 'center',
  },
  innerContainer: {
    width: '95%',
    alignSelf: 'center',
    backgroundColor: COLORS.backgroundColor9,
    borderRadius: 5,
    marginTop: 17,
  },
  BannerImage: {
    width: '100%',
    height: 104,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  icon: {
    height: 13,
    width: 13,
    marginHorizontal: 10,
  },
  bannerMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    margin: 15,
  },
  bannerMainView2: {
    width: '95%',
    alignSelf: 'center',
  },
  innerBannerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subHeaderStyle: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 14.63,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.headingColor2,
  },
  subHeaderStyle2: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.63,
    fontFamily: 'Montserrat-Regular',
    color: COLORS.headingColor3,
  },
  dataStyle: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 19.12,
    fontFamily: 'AvenirNextLTPro-Regular',
    color: COLORS.headingColor,
    marginTop: 5,
  },
  icon2: {
    height: 13,
    width: 13,
  },
  ButtonContainer: {
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 15,
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 17.07,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.white,
  },
  modalHeader: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 17.07,
    fontFamily: 'Montserrat-Medium',
    color: COLORS.black,
    margin: 15,
  },
  UpDownButton: {
    width: '48%',
    backgroundColor: COLORS.darkButton,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 40,
  },
  submitButton: {
    width: '90%',
    backgroundColor: COLORS.darkButton,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 40,
    alignSelf: 'center',
    margin: 15,
  },
  bar: {
    width: '95%',
    height: 10,
    borderRadius: 32,
    alignSelf: 'center',
  },
  ActionsheetStyle: {},
  TotalText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
    color: COLORS.headingColor5,
  },
});
