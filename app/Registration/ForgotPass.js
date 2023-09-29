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
//data from the backend
const OTP = {
    OTPcode: 1234,
};

const ForgetPass = () => {
    const [userOTP, setUserOTP] = useState(0);
    const [showLink, setShowLink] = useState(false);
    const handelOTP = () => {
        console.log(userOTP, OTP.OTPcode);
        if (Number(userOTP) === Number(OTP.OTPcode)) {
            console.log("confirmed");
            setShowLink(true);
        } else {
            Alert.alert("رمز غير صالح", "يرجى المحاولة مرة أخرى");
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.headerText}>تأكيد رقم الهاتف</Text>
                <Text style={styles.text}>
                    تم إرسال رسالة تحتوي على رمز إلى هاتفك، يرجى إدخال هذا الرمز
                    لتأكيد رقم هاتفك.
                </Text>
            </View>
            <View>
                <TextInput
                    style={styles.inputField}
                    keyboardType="numeric"
                    onChangeText={(text) => setUserOTP(text)}
                    value={userOTP}
                />
            </View>
            {showLink ? (
                <Redirect href={"/Registration/NewPass"} />
            ) : (
                <>
                    <TouchableOpacity style={styles.btn} onPress={handelOTP}>
                        <Text style={styles.btnText}>تأكيد الرقم</Text>
                    </TouchableOpacity>
                </>
            )}
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

export default ForgetPass;
