import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Link } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

/*
                notificationId: item.id,
                notificationDeviceType: item.deviceType,
                notificationDeviceImg: item.deviceImg,
                notificationHospitalMessage:item.hospitalMessage,
                notificationHospitalQRcode: item.hospitalQRcode
*/
const NotificationDets = () => {
    const local = useLocalSearchParams()
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.QRimg}>
                    <Image source={local.notificationHospitalQRcode}/>
                </View>
            <View>
                <Text style={styles.Text}>
                    {local.notificationHospitalMessage}
                </Text>
                <View style={styles.imgContainer}>
                    <Image source={local.notificationDeviceImg}/>
                </View>    
            </View>
        </ScrollView>
    </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:24,
        display:"flex",
        flexDirection:"column",
        flex:1,
        paddingBottom:72,
        textAlign:"right",
        backgroundColor:"#FFF",
    },
    imgContainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:12 
    },
    Text:{
        textAlign:"right",
        fontSize:16,
        marginTop:8,
    },
    QRimg:{
        borderBottomWidth: 3,
        borderBottomColor: 'gray',
        paddingBottom: 8,
        borderRadius:4,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:12
    }
});

export default NotificationDets