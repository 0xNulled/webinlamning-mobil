import {View, Text, StyleSheet} from "react-native";
import { FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import BandCard from "./components/BandCard"

function BandList({ navigation }){

    return(
        <View className="MainBox">
            <BandCard />
        </View>
    )
}

export default BandList