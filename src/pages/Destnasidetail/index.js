import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Image,
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { Button } from '../../Component';

const window = Dimensions.get('window')

const Destinasi = () => {
    const [text, onChangeText] = React.useState("");
    return(
        
        <View style={styles.all}>
        {/* --- GAMBAR DESTINASI --- */}
            <View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    <Image style={styles.mainImage} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplikasi-wisata-pacitan.appspot.com/o/1582619721689.jpeg?alt=media&token=ae5eb6ca-7a1b-401c-9211-d1ae77122eb7' }}/>
                    <Image style={styles.mainImage} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplikasi-wisata-pacitan.appspot.com/o/1582619721689.jpeg?alt=media&token=ae5eb6ca-7a1b-401c-9211-d1ae77122eb7' }}/>
                </ScrollView>
                <View style={styles.lp1}>
                    <View style={styles.icon}></View>
                    <View style={{ width: '100%' }}>
                        <Text style={{ fontSize: 24, color: '#FFF', fontFamily: 'manrope', fontWeight: 'bold'}}>Pantai Pancer Door</Text>
                        <Text style={{ fontSize: 20, color: '#FFF'}}>6,1 Km Dari Pusat Kota</Text>
                        <View style={{ alignItems: 'center', paddingTop: 40 }}>
                            <View style={styles.s1}>
                                <View style={styles.s2}/>
                                <View style={styles.s2}/>
                                <View style={styles.s2}/>
                                <View style={styles.s2}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
      
    );
};

const styles = StyleSheet.create({
    all:{
      flex: 1,
      backgroundColor: 'black',
    },
    mainImage:{
        width: window.width,
        height: window.height,
    },
    lp1:{
        position: 'absolute',
        top: 0,
        left: 0,
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal:15,
        width: window.width,
        height: window.height / 1.05,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    icon:{
        height: 35,
        width: 35,
        borderRadius: 50,
        backgroundColor: '#FFF',
    },
    s1:{
        height: 23,
        width: 90,
        borderRadius: 50,
        backgroundColor: '#FFF',
        opacity: 0.7,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#00000050',
    },
    s2:{
        height: 13,
        width: 13,
        borderRadius: 50,
        backgroundColor: '#D9D9D9',  
    },

});

export default Destinasi;