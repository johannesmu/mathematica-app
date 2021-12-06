import React, {useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Theme } from '../Theme';

export const Splash = ( props ) => {
  useEffect( () => {
    // check for auth
  })

  return (
    <View style={ styles.screen }>
      <Image source={ require('../../assets/Logo.png') } />
      <Text style={styles.text}>Mathematica</Text>
    </View>
  )
}

const styles = StyleSheet.create( {
  screen: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.green,
  },
  text: {
    fontSize: 22,
  },
})