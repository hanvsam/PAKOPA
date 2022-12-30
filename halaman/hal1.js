import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

const Hal1 = () => {
  return(
    <SafeAreaView>
        <ScrollView>
            <View style={styles.all}>
                <Text>hello</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  all:{
    flex: 1,
  },
});

export default Hal1;