import React from 'react';
import {View, Text} from 'react-native';
import {
  DATA,
  HISTORY,
  INSPECTION_SMALL,
  LOGO,
  LOGOUT,
  NOTIFICATIONS,
  OVERVIEW,
  PAYMENT,
  PROFILE_PHOTO,
} from './icon/svgIcons';
import Icon from './icon/Icon';

export default function HomeDrawerContents() {
  return (
    <View style={{padding: 10}}>
      <Icon name={LOGO} size={170} />

      <View style={{flexDirection: 'row', marginTop: 40}}>
        <Icon name={OVERVIEW} size={45} />
        <Text style={{color: '#000', fontWeight: 'bold', alignSelf: 'center'}}>
          Overview
        </Text>
      </View>
      <View
        style={{height: 1, backgroundColor: '#EEEEEE', marginVertical: 15}}
      />

      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Icon name={INSPECTION_SMALL} size={45} />
        <Text style={{color: '#000', fontWeight: 'bold', alignSelf: 'center'}}>
          Inspection
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 40}}>
        <Icon name={NOTIFICATIONS} size={45} />
        <Text style={{color: '#000', fontWeight: 'bold', alignSelf: 'center'}}>
          Notifications
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 40}}>
        <Icon name={DATA} size={45} />
        <Text style={{color: '#000', fontWeight: 'bold', alignSelf: 'center'}}>
          Maintenance
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 40}}>
        <Icon name={PAYMENT} size={45} />
        <Text style={{color: '#000', fontWeight: 'bold', alignSelf: 'center'}}>
          Payment Wallet
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 40}}>
        <Icon name={HISTORY} size={45} />
        <Text style={{color: '#000', fontWeight: 'bold', alignSelf: 'center'}}>
          History
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 40}}>
        <Icon name={LOGOUT} size={45} />
        <Text
          style={{color: '#999999', fontWeight: 'bold', alignSelf: 'center'}}>
          Log out
        </Text>
      </View>

      <View
        style={{flexDirection: 'row', marginTop: 100, alignItems: 'center'}}>
        <Icon name={PROFILE_PHOTO} size={70} />
        <View>
          <Text style={{color: '#000', fontWeight: 'bold'}}>Faith Auto's</Text>
          <Text style={{color: '#999999', fontWeight: 'bold'}}>
            Auto Center
          </Text>
        </View>
      </View>
    </View>
  );
}
