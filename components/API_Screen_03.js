import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import React from 'react';

const Screen3 = ({ navigation, route }) => {
    const { users } = route?.params;

    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.goBack()} style={{ position: 'absolute', left: 20, top: 50 }}>
                <Image source={require('../assets/Icon Button 11.png')} style={{ width: 45, height: 45 }} />
            </Pressable>

            <View style={{ flexDirection: 'row', marginTop: -15, marginLeft: 10 }}>
            <Image source={require('../assets/Rectangle.png')} style={{width:50, height:50, borderRadius: '50%', backgroundColor:"rgba(217, 203, 246, 1"}} />
            <View>
                    <Text style={styles.userName}>Hi {users.name}</Text>
                    <Text style={styles.userGreeting}>Have a great day ahead</Text>
                </View>
            </View>

            <View>
                <Text style={styles.addJobTitle}>ADD YOUR JOB</Text>
            </View>

            <View style={styles.inputContainer}>
                <Image source={require('../assets/list.png')} style={styles.inputIcon} />
                <TextInput placeholder='Input your job' style={styles.textInput} />
            </View>

            <View style={styles.finishButtonContainer}>
                <Pressable style={styles.finishButton}>
                    <Text style={styles.finishButtonText}>FINISH</Text>
                    <Image source={require('../assets/muiten.png')} style={styles.arrowIcon} />
                </Pressable>
            </View>

            <View>
                <Image source={require('../assets/Image 95.png')} style={styles.decorativeImage} />
            </View>
        </View>
    );
};

export default Screen3;

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
        fontWeight: "700",
    },
    userGreeting: {
        fontSize: 16,
        color: 'gray',
        fontWeight: "600",
    },
    addJobTitle: {
        fontSize: 35,
        fontWeight: '650',
        margin: 25,
    },
    inputContainer: {
        width: 350,
        height: 50,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 5,
        margin: 30,
        alignItems: 'center',
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 5,
        margin: 10,
    },
    textInput: {
        fontSize: 16,
        marginLeft: 5,
        width: 325,
        height: 40,
    },
    finishButtonContainer: {
        width: 150,
        height: 40,
        backgroundColor: '#00BDD6',
        borderRadius: 5,
        margin: 15,
    },
    finishButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    finishButtonText: {
        fontSize: 18,
        fontWeight: '450',
        color: 'white',
        marginRight: 10,
    },
    arrowIcon: {
        width: 17,
        height: 12,
    },
    decorativeImage: {
        width: 190,
        height: 170,
        margin: 50,
    },
});
