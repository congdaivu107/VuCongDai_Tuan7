import React from 'react';
import { StyleSheet, Text, View, Image,Pressable, TextInput } from 'react-native-web';
import {NavigationAction} from '@react-navigation/native';
import {creatNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';

export default function Screen1({navigation}){
    return(
        <View style={StyleSheet.container}>
            <Image source={require('../assets/Image 95.png')} style={{width: 250, height: 250, marginLeft:70}}></Image>
            <Text style={{fontSize: 20, color: '#8353E2', justifyContent:'center', alignItems:'center',marginLeft:120, fontWeight: '700'}}>MANAGE YOUR {'\n'}        TASK</Text>
      

            <View style={{flexDirection: 'row', width:350, height:50, borderWidth:1, borderRadius:5, margin:10}}>
                <Image source={require('../assets/email.png')} style={{ width:30, height:30, marginTop: 10, marginLeft: 5}}></Image>
                <TextInput placeholder='Enter your name' style={{width:320, height: 30, fontSize: 18, marginLeft: 10, marginTop:10, borderColor: 'gray'}}> 

                </TextInput>
            </View>
            <Pressable onPress={()=>navigation.navigate('Screen2',{id:1})} 
                style={{width:200, height:45, backgroundColor:'#00BDD6', margin:80, borderRadius: 10, flexDirection:'row'}}
            >
                <Text style={{fontSize:18, fontWeight:'600', color: 'white', marginTop:10, marginLeft:30}}>GET STARTED</Text>
                <Image source={require('../assets/muiten.png')} style={{width: 20, height: 15, marginLeft: 14, marginTop: 15}}></Image>
            </Pressable>
        </View>
    );
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
