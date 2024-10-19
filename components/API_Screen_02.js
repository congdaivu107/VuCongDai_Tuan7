import { StatusBar } from 'expo-status-bar';
import { Text, StyleSheet, View, Image, TextInput, Pressable, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

const Screen2 = ({ navigation, route }) => {
    const [users, setUser] = useState({});

    useEffect(() => {
        fetch("https://67142224690bf212c760c5a6.mockapi.io/users/users/" + route.params?.id)
            .then((response) => response.json())
            .then((json) => setUser(json));
    }, [users.todo]);

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 20, top: 50 }}>
                <Image source={require('../assets/Icon Button 11.png')} style={{ width: 45, height: 45 }} />
            </Pressable>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                <Image source={require('../assets/Rectangle.png')} style={{width:50, height:50, borderRadius: '50%', backgroundColor:"rgba(217, 203, 246, 1"}} />

                <View>
                    <Text style={styles.userName}>Hi {users.name}</Text>
                    <Text style={styles.userGreeting}>Have a great day ahead</Text>
                </View>
            </View>

            <View style={styles.searchBox}>
                <Image source={require('../assets/search.png')} style={styles.searchIcon} />
                <TextInput placeholder='Search' style={styles.searchInput} />
            </View>

            <ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <FlatList
                        data={users.todo}
                        renderItem={({ item }) => (
                            <View style={styles.todoItem}>
                                <Image source={require('../assets/Frame.png')} style={styles.todoIcon} />
                                <Text style={styles.todoText}>{item.content}</Text>
                                <Image source={require("../assets/Frame1.png")} style={styles.editIcon} />
                            </View>
                        )}
                    />
                </View>
            </ScrollView>

            <Pressable onPress={() => navigation.navigate('Screen3', { users })} style={styles.addButton}>
                <Image source={require('../assets/Vector 49.png')} style={styles.addIcon} />
            </Pressable>
        </View>
    );
};

export default Screen2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "rgba(217, 203, 246, 1)",
        marginRight: 10,
    },
    userName: {
        fontSize: 20,
        fontWeight: '700',
    },
    userGreeting: {
        fontSize: 16,
        color: 'gray',
        fontWeight: '600',
    },
    searchBox: {
        width: 350,
        height: 50,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        margin: 20,
        alignItems: 'center',
        borderColor: '#ccc',
    },
    searchIcon: {
        width: 30,
        height: 30,
        marginLeft: 5,
    },
    searchInput: {
        fontSize: 16,
        marginLeft: 10,
        width: 300,
        height: 40,
    },
    todoItem: {
        flexDirection: 'row',
        width: 300,
        height: 45,
        borderRadius: 20,
        backgroundColor: '#DEE1E6',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 10,
    },
    todoIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    todoText: {
        fontSize: 18,
        fontWeight: '450',
    },
    editIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    addButton: {
        width: 75,
        height: 75,
        backgroundColor: '#00BDD6',
        margin: 15,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIcon: {
        width: 30,
        height: 30,
    },
});
