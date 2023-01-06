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

const Home = () => {
  const [text, onChangeText] = React.useState("");
  return(
    
    <View style={styles.all}>

      {/* --- SEARCH BAR --- */}
      <View style={styles.at}>
      <View style={styles.atas}>
        {/* <Image style={styles.img0} source={{ uri: 'https://www.travelingajadulu.com/wp-content/uploads/2020/03/singapore-1-960x600.jpg?w=200&h=200' }}/>  */}
        <View style={styles.sb}>
          <TextInput style={styles.tb} onChangeText={onChangeText} value={text} placeholder="Cari Wisata Kamu"></TextInput>
        </View>
        <Image style={styles.img0} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplikasi-wisata-pacitan.appspot.com/o/pngwing.com.png?alt=media&token=8c401ada-8747-413a-9389-b9abb050ea03' }}/>
      </View>
      </View>
      

      <ScrollView>
      {/* --- WELCOME SECTION --- */}
      <View style={{ marginTop: 5 }}>
        <Image style={styles.img1} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplikasi-wisata-pacitan.appspot.com/o/klayar-via-pambudi-yoga-perdana.jpg?alt=media&token=b0dca9ff-da74-484b-b6bd-cf100ab8ebfb' }}/>
        <View style={styles.lp1}>
          <Text style={{ fontSize: 22, color: '#FFF', fontFamily: 'manrope', fontWeight: 'bold'}}>Selamat Datang</Text>
          <Text style={{ fontSize: 18, color: '#FFF'}}>Di Kota 1001 Goa</Text>
        </View>
      </View>
      
      {/* --- RECENT SECTION --- */}
      <View style={{ paddingLeft: 20, marginVertical: 20 }}>
        <Text style={{ fontSize: 16, color: '#FFF', fontWeight: 'bold' }}>Destinasi Terbaik</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 10 }}>
          <View>
            <Image style={styles.img2} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplikasi-wisata-pacitan.appspot.com/o/stalaktit-atau-stalakmit-goa-gong-1024x1024.jpg?alt=media&token=40bb1e24-d82e-4117-8964-e5899041186a' }}/>
            <Text style={styles.tr}>Goa Gong</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Image style={styles.img2} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplikasi-wisata-pacitan.appspot.com/o/14676648_996382120472591_3001109647915483136_n-1.jpg?alt=media&token=ff5422f7-fd53-4cf4-9dae-b24391e5c6c3' }}/>
            <Text style={styles.tr}>Pantai Watukarung</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Image style={styles.img2} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplikasi-wisata-pacitan.appspot.com/o/Foto-Pantai-Pacitan-Terbaru-Bagi-mereka-yang-bersedih-lihatlah.jpg?alt=media&token=8b32109f-7946-45b1-a778-671d74e0fe48' }}/>
            <Text style={styles.tr}>Pantai Kasap</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Image style={styles.img2} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplikasi-wisata-pacitan.appspot.com/o/1582619721689.jpeg?alt=media&token=ae5eb6ca-7a1b-401c-9211-d1ae77122eb7' }}/>
            <Text style={styles.tr}>Pantai Pancer Door</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Image style={styles.img2} source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/aplikasi-wisata-pacitan.appspot.com/o/pantai-klayar.jpg?alt=media&token=bc6682cd-d8e0-4d76-854c-13ec8c26c6ce' }}/>
            <Text style={styles.tr}>Pantai Klayar</Text>
          </View>
        </ScrollView>
      </View>

      {/* --- TODAY SECTION --- */}
      <View style={styles.tio}>
        <Text style={{ color: '#FFF' }}>Today's offer</Text>
        <TouchableOpacity style={styles.cio}>
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Check it out</Text>
        </TouchableOpacity>
      </View>

      {/* --- TOP DESTINATION SECTION --- */}
      {/* <View style={styles.td}>
      <Image style={styles.img3} source={{ uri: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900' }}/>
        <Text style={{ color: '#FFF', fontSize: 16, marginTop: 20 }}>Top Destination</Text>
        <Text style={{ color: '#FFF', fontSize: 17, marginTop: 5, fontWeight: 'bold' }}>Paris</Text>
      </View> */}
      </ScrollView>
    </View>  
    
  );
};

const styles = StyleSheet.create({
  all:{
    flex: 1,
    backgroundColor: 'black',
  },
  at:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  atas:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    width: '95%',
    backgroundColor: '#FFF',
    borderRadius: 50,
    marginVertical: 10,
  },
  img0:{
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  sb:{
    height: 40,
    width: 240,
    borderRadius: 10,
  },
  tb:{
    color: 'black',
    textAlign: 'left',
    fontWeight:'500'
  },
  img1:{
    borderRadius: 40,
    // borderBottomLeftRadius: 40,
    // borderBottomRightRadius: 40,
    width: window.width,
    height: window.height / 2.5,
  },
  lp1:{
    position: 'absolute',
    top: 0,
    left: 0,
    paddingBottom: 20,
    paddingLeft:15,
    width: window.width,
    height: window.height / 2.5,
    borderRadius: 40,
    // borderBottomLeftRadius: 40,
    // borderBottomRightRadius: 40,
    backgroundColor: '#00000050',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  img2:{
    height: 150,
    width: 150,
    borderRadius: 5,
  },
  tr:{
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#FFF',
  },
  tio:{
    height: 100,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1976d2',
  },
  cio:{
    paddingVertical: 7,
    paddingHorizontal: 13,
    borderRadius: 30,
    marginTop: 5,
    backgroundColor: 'black',
  },
  td:{
    height: 300,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#1976d2',
  },
  img3:{
    height: 200,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default Home;