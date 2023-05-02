import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface IProps {}

export const MessageCard: React.FC<IProps> = () => {
  return (
    <TouchableOpacity>
      <View style={styles.outerView}>
        <Image
          source={require('../../assets/images/person1.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={{flex: 2}}>
          <Text style={styles.name}>Faiza</Text>
          <Text style={styles.text}>Hello ! Are you there?</Text>
        </View>
        <Text style={styles.timing}>5 min ago</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  outerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 15,
    backgroundColor: 'white',
    margin: 5,
  },
  name: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
  },
  image: {
    height: '100%',
    width: '20%',
  },
  text: {
    color: '#767676',
  },
  timing: {
    color: '#767676',
    textAlign: 'right',
  },
});
