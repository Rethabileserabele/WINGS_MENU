import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {useState} from 'react'

export default function Contact({name, phoneNumber, totalAge, setTotalAge}) {
  const [age, setAge] = useState(0);
  function makeMeOlder(){
    setAge(age + 1)
    setTotalAge(totalAge + 1);
  }
  return (
    <View style={styles.contact}>
      <Image style={styles.image} source={require('./assets/avatar.png')} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text>Age: {age}</Text>
        <Text>{phoneNumber}</Text>
        <Button title="Grow Me" onPress={makeMeOlder} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contact: {
    margin: 20,
    padding: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
  },
  details: {
    marginLeft: 20,
  },
  image: {
    height: 100,
    width: 100,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})