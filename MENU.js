import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {useState} from 'react'

export default function Details({name, totalCost, setTotalCost, price1, image,}) {
  
  const [price2, setPrice] = useState(0);
  function ADanItem(){
    setPrice(price1 + price2)
    setTotalCost(totalCost + price1);
  }
  function RemoveItem(){
    setTotalCost(totalCost - price2);
    setPrice(price1 - price2);
  }
  return (
    <View style={styles.contact}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text>TotalPrice: {price2}</Text>
        <Button title="Add an Item" onPress={ADanItem} />
        <Button title='Remove Item' onPress={RemoveItem}/>
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