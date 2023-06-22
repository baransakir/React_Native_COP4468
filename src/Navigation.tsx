import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductDetail from "./screens/ProductDetail";
import Products from "./screens/Products";
import Categories from "./screens/Categories";
import Orders from "./screens/Orders";
import CategoryDetail from "./screens/CategoryDetail";
import AddCategory from "./screens/AddCategory";

// Bottom Tabs - Products, Categories, Orders
const BottomTab = createBottomTabNavigator();

const BottomTabGroup = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="ProductStackGroup" component={ProductStackGroup} 
        options={{headerShown: false, tabBarLabel: "PRODUCTS"}}/>        
      <BottomTab.Screen name="CategorieStackGroup" component={CategoriesStackGroup} 
        options={{headerShown: false, tabBarLabel: "CATEGORIES"}}/>
      <BottomTab.Screen name="Orders" component={Orders} 
        options={{tabBarLabel: "ORDERS"}}/>
    </BottomTab.Navigator>
  )
}

// Category Stack - Categories, CategoryDetail, AddCategory
const CategoryStack = createNativeStackNavigator();

const CategoriesStackGroup = () => {
  return (
    <CategoryStack.Navigator>
      <BottomTab.Screen name="Categories" component={Categories}/>
      <CategoryStack.Screen name="CategoryDetail" component={CategoryDetail}/>
      <CategoryStack.Screen name="AddCategory" component={AddCategory}/>
    </CategoryStack.Navigator>
  )
}

// Product Stack - Products, ProductDetail
const ProductStack = createNativeStackNavigator();

const ProductStackGroup = () => {
  return (
    <ProductStack.Navigator>
      <BottomTab.Screen name="Products" component={Products}/>
      <ProductStack.Screen name="ProductDetail" component={ProductDetail}/>
    </ProductStack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <BottomTabGroup />
    </NavigationContainer>
  );
}

export default Navigation