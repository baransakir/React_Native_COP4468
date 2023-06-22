import { View, Text, FlatList, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Categories = ({ navigation, route } : any) => {
    const [categories , setCategories] = useState<any>([]);

    // Load category info
    useEffect(() => 
    {
      axios.get('https://northwind.vercel.app/api/categories')
        .then(res => 
          {
            setCategories(res.data);
          })
    }, []);

    const removeProduct = (id: any) => {
        const newList = categories.filter((item: any) => item.id !== id);
        setCategories(newList);
    }

    // Get maximum ID for creating unique ID
    const getMaxId = () => {
        var IDs = categories && categories.map((object: any) => {return object.id;});

        const max = Math.max(...IDs);
        return max;
    }

    const updateCategory = () => {
        try {
            let { name, description } = route.params;
            if (name != "" && description != "")
            {          
                var maxID = getMaxId();                      
                setCategories([{id: maxID + 1, name: name, description: description}, ...categories,]);
            }
            else    // missing parameter, try again
            {
                navigation.navigate('AddCategory');
            }
        } catch (error) {   // first attempt, direct to category form page
            navigation.navigate('AddCategory');
         }
    }

  return (
      <View style={{ padding: 10, flex: 1 }}>
          <Text style={{ fontSize:35, textAlign: "center" }}> CATEGORY LIST </Text>
          <FlatList
              data={categories}
              renderItem={({ item }: any) => <Pressable onPress={() => navigation.navigate('CategoryDetail', { item })}>
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
            
            <Text style={{ fontSize:15, textAlign: "center" }}> * After filling the form, click "UPDATE LIST" to add new category and refresh the category list. </Text>
            <View style={[{flexDirection:'row'}]}>
                <View style={{flex: 1, padding: 10}}>
                    <Button title='OPEN CATEGORY FORM' onPress={() => navigation.navigate('AddCategory') }></Button>
                </View>
                <View style={{flex: 1, padding: 10}}>
                    <Button title='UPDATE LIST' onPress={updateCategory}></Button>
                </View>
            </View>            
      </View>
  )
}

export default Categories