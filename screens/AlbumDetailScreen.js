import { View, Text, Image, StyleSheet } from "react-native";

function AlbumDetailScreen({ route }) {
    const { album } = route.params;
    const API_URL = "http://10.0.2.2:5245"

    return (
        <View>
            <Text>{album.albumName}</Text>
            <Text>{album.artist}</Text>
            <Image source={{ uri: `${API_URL}${album.imageURL}`}} style={styles.Image} />
            <Text>Lyssnat igenom Albumet: {album.listeningStatus.toString()}</Text>
        </View>
    );
}

export default AlbumDetailScreen;

const styles = StyleSheet.create({
    Image: {width: 250, height: 250}
})