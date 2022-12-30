import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

const Hal1 = () => {
  // this.props.navigation.setOptions({
  //   headerBackTitle: '',
  //   headerShown: false
  // })

  return(
    
    <View style={styles.all}>
      <View style={styles.atas}>
        <Text style={styles.tb}>Dashboard</Text>
      </View>
    </View>  
    
  );
};

const styles = StyleSheet.create({
  all:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  atas:{
    position: 'absolute',
    top: 0,
    height: 100,
    width: '100%',
    backgroundColor: '#FFF',
  },
  tb:{
    textAlign: 'center',
    fontSize: 20,
    marginTop: 60,
  },
});

export default Hal1;