import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

// Components
import DeviceCard from "../../../components/DeviceCard";

const notifications = [
    {
        id: 1,
        deviceImg: require("../../../assets/imgs/device-img.png"),
        deviceType: "كرسي متحرك",
        donnerLocation: "عمان, الدوار السابع",
        hospitalName: "مستشفى الامير حمزة",
        hospitalMessage:
            "تم قبول طلب التبرع الخاص بك من قبل {hospital name} يرجى مراجعة المستشفى لاتمام عملية التبرع موقعنا {Hospital location} يرجى اظهار رمز الQR للموظف لاتمام عملية التبرع ",
        hospitalQRcode: require("../../../assets/imgs/QRcode.png"),
    },
];

const NotificationFeed = () => {
    const renderNotificationCards = ({ item }) => {
        return (
            <View style={{ alignItems: "center" }}>
                <Link
                    onPress={() => {
                        console.log("clicked!");
                    }}
                    href={{
                        pathname: "/Home/Notification/[NotificationDets]",
                        params: {
                            notificationId: item.id,
                            notificationDeviceType: item.deviceType,
                            notificationDeviceImg: item.deviceImg,
                            notificationHospitalMessage: item.hospitalMessage,
                            notificationHospitalQRcode: item.hospitalQRcode,
                        },
                    }}
                    style={{ marginTop: 24, height: 128 }}>
                    <DeviceCard donation={item} />
                </Link>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={notifications}
                renderItem={renderNotificationCards}
                keyExtractor={(item) =>
                    item && item.id ? item.id.toString() : "defaultKey"
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        // paddingVertical:48,
        paddingHorizontal: 24,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        paddingBottom: 72,
        textAlign: "right",
        backgroundColor: "#FFF",
    },
});

export default NotificationFeed;
