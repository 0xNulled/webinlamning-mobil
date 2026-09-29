import {View, Text, StyleSheet, Image} from "react-native";
import { FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

const API_URL = "http://10.0.2.2:5245"; 


function AlbumListScreen({ navigation }){
    const [album, setAlbum] = useState([]);
    const [err, setErr] = useState(true);
    
    useEffect(() => {
        fetch(API_URL + '/api/album')
        .then((res) => res.json())
        .then((data) => setAlbum(data))
        .catch(() => setErr(`could not load ${API_URL}`))
        //.finally(() => setLoading(false))
    }, []);

    return(
        <View className="CardHolder">
            <FlatList data={album} keyExtractor={(album) => album.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                style={item.listeningStatus ? styles.CardListened : styles.CardNotListened}
                onPress={() => navigation.navigate("AlbumView", { album: item })}>
                    <Text> {item.albumName} </Text>
                    <Text> {item.artist}</Text>
                    <Image source={{ uri: `${API_URL}${item.imageURL}`}} style={{width: 100, height: 100}}/>
                    {/*<Text> Lyssnat genom albumet: {item.listeningStatus.toString()} </Text> */}
                </TouchableOpacity>

            )}>
            </FlatList>
        </View>
    );
}

export default AlbumListScreen

const styles = StyleSheet.create({
    CardListened: {flex: 1, padding: 16, backgroundColor: "#7ef58c", borderWidth: 1, borderColor: "black"},
    CardNotListened: {flex: 1, padding: 16, backgroundColor: "#f68888", borderWidth: 1, borderColor: "black"},
    Image: {width: 100, height: 100}
})