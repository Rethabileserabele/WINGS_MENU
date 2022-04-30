import { StyleSheet, Text, View, Button } from 'react-native';
import {useState} from 'react';
import Contact from './MENU';

export default function App() {
  const [totalAge, setTotalAge] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24}}>The total age is {totalAge}</Text>
      <Contact name="Thabo Lebese" phoneNumber="59702211" totalAge={totalAge} setTotalAge={setTotalAge} />
      <Contact name="Liteboh Neos" phoneNumber="62803322" totalAge={totalAge} setTotalAge={setTotalAge} />
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
});
