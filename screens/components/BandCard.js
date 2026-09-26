import {View, Text, StyleSheet, Image, Pressable, TextInput} from "react-native";
import { FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

const API_URL = "http://10.0.2.2:5245/"; 


function BandCard(){
    const [album, setAlbum] = useState([]);
    //const [err, setErr] = useState(true);
    
    useEffect(() => {
        fetch(API_URL + 'api/album')
        .then((res) => res.json())
        .then((data) => setAlbum(data))
        //.catch(() => setErr(`could not load ${API_URL}`)) //skapar render error? Fixa när UI fungerar
        //.finally(() => setLoading(false))
    })

    return(
        <View className="CardHolder">
            {album.map((a) => (
                <View className="Card" key={a.id}>
                    <View className="Article">
                    <Image src={`${API_URL}${a.imageURL}`}></Image>
                    <Text> {a.albumName} </Text>
                    <Text> {a.artist} </Text>
                    <Text>{(a.listeningStatus).toString()} </Text>
                    <Pressable onClick={() => changeListeningStatus(a.id)}> change </Pressable>
                    <Text onClick={((e) => e.stopPropagation())}>
                        <input 
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, a.id)}/>
                    </Text>
                    </View>
                </View> 
            ))} 
        </View>
    )
}

export default BandCard