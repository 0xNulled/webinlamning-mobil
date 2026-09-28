import React from "react";
import { View, Text } from "react-native";

function AlbumDetailScreen({ route }) {
    const { album } = route.params;

    return (
        <View>
            <Text>Works</Text>
            <Text>{album.albumName}</Text>
            <Text>{album.artist}</Text>
        </View>
    );
}

export default AlbumDetailScreen;
