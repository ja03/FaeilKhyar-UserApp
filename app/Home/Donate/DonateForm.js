import {
    View,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, useSafeAreaFrame } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Redirect } from "expo-router";

const DonateForm = () => {
    const local = useLocalSearchParams();

    // device information
    const [deviceType, setDeviceType] = useState("");
    const [deviceSize, setDeviceSize] = useState("");
    const [deviceModel, setDeviceModel] = useState("");
    const [deviceCauseOFUse, setDeviceCauseOfUse] = useState("");
    const [deviceImg, setDeviceImg] = useState("");
    const [deviceCondition, setDeviceCondition] = useState(false);

    // prevUserInfo
    const [prevUserAge, setPrevUserAge] = useState(0);
    const [prevUserWeight, setPrevUserWeight] = useState(0);
    const [useDuration, setUseDuration] = useState("");

    // donner Info
    const [donnerName, setDonnerName] = useState("");
    const [donnerPhoneNumber, setDonnerPhoneNumber] = useState(0);
    const [donnerLocation, setDonnerLocation] = useState("");
    const [needPickUp, setNeedPickUp] = useState(false);

    // ShowLink & foucus states
    const [showLink, setShowLink] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // object to send to the backend
    const [donateForm, setDonateForm] = useState({});

    const handelCheckBox = () => {
        if (deviceCondition) {
            setDeviceCondition(false);
        } else {
            setDeviceCondition(true);
            setUseDuration("");
            setDeviceCauseOfUse("");
            setPrevUserAge(0);
            setPrevUserWeight(0);
        }
        console.log("clicked");
    };

    const handelDonateForm = () => {
        setDonateForm({
            donationDeviceType: deviceType,
            donationDeviceSize: deviceSize,
            donationDeviceModel: deviceModel,
            donationDeviceCauseOfUse: deviceCauseOFUse,
            donationDeviceCondition: deviceCondition,
            donationDeviceImg: local.deviceImgURI,
            donationPrevUserAge: prevUserAge,
            donationPrevUserWeight: prevUserWeight,
            donationUseDuration: useDuration,
            donationDonnerName: donnerName,
            donationDonnerPhoneNumber: donnerPhoneNumber,
            donationDonnerLocation: donnerLocation,
            donationNeedPickUp: needPickUp,
        });

        if (Object.keys(donateForm).length === 0) {
            Alert.alert("حدث خطأ", "يرجى التأكد من تعبئة النموذج");
        } else {
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
            <ScrollView
                // style={{borderWidth:2}}
                showsVerticalScrollIndicator={false}>
                {/* Device Info */}
                <View>
                    <Text style={styles.headerText}>معلومات عن الجهاز</Text>
                    {/* Device Type input */}
                    <View>
                        <Text style={styles.inputText}>نوع الجهاز</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.inputField}
                                value={deviceType}
                                onChange={setDeviceType}
                            />
                        </View>
                    </View>
                    {/* Device Model input */}
                    <View>
                        <Text style={styles.inputText}>موديل الجهاز</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.inputField}
                                value={deviceModel}
                                onChange={(text) => setDeviceModel(text)}
                            />
                        </View>
                    </View>
                    {/* Device Size input */}
                    <View>
                        <Text style={styles.inputText}>حجم الجهاز</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.inputField}
                                value={deviceSize}
                                onChange={(text) => setDeviceSize(text)}
                            />
                        </View>
                    </View>
                    {/* Device Photo input */}
                    <View>
                        <Text style={styles.inputText}>
                            الرجاء تحميل صورة للجهاز
                        </Text>
                        <View style={styles.imgInput}>
                            <Image
                                source={{ uri: local.deviceImgURI }}
                                style={{ width: "90%", height: "90%" }}
                            />
                        </View>
                        <TouchableOpacity style={styles.btn}>
                            <Link
                                href={"/Home/Donate/DonationImage"}
                                style={styles.btnText}>
                                <Text>اخد صورة</Text>
                            </Link>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Device Condition CheckBox */}
                <TouchableOpacity
                    style={{
                        marginVertical: 24,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                    onPress={handelCheckBox}>
                    {/* CheckBox */}
                    <View
                        style={
                            deviceCondition
                                ? styles.checkedBox
                                : styles.UnCheckBox
                        }></View>
                    <Text
                        style={{
                            textAlign: "right",
                            fontWeight: "bold",
                            fontSize: 16,
                        }}>
                        جهازي جديد اردت فقط ان اتبرع
                    </Text>
                </TouchableOpacity>
                {/* Cause of use input */}
                <View>
                    <Text style={styles.inputText}>لأي غرض تم استخدامه؟</Text>
                    <View style={styles.input}>
                        <TextInput
                            editable={!deviceCondition}
                            style={styles.inputField}
                            value={deviceCauseOFUse}
                            onChange={(text) => setDeviceCauseOfUse(text)}
                        />
                    </View>
                </View>

                {/* PrevUser Info */}
                <View>
                    <Text style={styles.headerText}>
                        معلومات عن المستخدم السابق
                    </Text>
                    {/* Age input */}
                    <View>
                        <Text style={styles.inputText}>
                            عمر المستخدم السابق
                        </Text>
                        <View style={styles.input}>
                            <TextInput
                                editable={!deviceCondition}
                                style={styles.inputField}
                                keyboardType="numeric"
                                value={prevUserAge}
                                onChange={(text) => setPrevUserAge(text)}
                            />
                        </View>
                    </View>
                    {/* weight input */}
                    <View>
                        <Text style={styles.inputText}>
                            وزن المستخدم السابق
                        </Text>
                        <View style={styles.input}>
                            <TextInput
                                editable={!deviceCondition}
                                style={styles.inputField}
                                keyboardType="numeric"
                                value={prevUserWeight}
                                onChange={(text) => setPrevUserWeight(text)}
                            />
                        </View>
                    </View>
                    {/* duration input */}
                    <View>
                        <Text style={styles.inputText}>مدة الاستخدام</Text>
                        <View style={styles.input}>
                            <TextInput
                                editable={!deviceCondition}
                                style={styles.inputField}
                                value={useDuration}
                                onChange={(text) => setUseDuration(text)}
                            />
                        </View>
                    </View>
                </View>

                {/* Donner Info */}
                <View>
                    <Text style={styles.headerText}>معلومات عن فاعل الخير</Text>
                    {/* Name input */}
                    <View>
                        <Text style={styles.inputText}>رقم الهاتف</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.inputField}
                                value={donnerName}
                                onChange={(text) => setDonnerName(text)}
                            />
                        </View>
                    </View>
                    {/* Phone input */}
                    <View>
                        <Text style={styles.inputText}>رقم الهاتف</Text>
                        <View style={styles.input}>
                            <TextInput
                                style={styles.inputField}
                                keyboardType="numeric"
                                value={donnerPhoneNumber}
                                onChange={(text) => setDonnerPhoneNumber(text)}
                            />
                        </View>
                    </View>
                    {/* Device Location input */}
                    <View>
                        <Text style={styles.inputText}>
                            اسم المنطقة الخاصة بك
                        </Text>
                        <View style={styles.input}>
                            <TextInput
                                onFocus={inputFoucus}
                                onBlur={inputBlur}
                                style={
                                    isFocused
                                        ? styles.inputFieldFocus
                                        : styles.inputField
                                }
                                vlaue={donnerLocation}
                                onChange={(text) => setDonnerLocation(text)}
                            />
                        </View>
                    </View>
                    {/* Need Pick Up CheckBox */}
                    <TouchableOpacity
                        style={{
                            marginVertical: 24,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                        onPress={() => {
                            setNeedPickUp(!needPickUp);
                        }}>
                        <View
                            style={
                                needPickUp
                                    ? styles.checkedBox
                                    : styles.UnCheckBox
                            }></View>
                        <Text
                            style={{
                                textAlign: "right",
                                fontWeight: "bold",
                                fontSize: 16,
                            }}>
                            احتاج من يأتي لأخذ الجهاز
                        </Text>
                    </TouchableOpacity>
                </View>
                {showLink ? (
                    <Redirect href={"/Home/Donate/DonateConfirmation"} />
                ) : (
                    <>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={handelDonateForm}>
                            <Text style={styles.btnText}>تبرع بالجهاز</Text>
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
        backgroundColor: "#fff",
        // paddingBottom:64,
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
        fontSize: 24,
        textAlign: "right",
        marginTop: 24,
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
    inputText: {
        textAlign: "right",
        fontSize: 14,
    },
    imgInput: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#899BAB",
        width: "100%",
        marginVertical: 8,
        height: 300,
        borderRadius: 8,
    },
    UnCheckBox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderRadius: 4,
    },
    checkedBox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderRadius: 4,
        backgroundColor: "blue",
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
export default DonateForm;
