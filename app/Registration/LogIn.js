import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { ScrollView } from "react-native";
import { Redirect } from "expo-router";
// this object will save the user log in information then send it to the backednd to check it
const LoginForm = {
    userMedId: 0,
    userPassWord: null,
};

const LogIn = () => {
    const [medId, setMedId] = useState(100200);
    const [password, setPassword] = useState("");
    const [path, setPath] = useState("/Registration/LogIn");
    const [showLink, setShowLink] = useState(false);
    const [logInData, setLogInData] = useState({
        userMedId: 0,
        userPassword: "",
    });
    const checkMedId = (text) => {
        //nine digit number
        if (/^\d{9}$/.test(text)) {
            // Check if the first 2 digits equal the last 2 digits
            if (text.slice(0, 2) === text.slice(-2)) {
                setMedId(text);
                return true;
            } else {
                Alert.alert(
                    "رقم MedID غير صالح",
                    "يجب أن تكون الرقمين الأولين والرقمين الأخيرين متطابقين."
                );
            }
        } else {
            Alert.alert(
                "رقم MedID غير صالح",
                "يجب أن يكون رقم MedID عبارة عن عدد صحيح مكون من 9 أرقام."
            );
        }
    };

    const checkPassword = (text) => {
        // Check if the password meets the criteria
        if (
            text.length >= 8 &&
            /[A-Z]/.test(text) &&
            /^[A-Za-z_]+$/.test(text)
        ) {
            setPassword(text);
            return true;
        } else {
            Alert.alert(
                "كلمة المرور غير صالحة",
                "يجب أن تكون كلمة المرور على الأقل 8 أحرف، تحتوي على حرف كبير واحد على الأقل، ويمكن أن تحتوي فقط على الأحرف والشرطات السفلية."
            );
        }
    };

    const handelLogin = async () => {
        const checkUserMedId = checkMedId(medId);
        const checkUserPass = checkPassword(password);
        if (checkUserMedId && checkUserPass) {
            setLogInData({
                userMedId: medId,
                userPassword: password,
            });
            setShowLink(true);
        }

        console.log(logInData);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}> اهلا بعودتك</Text>
                    <Link href={"/Registration/SignUp"}>
                        <Text style={styles.subLinkText}>
                            ليس لديك حساب؟ انشئ حساب الان
                        </Text>
                    </Link>
                </View>
                {/* Log in form */}
                <View>
                    <Text style={styles.text}>رقم الهوية الطبية</Text>
                    <TextInput
                        style={styles.inputField}
                        keyboardType="numeric"
                        onChangeText={(text) => setMedId(text)}
                        value={medId}
                    />
                    <Text
                        style={{
                            textAlign: "right",
                            marginBottom: 8,
                            fontSize: 12,
                        }}>
                        يجب أن يكون عبارة عن عدد مكون من 9 أرقام. يجب أن تتساوى
                        الرقمين الأولين والرقمين الأخيرين في الرقم الطبي
                    </Text>
                    <Text style={styles.text}>ادخل كلمة المرور</Text>
                    <TextInput
                        style={styles.inputField}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    <Text
                        style={{
                            textAlign: "right",
                            marginBottom: 8,
                            fontSize: 12,
                        }}>
                        يجب أن تحتوي كلمة المرور على الأقل على 8 أحرف. يجب أن
                        تحتوي كلمة المرور على حرف كبير واحد على الأقل. الرمز
                        المسموح به الوحيد هو الشرطة السفلية ("_").
                    </Text>
                    <Link
                        href={"/Registration/ForgotPass"}
                        style={styles.subLinkText}>
                        نسيت كلمة المرور؟
                    </Link>
                </View>
                {showLink ? (
                    <Redirect href={"/Home/HomeFeed"} />
                ) : (
                    <>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={handelLogin}>
                            <Text style={styles.btnText}>تسجيل دخول</Text>
                        </TouchableOpacity>
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingVertical: 48,
        paddingHorizontal: 24,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        gap: 32,
        textAlign: "right",
        backgroundColor: "#D9E7ED",
        paddingBottom: 128,
    },
    textContainer: {
        textAlign: "right",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 16,
        marginBottom: 24,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 32,
        textAlign: "right",
    },
    text: {
        fontSize: 18,
        textAlign: "right",
        paddingHorizontal: 8,
    },
    btn: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: "#005F86",
        marginHorizontal: 8,
        marginVertical: 8,
    },
    btnText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
    },
    subLinkText: {
        fontSize: 14,
        color: "#005F86",
        textAlign: "right",
        marginVertical: 8,
    },
    inputField: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: "#899BAB",
        borderRadius: 8,
        textAlign: "right",
        marginVertical: 8,
    },
});

export default LogIn;
