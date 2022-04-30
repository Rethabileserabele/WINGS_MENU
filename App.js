import { ScrollView, StyleSheet, Text, View,Image } from 'react-native';
import {useState} from 'react';
import Details from './MENU.js';

export default function App() {
  const [totalCost, setTotalCost] = useState(0);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/logo.jpeg')} />
      <Text style={{fontSize: 19}}>Wings food menu</Text>
      <Text style={{fontSize: 24, fontWeight:'bold', marginTop:20}}>The Total Cost is {totalCost}</Text>
      <ScrollView style={styles.scrollView}>
      <Details name="Lunch"  totalCost={totalCost} setTotalCost={setTotalCost} price1={15} image={require('./assets/downloadfile-1.jpg')}/>
      <Details name="burgar"  totalCost={totalCost} setTotalCost={setTotalCost}  price1={10} image={require('./assets/downloadfile-2.jpg')}/>
      <Details name="meat"  totalCost={totalCost} setTotalCost={setTotalCost} price1={20} image={require('./assets/downloadfile.jpg')}/>
      <Details name="Snaks"  totalCost={totalCost} setTotalCost={setTotalCost}  price1={7} image={require('./assets/downloadfile-5.jpg')}/>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    marginHorizontal: 2,
    marginVertical: 2
  },
  image: {
    marginTop:20,
    height: 100,
    width: 150,
  },
});