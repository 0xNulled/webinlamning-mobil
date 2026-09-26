import {View, Text, StyleSheet} from "react-native"

function TaskDetailScreen({ route }) {
    const { task } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {task.text}
            </Text>
            <Text style={task.done ? styles.statusOk : styles.statusNo}>
                {task.done ? "Klar" : "Inte klar än"}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, backgroundColor: "#fff"},
    title: { fontSize: 20, fontWeight: "bold", backgroundColor: "#fff"},
    statusOk: { fontSize: 16, color: "#68e82c"},
    statusNo: { fontSize: 16, color: "#ca1313"}
})

export default TaskDetailScreen;