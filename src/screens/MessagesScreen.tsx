import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {MessageCard} from '../components/MessageComponent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {SearchBar} from '../components/SearchBar';

interface IProps {}

export const MessagesScreen = () => {
  const navigation = useNavigation();

  const rooms = [
    {
        id: "1",
        name: "sameer aslam",
        messages: [
            {
                id: "1a",
                text: "Hello guys, welcome!",
                time: "07:50",
                user: "Tomer",
            },
            {
                id: "1b",
                text: "Hi Tomer, thank you! 😇",
                time: "08:50",
                user: "David",
            },
        ],
    },
    {
        id: "2",
        name: "Maroof",
        messages: [
            {
                id: "2a",
                text: "Guys, who's awake? 🙏🏽",
                time: "12:50",
                user: "Team Leader",
            },
            {
                id: "2b",
                text: "What's up? 🧑🏻‍💻",
                time: "03:50",
                user: "Victoria",
            },
        ],
    },
];

  return (
    <View style={styles.containor}>
      <SearchBar />
      <MessageCard />
      <TouchableOpacity
        onPress={() => navigation.navigate('ChatScreen')}
        style={{
          alignSelf: 'center',
          position: 'absolute',
          bottom: 0,
        }}>
        <AntDesign name={'pluscircle'} size={55} color={'#3ddf95'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containor: {
    flex: 1,
  },
});
