import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

const ProductDetail = ({ route } : any) => {
    let { item } = route.params;

    return (
        <View  style={{ flex: 1, justifyContent: "flex-start", alignItems: "flex-start", padding: 25}}>
            <Text style={{fontSize:20}}>{"Product ID"}: {item.id}</Text>
            <Text style={{fontSize:20}}>{"Name"}: {item.name}</Text>
            <Text style={{fontSize:20}}>{"Quantity per Unit"}: {item.quantityPerUnit}</Text>
            <Text style={{fontSize:20}}>{"Unit Price"}: {item.unitPrice}</Text>
            <Text style={{fontSize:20}}>{"Stock"}: {item.unitsInStock}</Text>
        </View>
    )
}

export default ProductDetail