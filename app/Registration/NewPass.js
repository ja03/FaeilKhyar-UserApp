import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView } from 'react-native'

const NewPass = () => {
    //data to be sent to the backend is the new password
    const [newPass, setNewPass] = useState('')
    const [confirmPass,setConfirmPass]= useState('')
    const [path, setPath] = useState('/Registration/NewPass')

    const checkPassword = (text, confimration)=>{
        // Check if the password meets the criteria
        if (text.length >= 8 && /[A-Z]/.test(text) && /^[A-Za-z_]+$/.test(text) && text=== confimration) {
            setNewPass(text);
            setPath('/Registration/LogIn')
        } else {
            Alert.alert(
            'Invalid Password',
            'Password must be at least 8 characters long, contain at least one uppercase letter, and can onlcontain letters and underscores.'
            );
        }
    }

    const handelNewPass = ()=>{
        checkPassword(newPass, confirmPass)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headerText}>إعادة ضبط كلمة المرور</Text>
            </View>
            <View>
                {/* createPass */}
                <Text style={styles.text}>انشئ كلمة مرور</Text>
                <TextInput 
                    style={styles.inputField}
                    secureTextEntry={true}
                    onChangeText={(text)=>setNewPass(text)}
                    value={newPass}
                />
                <Text style={{textAlign:"right", marginBottom:8}}>
                    يجب أن تحتوي كلمة المرور على الأقل على 8 أحرف.
                    يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل.
                    الرمز المسموح به الوحيد هو الشرطة السفلية ("_").       
                </Text>
                {/* confirmPass */}
                <Text style={styles.text}>تأكيد كلمة المرور</Text>
                <TextInput 
                    style={styles.inputField}
                    onChangeText={(text)=>setConfirmPass(text)}
                    secureTextEntry={true}
                    value={confirmPass}
                />
            </View>
            <TouchableOpacity style={styles.btn} onPress={handelNewPass}>
                <Link  href={path} style={styles.btnText}>تسجيل دخول</Link>
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

export default NewPass