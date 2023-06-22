import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React from 'react'

// New category form
const AddCategory = ( {navigation, route} : any) => {
    const [name, onChangeName] = React.useState('');
    const [description, onChangeStock] = React.useState('');

    // Return new category params
    const addProduct = () => 
    {
        navigation.navigate("Categories", { name, description });
    }

    return (
       <View  style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start", padding: 15, paddingTop: 50}}>
        <View style={[{flexDirection:'row'}]}>
            <Text style={[{fontSize:20, padding: 15}]}> Category Name: </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeName}
                placeholder="name field"
                value={name}
                maxLength={50}
            />
        </View>
        <View style={[{flexDirection:'row'}]}>
            <Text style={[{fontSize:20, padding: 15}]}> Description: </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeStock}
                value={description}
                placeholder="description field"
                maxLength={100}
            />
        </View>
        <View style={[{width: "100%", marginTop: 80}]}>
            <Button title="ADD" onPress={addProduct}></Button>
            <Text style={{fontSize:20, paddingTop: 30}}> * Unique category ID will be assigned after adding new category. </Text>
            <Text style={{fontSize:20}}> * Category name and description can not be empty! </Text>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1
    },
});

export default AddCategory