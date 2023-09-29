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
import { useLocalSearchParams } from "expo-router";
import { Redirect } from "expo-router";

const SearchedDevice = () => {
    const local = useLocalSearchParams();
    const [userMedId, setUserMedId] = useState(0);
    const [showLink, setShowLink] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const checkMedId = (text) => {
        //nine gigit number
        if (/^\d{9}$/.test(text)) {
            // Check if the first 2 digits equal the last 2 digits
            if (text.slice(0, 2) === text.slice(-2)) {
                setUserMedId(text);
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
    const handelRequest = () => {
        const userMEdId = checkMedId(userMedId);
        if (userMedId) {
            setShowLink(true);
        }
    };
    const inputFoucus = () => {
        setIsFocused(true);
    };

    const inputBlur = () => {
        setIsFocused(false);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.imgContainer}>
                    <Image source={local.searchImg} />
                </View>
                <View>
                    {/* Device Info */}
                    <Text style={styles.headerText}>معلومات عن الجهاز</Text>
                    <Text style={styles.Text}>
                        نوع الجهاز: {local.searchType}
                    </Text>
                    <Text style={styles.Text}>
                        موديل الجهاز: {local.searchModel}
                    </Text>
                    <Text style={styles.Text}>
                        حجم الجهاز: {local.searchSize}
                    </Text>

                    {/* Hospital info */}
                    <Text style={styles.headerText}>تواصل مع المستشفى</Text>
                    <Text style={styles.Text}>
                        رقم الهاتف: {local.searchHospitalPhoneNumber}
                    </Text>
                </View>
                <View
                    style={{
                        borderTopWidth: 2,
                        borderColor: "gray",
                        borderRadius: 2,
                        marginTop: 24,
                    }}>
                    <Text style={styles.headerText}>طلب الجهاز</Text>
                    <Text style={styles.Text}>
                        يرجى ادخال رفم الهوية الطبية
                    </Text>
                    <TextInput
                        onFocus={inputFoucus}
                        onBlur={inputBlur}
                        style={
                            isFocused
                                ? styles.inputFieldFocus
                                : styles.inputField
                        }
                        keyboardType="numeric"
                        onChangeText={(text) => setUserMedId(text)}
                        value={userMedId}
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
                    {showLink ? (
                        <Redirect href={"/Home/HomeFeed"} />
                    ) : (
                        <>
                            <TouchableOpacity
                                style={styles.btn2}
                                onPress={handelRequest}>
                                <Text>
                                    <Text
                                        style={{
                                            color: "#fff",
                                            textAlign: "center",
                                        }}>
                                        طلب الجهاز
                                    </Text>
                                </Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 24,
        paddingHorizontal: 12,
    },
    imgContainer: {
        borderBottomWidth: 3,
        borderBottomColor: "gray",
        paddingBottom: 8,
        borderRadius: 4,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
    },
    headerText: {
        textAlign: "right",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 12,
        // marginHorizontal:24
    },
    Text: {
        textAlign: "right",
        fontSize: 16,
        marginTop: 8,
    },
    btnView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 32,
    },
    btn1: {
        borderWidth: 1.5,
        marginHorizontal: 32,
        borderRadius: 8,
        borderColor: "#005F86",
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    btn2: {
        fontSize: 18,
        borderWidth: 1.5,
        borderRadius: 8,
        borderColor: "#005F86",
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: "#005F86",
        marginVertical: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
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
        marginBottom: 128,
    },
});
export default SearchedDevice;
