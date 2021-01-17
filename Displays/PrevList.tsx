import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { White, Black, LightGray } from '../Constants/Palette'

import Item from "./Item"

const renderItem = ({ item, output}) => (
    <Item input={item.input} output={item.output}/>
);


export default function PrevList({prev}) {
    const scrollViewRef = useRef()

    return (
    <View style={{height: "25%"}}>
        <ScrollView ref={scrollViewRef}
        onContentSizeChange={()=> scrollViewRef.current.scrollToEnd({animated: true})}>
        <FlatList
            data={prev}
            renderItem={renderItem}
        />
        </ScrollView>
        </View>
    );
}