import { View, Image,Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView } from 'react-native'

const DeviceCard = ({donation, showHospitalName}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{donation.deviceType}</Text>
                {showHospitalName ?(
                    <Text style={styles.subLinkText}>{donation.hospitalName}</Text>
                ): (
                    <>
                    <Text style={styles.subLinkText}>{donation.donnerLocation}</Text>
                    </>
                ) }
            </View>
            <View style={styles.linkImg}>
                    <Image source={donation.deviceImg} style={{width:84, height:100}}/>       
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
        backgroundColor:"#D9E7ED",
        marginVertical:9,
        elevation: 6,
        shadowColor: '#121212',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4, 
        shadowRadius: 10,
        paddingHorizontal:16,
        paddingVertical:10,
        width:300,
    },
    textContainer:{
        width:200,
        paddingHorizontal:8,
        flexDirection:"column",
        gap:8
    },
    linkImg:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        width:96,
        alignContent:"center",
        height:100,
        overflow:"hidden"
    },
    headerText:{
        fontWeight:"bold",
        fontSize:24,
        textAlign:"right"  
    },
    sectionText:{
        fontSize:20,
        textAlign:"right" 
    },
    text:{
        fontSize:16,
        textAlign:"right",
    },
    subLinkText:{
        fontSize:14,
        textAlign:"right",
        color:"#005F86",
    }, 
    });
export default DeviceCard