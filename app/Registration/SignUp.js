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

// object to be filled and sent to the backend
// const SignUpForm = {
//         userMedId:0,
//         userPhoneNumber:0,
//         userFirstName:null,
//         userLastName:null,
//         userLocation:null,
//         userPassword:null
// }

const jordanianGovernorates = [
    "عمان",
    "اربد",
    "الزرقاء",
    "مادبا",
    "جرش",
    "المفرق",
    "الكرك",
    "الطفيلة",
    "معان",
    "العقبة",
    "amman",
    "irbid",
    "zarqa",
    "madaba",
    "jerash",
    "mafraq",
    "karak",
    "tafilah",
    "ma'an",
    "aqaba",
];

const SignUp = () => {
    const [medId, setMedId] = useState(0);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [showLink, setShowLink] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isFocused, setIsFocused] = useState(false)
    const [signUpData, setSignUpData] = useState({
        userMedId: 0,
        userPhoneNumber: "",
        userFirstName: "",
        userLastName: "",
        userLocation: "",
        userPassword: "",
    });
    const [path, setPath] = useState("/Registration/SignUp");

    const inputFoucus=()=>{
        setIsFocused(true)
    }

    const inputBlur = ()=>{
        setIsFocused(false)
    }

    const checkMedId = (text) => {
        //nine gigit number
        if (/^\d{9}$/.test(text)) {
            // Check if the first 2 digits equal the last 2 digits
            if (text.slice(0, 2) === text.slice(-2)) {
                setMedId(text);
                return true;
            } else {
                Alert.alert(
                    "Invalid MedID",
                    "The first and last 2 digits must be the same."
                );
            }
        } else {
            Alert.alert("Invalid MedID", "MedID must be a 9-digit integer.");
        }
    };
    const checkPassword = (text, confimration) => {
        // Check if the password meets the criteria
        if (
            text.length >= 8 &&
            /[A-Z]/.test(text) &&
            /^[A-Za-z_]+$/.test(text) &&
            text === confimration
        ) {
            setPassword(text);
            return true;
        } else {
            Alert.alert(
                "Invalid Password",
                "Password must be at least 8 characters long, contain at least one uppercase letter, and can only contain letters and underscores."
            );
        }
    };
    const checkPhoneNumber = (text) => {
        if (/^\d{10}$/.test(text) && text.slice(0, 2) === "07") {
            setPhoneNumber(text);
            return true;
        } else {
            Alert.alert("Invalid Phone Number", "Please try one more time");
        }
    };
    const checkLocation = (text) => {
        let lowerCaseText = text.toLowerCase();
        if (jordanianGovernorates.includes(lowerCaseText)) {
            setLocation(text);
            return true;
        } else {
            Alert.alert("Location not in jordan");
        }
    };

    const handelSignUp = () => {
        const checkUserMedId = checkMedId(medId);
        const checkUserPass = checkPassword(password, confirmPassword);
        const checkUserPhoneNumber = checkPhoneNumber(phoneNumber);
        const checkUserLocation = checkLocation(location);
        if (
            checkUserMedId &&
            checkUserLocation &&
            checkUserPhoneNumber &&
            checkUserPass
        ) {
            setSignUpData({
                userMedId: medId,
                userPhoneNumber: phoneNumber,
                userFirstName: firstName,
                userLastName: lastName,
                userLocation: location,
                userPassword: password,
            });
            setShowLink(true);
        }
        console.log(signUpData);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>
                        {" "}
                        انشئ حسابك و انضم إلينا
                    </Text>
                    <Link href={"/Registration/LogIn"}>
                        <Text style={styles.subLinkText}>
                            لديك حساب؟ تسجيل دخول
                        </Text>
                    </Link>
                </View>
                {/* SignUp form */}
                <View>
                    {/* Phone Input */}
                    <Text style={styles.text}>رقم الهاتف</Text>
                    <TextInput
                        style={styles.inputField}
                        keyboardType="numeric"
                        onChangeText={(text) => setPhoneNumber(text)}
                        value={phoneNumber}
                    />
                    {/* MedId */}
                    <Text style={styles.text}>رقم الهوية الطبية</Text>
                    <TextInput
                        style={styles.inputField}
                        keyboardType="numeric"
                        onChangeText={(text) => setMedId(text)}
                        value={medId}
                    />
                    <Text style={{ textAlign: "right", marginBottom: 8 }}>
                        يجب أن يكون عبارة عن عدد مكون من 9 أرقام. يجب أن تتساوى
                        الرقمين الأولين والرقمين الأخيرين في الرقم الطبي
                    </Text>
                    {/* FirstName */}
                    <Text style={styles.text}>الاسم الاول</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(text) => setFirstName(text)}
                        value={firstName}
                    />
                    {/* LastName */}
                    <Text style={styles.text}>اسم العائلة</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(text) => setLastName(text)}
                        value={lastName}
                    />
                    {/* Location */}
                    <Text style={styles.text}>اسم محافظتك؟</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={(text) => setLocation(text)}
                        value={location}
                    />
                    {/* createPass */}
                    <Text style={styles.text}>انشئ كلمة مرور</Text>
                    <TextInput
                        style={styles.inputField}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                    <Text style={{ textAlign: "right", marginBottom: 8 }}>
                        يجب أن تحتوي كلمة المرور على الأقل على 8 أحرف. يجب أن
                        تحتوي كلمة المرور على حرف كبير واحد على الأقل. الرمز
                        المسموح به الوحيد هو الشرطة السفلية ("_").
                    </Text>
                    {/* confirmPass */}
                    <Text style={styles.text}>تأكيد كلمة المرور</Text>
                    <TextInput
                        onFocus={inputFoucus}
                        onBlur={inputBlur}                        
                        style={isFocused?styles.inputFieldFocus: styles.inputField}
                        onChangeText={(text) => setConfirmPassword(text)}
                        secureTextEntry={true}
                        value={confirmPassword}
                    />
                </View>
                {showLink ? (
                    <TouchableOpacity style={styles.btn}>
                        <Link
                            href={"/Registration/ConfirmAcc"}
                            style={styles.btnText}>
                            انشئ حسابي
                        </Link>
                    </TouchableOpacity>
                ) : (
                    <>
                        <TouchableOpacity style={styles.btn} onPress={handelSignUp}>
                            <Text
                                style={styles.btnText}>
                                انشئ حسابي
                            </Text>
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
        paddingBottom: 64,
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
        marginTop: 8,
    },
    btn: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: "#005F86",
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
        textAlign:"right"
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
    inputFieldFocus: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: "#899BAB",
        borderRadius: 8,
        textAlign: "right",
        marginVertical: 8,
        marginBottom:128
    },
});

export default SignUp;
