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

// components
import DeviceCard from "../../../components/DeviceCard";

const DonateFeed = () => {
    //data from the backend
    const prevDonations = [
        {
            id: 1,
            deviceImg: require("../../../assets/imgs/device-img.png"),
            deviceType: "كرسي متحرك",
            deviceModel: "كثير حلو",
            deviceSize: "5xl",
            deviceCondition: true,
            durationOfUse: 5,
            prevUserAge: 80,
            prevUserWeight: 70,
            causeOfUse: "رجلي انكسرت",
            donnerLocation: "عمان الدوار السابع",
            donnerPhoneNumber: +962791049417,
            hospitalName: "مستشفى الامير حمزة",
            hospitalMessage: "جهاااااااااازك عسلللل",
            QRcode: require("../../../assets/imgs/QRcode.png"),
        },
    ];
    /*if the device condition was True (meaning that the device is new) then
	durationOfUse:Number,
	prevUserAge:Number,
	prevUserWeight:Number,
	causeOfUse:String,
Will be default values 0 and " "
*/
    return (
        <SafeAreaView style={styles.container}>
            {/* NavBar */}
            <View style={styles.navBar}>
                <Link href={"/Home/HomeFeed"} style={styles.linkImg}>
                    <View>
                        <Image
                            source={require("../../../assets/imgs/Logo-sm.png")}
                        />
                    </View>
                </Link>
                <Link
                    href={"/Home/Notification/NotificationFeed"}
                    style={styles.linkImg}>
                    <View>
                        <Image
                            source={require("../../../assets/icons/bell-icon.png")}
                        />
                    </View>
                </Link>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* Hero Section */}
                <View>
                    <Text style={styles.headerText}>مساهمتك تصنع الفرق</Text>
                    {/* CTA section */}
                    <View style={styles.CTA}>
                        <TouchableOpacity style={styles.btn}>
                            <Link
                                href="/Home/Donate/DonateForm"
                                style={styles.btnText}>
                                تبرع الان
                            </Link>
                        </TouchableOpacity>
                        <View style={{ width: 164 }}>
                            <Text style={styles.text}>
                                العمل الخيري يبدأ من هنا! ساهم في تحسين حياة
                                الآخرين
                            </Text>
                        </View>
                    </View>
                </View>
                {/* PrevDonations section */}
                <View style={{ marginTop: 24 }}>
                    <Text style={styles.sectionText}>
                        تأمل في تأثيرك الإيجابي, سجل تبرعاتك السابقة
                    </Text>
                    <View style={styles.prevDonations}>
                        {prevDonations.map((donation) => (
                            <Link
                                href={{
                                    pathname: "/Home/Donate/[PrevDonations]",
                                    params: {
                                        deviceImg: donation.deviceImg,
                                        deviceType: donation.deviceType,
                                        deviceModel: donation.deviceModel,
                                        deviceSize: donation.deviceSize,
                                        deviceCondition:
                                            donation.deviceCondition,
                                        causeOfUse: donation.causeOfUse,
                                        prevUserAge: donation.prevUserAge,
                                        prevUserWeight: donation.prevUserWeight,
                                        durationOfUse: donation.durationOfUse,
                                        donnerPhoneNumber:
                                            donation.donnerPhoneNumber,
                                        donnerLocation: donation.donnerLocation,
                                    },
                                }}
                                style={{ height: 128 }}>
                                <DeviceCard
                                    key={donation.id}
                                    donation={donation}
                                />
                            </Link>
                        ))}
                        {/* {prevDonations.map((donation) => (
                    <DeviceCard key={donation.id} donation={donation} />
                ))} */}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        display: "flex",
        flexDirection: "column",
        // flex:1,
        paddingBottom: 72,
        textAlign: "right",
        backgroundColor: "#FFF",
    },
    navBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 24,
    },
    linkImg: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "right",
    },
    sectionText: {
        fontSize: 20,
        textAlign: "right",
    },
    text: {
        fontSize: 16,
        textAlign: "right",
        // paddingHorizontal:8
    },
    CTA: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: "#D9E7ED",
        borderRadius: 8,
        marginTop: 24,
    },
    prevDonations: {
        alignItems: "center",
        gap: 16,
        marginTop: 24,
    },
    btn: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: "#005F86",
        // marginHorizontal:8,
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
});

export default DonateFeed;
