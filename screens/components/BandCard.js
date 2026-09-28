import {View, Text, StyleSheet, Image, Pressable, TextInput} from "react-native";
import { FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

const API_URL = "http://10.0.2.2:5245/"; 


function BandCard(){
    const [album, setAlbum] = useState([]);
    const [err, setErr] = useState(true);
    
    useEffect(() => {
        fetch(API_URL + 'api/album')
        .then((res) => res.json())
        .then((data) => setAlbum(data))
        .catch(() => setErr(`could not load ${API_URL}`))
        //.finally(() => setLoading(false))r
    }, []);

    return(
        <View className="CardHolder">
            <FlatList data={album} keyExtractor={(album) => album.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                style={styles.Card}
                onPress={() => navigation.navigate()}>
                    <Text> {item.albumName} </Text>
                    <Text> {item.artist}</Text>
                    <Text> Lyssnat genom albumet: {item.listeningStatus.toString()} </Text>
                </TouchableOpacity>

            )}>
            </FlatList>
        </View>
    );
}

export default BandCard

const styles = StyleSheet.create({
    Card: {flex: 1, padding: 16, backgroundColor: "#dadada", borderWidth: 1, borderColor: "black"}
})