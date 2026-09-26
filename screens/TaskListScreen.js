import {View, Text, StyleSheet} from "react-native";
import { FlatList, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";

const API_URL = "http://10.0.2.2:5000/api/tasks"; //gateway ip :p
//const API_URL = "http://localhost:5000/api/tasks";

/*
const tasks = [
    {id: 1, text: "Läsa Kursmatrial", done: true},
    {id: 2, text: "öva på react native", done: false},
    {id: 3, text: "Testa på react native", done: false}
];*/

function TaskListScreen({ navigation }){

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setTasks(data))
        .catch(() => setError("något gick fel"))
        .finally(() => setLoading(false));
    });

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                uppgifter
            </Text>
            <FlatList 
            data={tasks} //hämta data från objekt
            keyExtractor={(item) => item.id.toString()} //hämta unikt värde (key)
            renderItem={({ item }) => (
                <TouchableOpacity
                style={styles.taskItem}
                onPress={() => navigation.navigate("TaskDetail", { task: item })}
                >
                    <Text styles={styles.taskText}>{item.text}</Text>
                </TouchableOpacity>
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#fff" },
    header: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
    taskItem: {
        padding: 12,
        margin: 8,
        backgroundColor: "#f0f0f0",
        borderRadius: 8
    },
    taskText: {
        fontSize: 16
    }
})

export default TaskListScreen;