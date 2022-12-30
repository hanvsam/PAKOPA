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

const Hal1 = () => {
  // this.props.navigation.setOptions({
  //   headerBackTitle: '',
  //   headerShown: false
  // })

  return(
    
    <View style={styles.all}>
      {/* --- SEARCH BAR --- */}
      <View style={styles.atas}>
        <Image style={styles.img0} source={{ uri: 'https://www.travelingajadulu.com/wp-content/uploads/2020/03/singapore-1-960x600.jpg?w=200&h=200' }}/>
        <View style={styles.sb}>
          <Text style={styles.tb}>Cari Wisata Kamu</Text>
        </View>
        <Image style={styles.img0} source={{ uri: 'https://www.travelingajadulu.com/wp-content/uploads/2020/03/singapore-1-960x600.jpg?w=200&h=200' }}/>
      </View>

      <ScrollView>
      {/* --- WELCOME SECTION --- */}
      <View style={{ marginTop: 10 }}>
        <Image style={styles.img1} source={{ uri: 'https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg?impolicy=fcrop&w=1600&h=1066&q=medium' }}/>
        <View style={styles.lp1}>
          <Text style={{ fontSize: 18, color: '#FFF' }}>Welcome to</Text>
          <Text style={{ fontSize: 21, color: '#FFF', fontWeight: 'bold' }}>PAKOPA App</Text>
        </View>
      </View>
      
      {/* --- RECENT SECTION --- */}
      <View style={{ paddingLeft: 20, marginVertical: 20 }}>
        <Text style={{ fontSize: 16, color: '#FFF', fontWeight: 'bold' }}>Recents</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 10 }}>
          <View>
            <Image style={styles.img2} source={{ uri: 'https://www.travelingajadulu.com/wp-content/uploads/2020/03/singapore-1-960x600.jpg?w=200&h=200' }}/>
            <Text style={styles.tr}>Singapore</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Image style={styles.img2} source={{ uri: 'https://i0.wp.com/www.montcalmroyallondoncity.co.uk/blog/wp-content/uploads/2017/07/shutterstock_107597459.jpg?fit=1000%2C667&ssl=1' }}/>
            <Text style={styles.tr}>London</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Image style={styles.img2} source={{ uri: 'https://www.telegraph.co.uk/content/dam/Travel/Destinations/North%20America/USA/New%20York/Attractions/statue-of-liberty-new-york-p.jpg' }}/>
            <Text style={styles.tr}>New York</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Image style={styles.img2} source={{ uri: 'https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg?impolicy=fcrop&w=1600&h=1066&q=medium' }}/>
            <Text style={styles.tr}>Bali</Text>
          </View>
          <View style={{ marginLeft: 10 }}>
            <Image style={styles.img2} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Alappuzha_Boat_Beauty_W.jpg' }}/>
            <Text style={styles.tr}>Kerala</Text>
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
      <View style={styles.td}>
      <Image style={styles.img3} source={{ uri: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900' }}/>
        <Text style={{ color: '#FFF', fontSize: 16, marginTop: 20 }}>Top Destination</Text>
        <Text style={{ color: '#FFF', fontSize: 17, marginTop: 5, fontWeight: 'bold' }}>Paris</Text>
      </View>
      </ScrollView>
    </View>  
    
  );
};

const styles = StyleSheet.create({
  all:{
    flex: 1,
    backgroundColor: 'black',
  },
  atas:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 70,
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 20,
  },
  img0:{
    height: 30,
    width: 30,
    marginTop: 20,
    borderRadius: 50,
  },
  sb:{
    height: 30,
    width: 240,
    marginTop: 20,
    borderRadius: 10,
  },
  tb:{
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 40,
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
    width: window.width,
    height: window.height / 2.5,
    borderRadius: 40,
    // borderBottomLeftRadius: 40,
    // borderBottomRightRadius: 40,
    backgroundColor: '#00000050',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img2:{
    height: 100,
    width: 120,
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

export default Hal1;