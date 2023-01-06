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

const window = Dimensions.get('window')

const Destinasi = () => {
    const [text, onChangeText] = React.useState("");
    return(
        <ScrollView>
      <View style={styles.all}>
        
        {/* --- GAMBAR DESTINASI --- */}
      <View style={{ marginTop: 5 }}>
        <Image style={styles.mainImage} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplikasi-wisata-pacitan.appspot.com/o/1582619721689.jpeg?alt=media&token=ae5eb6ca-7a1b-401c-9211-d1ae77122eb7' }}/>
        <View style={styles.lp1}>
          <Text style={{ fontSize: 24, color: '#FFF', fontFamily: 'manrope', fontWeight: 'bold'}}>Pantai Pancer Door</Text>
          <Text style={{ fontSize: 20, color: '#FFF'}}>6,1 Km Dari Pusat Kota</Text>
        </View>
      </View>

      {/* --- INFORMASI DESTINASI --- */}
      <View style={[styles.container, {
        }]}>
      <View style={styles.background} >
        <View style={styles.aturtext}>
            <Text style={styles.title}>Tiket Masuk</Text>
            <Text style={styles.contenttitle}>Rp 20.000,-</Text>
        </View>
        <View style={styles.aturtext}>
            <Text style={styles.title}>Fasilitas</Text>
            <Text style={styles.contenttitle}>Hammock</Text>
            <Text style={styles.contenttitle}>Food Court</Text>
            <Text style={styles.contenttitle}>Area Surfing</Text>
            <Text style={styles.contenttitle}>Kamar Mandi</Text>
            <Text style={styles.contenttitle}>Tempat Parkir</Text>
            <Text style={styles.contenttitle}>Lapangan Voli</Text>
            <Text style={styles.contenttitle}>Area Camping</Text>
        </View>
        <View style={styles.aturtext}>
            <Text style={styles.title}>Contact Person</Text>
            <Text style={styles.contenttitle}>+6281946233448</Text>
        </View>
        
      </View>
      
     </View>

      </View>
      </ScrollView>
    );
  };

const styles = StyleSheet.create({
    all:{
      flex: 1,
      backgroundColor: 'black',
    },
    mainImage:{
        width:'100%',
        height:500,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50
    },
    lp1:{
        position: 'absolute',
        top: 0,
        left: 0,
        paddingBottom: 20,
        paddingLeft:15,
        width: window.width,
        height: window.height / 1.550,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
      },
      informasibackground:{
        fontSize: 22, 
        color: '#FFF', 
        fontFamily: 'manrope', 
        fontWeight: 'bold'
      },
      container: {
        flex: 1,
        borderRadius:50,
        flexDirection: "column"
      },
      background:{
        flex: 1, 
        backgroundColor: "white",
        borderRadius:30,
        padding:20
      },
      title:{
        fontSize: 25, 
        fontFamily: 'manrope', 
        fontWeight: 'bold',
        color:'#3C3D3E'
      },
      aturtext:{
        alignItems: 'center',
        paddingTop:10,
        paddingBottom:20
      },
      contenttitle:{
        fontSize: 21, 
        fontFamily: 'manrope',
        paddingBottom:5,
      }

  });

  export default Destinasi;