import {
    View,
    Image,
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

const ProfileFeed = () => {
    // Data from the backend
    const user = {
        userFirstName: "Ahmad",
        userLastName: "Mahmoud",
        userMedId: 100200110,
        userPhoneNumber: +962791049417,
        userLocation: "Amman",
        userPassword: "Ahmad_sa",
    };
    const [medId, setMedId] = useState(user.userMedId);
    const [location, setLocation] = useState(user.userLocation);
    const [password, setPassword] = useState(user.userPassword);
    const [confirmPass, setConfirmPass] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(user.userPhoneNumber);
    const [firstName, setFirstName] = useState(user.userFirstName);
    const [lastName, setLastName] = useState(user.userLastName);
    const [editProfile, setEditProfile] = useState(false);
    const [newProfileData, setNewProfileData] = useState({});

    const [isFocused, setIsFocused] = useState(false);

    const checkMedId = (text) => {
        //nine gigit number
        if (/^\d{9}$/.test(text)) {
            // Check if the first 2 digits equal the last 2 digits
            text = text.toString();
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
    const inputFoucus = () => {
        setIsFocused(true);
    };

    const inputBlur = () => {
        setIsFocused(false);
    };

    const handelNewProfileData = () => {
        if (
            checkMedId(medId) &&
            checkPassword(password, confirmPass) &&
            checkPhoneNumber(phoneNumber) &&
            checkLocation(location)
        ) {
            setNewProfileData({
                userMedId: medId,
                userPhoneNumber: phoneNumber,
                userFirstName: firstName,
                userLastName: lastName,
                userLocation: location,
                userPassword: password,
            });
            setEditProfile(!editProfile);
            console.log(newProfileData);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            {editProfile ? (
                // Edit Information View
                <ScrollView>
                    <Text style={styles.headerText}>معلوماتي الشخصية</Text>
                    {/* Med ID*/}
                    <View style={{ marginTop: 16 }}>
                        <Text style={styles.inputText}>رقم الهوية الطبية</Text>
                        <View style={styles.input}>
                            <TextInput
                                editable={editProfile}
                                style={styles.inputField}
                                keyboardType="numeric"
                                onChangeText={(text) => setMedId(text)}
                                value={medId}
                                placeholder={medId.toString()}
                            />
                        </View>
                    </View>
                    {/* First Name*/}
                    <View style={{ marginVertical: 16 }}>
                        <Text style={styles.inputText}>الاسم الاول</Text>
                        <View style={styles.input}>
                            <TextInput
                                editable={editProfile}
                                value={firstName}
                                onChangeText={(text) => setFullName(text)}
                                style={styles.inputField}
                            />
                        </View>
                    </View>
                    {/* last Name*/}
                    <View style={{ marginBottom: 16 }}>
                        <Text style={styles.inputText}>الاسم الاخير</Text>
                        <View style={styles.input}>
                            <TextInput
                                editable={editProfile}
                                value={lastName}
                                onChangeText={(text) => setLastName(text)}
                                style={styles.inputField}
                            />
                        </View>
                    </View>
                    {/* Phone Number*/}
                    <View style={{ marginBottom: 16 }}>
                        <Text style={styles.inputText}>رقم الهاتف</Text>
                        <View style={styles.input}>
                            <TextInput
                                editable={editProfile}
                                value={phoneNumber}
                                keyboardType="numeric"
                                onChangeText={(text) => setPhoneNumber(text)}
                                style={styles.inputField}
                                placeholder={phoneNumber.toString()}
                            />
                        </View>
                    </View>
                    {/* Location Name */}
                    <View style={{ marginBottom: 16 }}>
                        <Text style={styles.inputText}>اسم محافظتك</Text>
                        <View style={styles.input}>
                            <TextInput
                                editable={editProfile}
                                value={location}
                                onChangeText={(text) => setLocation(text)}
                                style={styles.inputField}
                            />
                        </View>
                    </View>
                    {/* Password input */}
                    <View style={{ marginBottom: 16 }}>
                        <Text style={styles.inputText}>كلمة المرور</Text>
                        <View style={styles.input}>
                            <TextInput
                                secureTextEntry={true}
                                placeholder="********"
                                editable={editProfile}
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                style={styles.inputField}
                            />
                        </View>
                    </View>
                    {/* Confirm Pass */}
                    <View style={{ marginBottom: 16 }}>
                        <Text style={styles.inputText}>تأكيد كلمة المرور</Text>
                        <View style={styles.input}>
                            <TextInput
                                secureTextEntry={true}
                                placeholder="********"
                                editable={editProfile}
                                value={confirmPass}
                                onChangeText={(text) => setConfirmPass(text)}
                                onFocus={inputFoucus}
                                onBlur={inputBlur}
                                style={
                                    isFocused
                                        ? styles.inputFieldFocus
                                        : styles.inputField
                                }
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                        }}>
                        <TouchableOpacity
                            style={styles.btn2}
                            onPress={() => setEditProfile(!editProfile)}>
                            <Text style={styles.btn2Text}>إلغاء</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => {
                                handelNewProfileData();
                            }}>
                            <Text style={styles.btnText}>حفظ معلوماتي</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            ) : (
                <>
                    {/* Account Information View */}
                    <ScrollView>
                        <Text style={styles.headerText}>معلوماتي الشخصية</Text>
                        {/* Med ID*/}
                        <View style={{ marginTop: 16 }}>
                            <Text style={styles.inputText}>
                                رقم الهوية الطبية
                            </Text>
                            <View style={styles.input}>
                                <Text style={styles.inputField}>{medId}</Text>
                            </View>
                        </View>
                        {/* First Name*/}
                        <View style={{ marginVertical: 16 }}>
                            <Text style={styles.inputText}>الاسم الاول</Text>
                            <View style={styles.input}>
                                <TextInput
                                    editable={editProfile}
                                    value={firstName}
                                    onChange={(text) => setFullName(text)}
                                    style={styles.inputField}
                                />
                            </View>
                        </View>
                        {/* last Name*/}
                        <View style={{ marginBottom: 16 }}>
                            <Text style={styles.inputText}>الاسم الاخير</Text>
                            <View style={styles.input}>
                                <TextInput
                                    editable={editProfile}
                                    value={lastName}
                                    onChange={(text) => setFullName(text)}
                                    style={styles.inputField}
                                />
                            </View>
                        </View>
                        {/* Phone Number*/}
                        <View style={{ marginBottom: 16 }}>
                            <Text style={styles.inputText}>رقم الهاتف</Text>
                            <View style={styles.input}>
                                <Text style={styles.inputField}>
                                    {phoneNumber}
                                </Text>
                            </View>
                        </View>
                        {/* Location Name */}
                        <View style={{ marginBottom: 16 }}>
                            <Text style={styles.inputText}>اسم محافظتك</Text>
                            <View style={styles.input}>
                                <Text style={styles.inputField}>
                                    {location}
                                </Text>
                            </View>
                        </View>
                        {/* Password input */}
                        <View style={{ marginBottom: 16 }}>
                            <Text style={styles.inputText}>كلمة المرور</Text>
                            <View style={styles.input}>
                                <TextInput
                                    secureTextEntry={true}
                                    placeholder="********"
                                    editable={editProfile}
                                    value={password}
                                    onChange={(text) => setPassword(text)}
                                    style={styles.inputField}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => {
                                setEditProfile(!editProfile);
                            }}>
                            <Text style={styles.btnText}>تعديل معلوماتي</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        gap: 32,
        textAlign: "right",
        backgroundColor: "#fff",
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
        flex: 1,
        marginLeft: 2,
    },
    btn2: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        borderColor: "#005F86",
        borderWidth: 2,
        marginVertical: 8,
        flex: 1,
        marginRight: 2,
    },
    btnText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
    },
    btn2Text: {
        fontSize: 18,
        color: "#005F86",
        textAlign: "center",
    },
    subLinkText: {
        fontSize: 14,
        color: "#005F86",
    },
    inputField: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: "#C0CDDB",
        borderRadius: 8,
        textAlign: "right",
        marginVertical: 2,
    },
    inputText: {
        textAlign: "right",
        marginBottom: 4,
        fontSize: 15,
    },
    inputFieldFocus: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        fontSize: 16,
        backgroundColor: "#899BAB",
        borderRadius: 8,
        textAlign: "right",
        marginVertical: 8,
        marginBottom: 128,
    },
});

export default ProfileFeed;
