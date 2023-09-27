import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView } from 'react-native'

// this object will save the user log in information then send it to the backednd to check it 
const LoginForm={
    userMedId: 0,
    userPassWord: null
}

const LogIn = () => {
    const [medId, setMedId] = useState(100200)
    const [password, setPassword] = useState("nopass")
    const [path, setPath] = useState('/Registration/LogIn')
    const [logInData, setLogInData] = useState({
        userMedId:0,
        userPassword:''
    })
    const checkMedId = (text)=>{
        //nine gigit number
        if(/^\d{9}$/.test(text)){
            // Check if the first 2 digits equal the last 2 digits
            if(text.slice(0,2) === text.slice(-2)){
                setMedId(text)
                return true;
            }else{
                Alert.alert('Invalid MedID', 'The first and last 2 digits must be the same.')
            }
        }else{
            Alert.alert('Invalid MedID', 'MedID must be a 9-digit integer.')
        }
    }

    const checkPassword = (text) => {
        // Check if the password meets the criteria
        if (text.length >= 8 && /[A-Z]/.test(text) && /^[A-Za-z_]+$/.test(text)) {
            setPassword(text);
            return true;
        } else {
            Alert.alert(
            'Invalid Password',
            'Password must be at least 8 characters long, contain at least one uppercase letter, and can only contain letters and underscores.'
            );
        }
    };
    
    const handelLogin = async () => {
        if(checkMedId(medId) &&checkPassword(password)){
            setLogInData({
                userMedId: medId,
                userPassword: password
            })    
            setPath('/Home/HomeFeed');
            console.log('Path changed');
        }

        console.log(logInData);
        
    };
    return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.textContainer}>
            <Text style={styles.headerText}> اهلا بعودتك</Text>
            <Link href={'/Registration/SignUp'}>
                <Text style={styles.subLinkText}>ليس لديك حساب؟ انشئ حساب الان</Text>
            </Link>
        </View>
    {/* Log in form */}
    <View>
        <Text style={styles.text}>رقم الهوية الطبية</Text>
        <TextInput 
            style={styles.inputField}
            keyboardType="numeric"
            onChangeText={(text)=>setMedId(text)}
            value={medId}
        />
        <Text style={{textAlign:"right", marginBottom:8, fontSize:12}}>
        يجب أن يكون عبارة عن عدد مكون من 9 أرقام.
        يجب أن تتساوى الرقمين الأولين والرقمين الأخيرين في الرقم الطبي  
        </Text>
        <Text style={styles.text}>ادخل كلمة المرور</Text>
        <TextInput
            style={styles.inputField}
            secureTextEntry={true}
            onChangeText={(text)=>setPassword(text)}
            value={password} 
        />
        <Text style={{textAlign:"right", marginBottom:8, fontSize:12}}>
        يجب أن تحتوي كلمة المرور على الأقل على 8 أحرف.
        يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل.
        الرمز المسموح به الوحيد هو الشرطة السفلية ("_").       
        </Text>
        <Link href={'/Registration/ForgotPass'} style={styles.subLinkText}>نسيت كلمة المرور؟</Link>
    </View>
    <TouchableOpacity style={styles.btn} onPress={handelLogin}>
        <Link  href={path} style={styles.btnText}>تسجيل دخول</Link>
    </TouchableOpacity>
    </ScrollView>
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

export default LogIn