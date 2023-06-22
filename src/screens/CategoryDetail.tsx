import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const CategoryDetail = ({ route } : any) => {
    let { item } = route.params;

    return (
        <View  style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start", padding: 25}}>
            <Text style={{fontSize:20}}>{"Category ID"}: {item.id}</Text>
            <Text style={{fontSize:20}}>{"Name"}: {item.name}</Text>
            <Text style={{fontSize:20}}>{"Description"}: {item.description}</Text>
        </View>
    )
}

export default CategoryDetail