import { View, Text, FlatList, Pressable, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Products({ navigation }: any) {
    const [products , setProducts] = useState<any>([]);

    // Load product info
    useEffect(() => 
    {
      axios.get('https://northwind.vercel.app/api/products')
        .then(res => 
          {
            setProducts(res.data);
          })
    }, []);

    const removeProduct = (id: any) => {
        const newList = products.filter((item: any) => item.id !== id);
        setProducts(newList);
    }

    return (
      <View style={{ padding: 10, flex: 1 }}>
          <Text style={{ fontSize:35, textAlign: "center" }}> PRODUCT LIST </Text>
          <FlatList
              data={products}
              renderItem={({ item }: any) => <Pressable onPress={() => navigation.navigate('ProductDetail', { item })}>
                <View style={[{flexDirection:'row'}]}>
                    <View style={[{ width: "8%", marginBottom: 3, marginTop: 3}]}>
                        <Button title='X' onPress={() => removeProduct(item.id)}></Button>
                    </View>
                    <View style={[{ width: "92%"}]}>
                        <Text style={{ fontSize: 20, margin: 6 }}>{item.name}</Text>
                    </View>
                </View>
                </Pressable>}
            />
      </View>
    );
  }

export default Products