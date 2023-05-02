import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface IProps {}

export const SearchBar: React.FC<IProps> = () => {
  const [search, OnChangeSearch] = useState('');

  return (
    <View style={styles.outerView}>
      <Ionicons name={'search'} size={15} color={'black'} />
      <TextInput
        style={styles.input}
        onChangeText={OnChangeSearch}
        value={search}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerView: {
    height: 40,
    margin: 10,
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'white',

    flexDirection: 'row',
  },
  input: {
    color: 'black',
    flex: 1,
  },
});
