import { View, Image,Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'

const PrevDonations = () => {
    const local = useLocalSearchParams()
    return (
    <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.imgContainer}>
                    <Image source={local.deviceImg}/>
                </View>
                <View>

                    {/* Device Info */}
                    <Text style={styles.headerText}>معلومات عن الجهاز</Text>
                    <Text style={styles.Text}>نوع الجهاز: {local.deviceType}</Text>
                    <Text style={styles.Text}>موديل الجهاز: {local.deviceModel}</Text>
                    <Text style={styles.Text}>حجم الجهاز: {local.deviceSize}</Text>
                    <Text style={styles.Text}>غرض الاستخدام: {local.causeOfUse}</Text>
                    
                    {/* PrevUser Info */}
                    <Text style={styles.headerText}>معلومات عن المستخدم السابق</Text>
                    <Text style={styles.Text}>عمر المستخدم السابق: {local.prevUserAge}</Text>
                    <Text style={styles.Text}>وزن المستخدم السابق: {local.prevUserWeight}</Text>
                    <Text style={styles.Text}>مدة الاستخدام: {local.durationOfUse}</Text>

                    {/* Donner Info */}
                    <Text style={styles.headerText}>معلومات عن فاعل الخير</Text>
                    <Text style={styles.Text}>رقم الهاتف: {local.donnerPhoneNumber}</Text>
                    <Text style={styles.Text}>مكان السكن: {local.donnerLocation}</Text>
                </View>

            </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:24
    },
    imgContainer:{
        borderBottomWidth: 3,
        borderBottomColor: 'gray',
        paddingBottom: 8,
        borderRadius:4,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginTop:12 
    },
    headerText:{
        textAlign:'right',
        fontSize:24,
        fontWeight:'bold',
        marginTop:24
        // marginHorizontal:24
    },
    Text:{
        textAlign:"right",
        fontSize:16,
        marginTop:8,
    },
    btnView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:32
    },
    btn1:{
        borderWidth:1.5,
        marginHorizontal:32,
        borderRadius:8,
        borderColor:"#005F86",
        paddingHorizontal:16,
        paddingVertical:10,
    },
    btn2:{
        fontSize:18,
        borderWidth:1.5,
        marginHorizontal:32,
        borderRadius:8,
        borderColor:"#005F86",
        paddingHorizontal:16,
        paddingVertical:10,
        backgroundColor:"#005F86"
    }
});
export default PrevDonations