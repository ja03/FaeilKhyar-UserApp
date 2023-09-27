import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps'

//data from the backend
const OTP={
    OTPcode:1234
}

const ConfirmAcc = () => {
    const [path, setPath] = useState('/Registration/ConfirmAcc')
    const [userOTP, setUserOTP]= useState(0)

    const handelOTP = ()=>{
        console.log(userOTP, OTP.OTPcode)
        if(Number(userOTP) === Number(OTP.OTPcode)){
            console.log("confirmed")
            setPath('/Home/HomeFeed')
        }else{
            Alert.alert('Invalid code', 'please try again')
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headerText}>تأكيد رقم الهاتف</Text>
                <Text style={styles.text}>تم إرسال رسالة تحتوي على رمز  إلى هاتفك، يرجى إدخال هذا الرمز لتأكيد رقم هاتفك.</Text>
            </View>
            <View>
                <TextInput 
                    style={styles.inputField}
                    keyboardType="numeric"
                    onChangeText={(text)=>setUserOTP(text)}
                    value={userOTP}
                />
                <Text style={styles.subLinkText}>
                لم يصلني الرمز؟ ارسله مرة اخرى   
                </Text> 
            </View>
            <TouchableOpacity style={styles.btn} onPress={handelOTP}>
                <Link 
                    href={path} 
                    style={styles.btnText}>تأكيد الرقم</Link>        
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingVertical:48,
        paddingHorizontal:24,
        display:"flex",
        flexDirection:"column",
        flex:1,
        gap:32, 
        textAlign:"right",
        backgroundColor:"#D9E7ED",
        paddingBottom:128
    },
    textContainer:{
        textAlign:"right", 
        flexDirection:"column",
        alignItems:"flex-end", 
        gap:16, 
        marginBottom:24
    },
    headerText:{
        fontWeight:"bold",
        fontSize:32,
        textAlign:"right"
    },
    text:{
        fontSize:18,
        textAlign:"right",
        paddingHorizontal:8
    },
    btn:{
        paddingHorizontal:16,
        paddingVertical:10,
        borderRadius:8,
        backgroundColor:"#005F86",
        marginHorizontal:8,
        marginVertical:8
    },
    btnText:{
        fontSize:18,
        color:"#fff",
        textAlign:"center"
    },
    subLinkText:{
        fontSize:14,
        color:"#005F86",
    }, 
    inputField:{
        paddingHorizontal:16,
        paddingVertical:10,
        fontSize:16,
        backgroundColor:"#899BAB",
        borderRadius:8,
        textAlign:"right",
        marginVertical:8
    }
});

export default ConfirmAcc