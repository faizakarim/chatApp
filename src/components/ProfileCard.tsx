import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Rect} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {
  item: string;
  iconName: string;
}

export const ProfileCard: React.FC<IProps> = ({item, iconName}) => {
  return (
    <TouchableOpacity style={styles.OuterView}>
      <View
        style={{
          backgroundColor: '#3ddf95',
          borderRadius: 25,
          padding: 5,
          justifyContent: 'center',
          alignItems: 'center',
          width: 35,
          height: 35,
        }}>
        <Ionicons name={iconName} size={20} color={'white'} />
      </View>
      <Text style={styles.Text}>{item}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  OuterView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
    marginBottom: 1,
  },
  Text: {
    color: 'black',
    alignSelf: 'center',
    marginLeft: 10,
  },
});
