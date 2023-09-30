import React, { useState } from "react";
import { View, TextInput, StyleSheet, FlatList } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import DeviceCard from "../../../components/DeviceCard";

const SearchFeed = () => {
    // Data from the backend
    const devices = [
        {
            id: 1,
            deviceImg: require("../../../assets/imgs/device-img1.png"),
            deviceType: "كرسي متحرك ذكي",
            deviceModel: "AssistTech SmartChair",
            deviceSize: "5xl",
            deviceCondition: true,
            hospitalName: "مستشفى الأمير هاشم",
            hospitalPhoneNumber: "+962791049417",
        },
        {
            id: 2,
            deviceImg: require("../../../assets/imgs/device-img2.jpg"),
            deviceType: "عكازة",
            deviceModel: "AssistCrutch Pro",
            deviceSize: "5xl",
            deviceCondition: true,
            hospitalName: "مستشفى الأمير عبدالله",
            hospitalPhoneNumber: "+962799876543",
        },
        {
            id: 3,
            deviceImg: require("../../../assets/imgs/device-img3.jpg"),
            deviceType: "سرير طبي",
            deviceModel: "MediRest Pro",
            deviceSize: "5xl",
            deviceCondition: true,
            hospitalName: "مستشفى الأمير حمزة",
            hospitalPhoneNumber: "+962799123456",
        },
        {
            id: 4,
            deviceImg: require("../../../assets/imgs/device-img4.jpg"),
            deviceType: "جهاز قراءة نصوص بصوت عالي",
            deviceModel: "ReadAid Pro",
            deviceSize: "Portable",
            deviceCondition: true,
            hospitalName: "مستشفى الملكة رانيا",
            hospitalPhoneNumber: "+962799876543",
        },
        {
            id: 5,
            deviceImg: require("../../../assets/imgs/device-img5.jpg"),
            deviceType: "سماعة طبية",
            deviceModel: "HearWell 2000",
            deviceSize: "Small",
            deviceCondition: true,
            hospitalName: "مستشفى الأميرة سلمى",
            hospitalPhoneNumber: "+962788765432",
        },
        {
            id: 6,
            deviceImg: require("../../../assets/imgs/device-img.png"),
            deviceType: "كرسي متحرك ",
            deviceModel: "SmartChair Pro",
            deviceSize: "XL",
            deviceCondition: true,
            hospitalName: "مستشفى الملك فيصل",
            hospitalPhoneNumber: "+962777123456",
        },
        {
            id: 7,
            deviceImg: require("../../../assets/imgs/device-img6.jpg"),
            deviceType: "قاموس لغة الإشارة",
            deviceModel: "SignLang Master",
            deviceSize: "Portable",
            deviceCondition: true,
            hospitalName: "مستشفى الأمير هاشم",
            hospitalPhoneNumber: "+962799123456",
        },
    ];

    const [searchInput, setSearchInput] = useState("");

    const handleDevices = ({ item }) => {
        // Empty search input
        if (searchInput === "") {
            return (
                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                    <Link
                        href={{
                            pathname: "/Home/Search/[SearchedDevice]",
                            params: {
                                searchType: item.deviceType,
                                searchSize: item.deviceSize,
                                searchModel: item.deviceModel,
                                searchImg: item.deviceImg,
                                searchCondition: item.deviceCondition,
                                searchHospitalPhoneNumber:
                                    item.hospitalPhoneNumber,
                            },
                        }}
                        style={{ marginVertical: 12, height: 128 }}>
                        <DeviceCard donation={item} showHospitalName={true} />
                    </Link>
                </View>
            );
        }

        // Searching...
        if (item.deviceType.toLowerCase().includes(searchInput.toLowerCase())) {
            return (
                <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        flex: 1,
                    }}>
                    <Link
                        href={{
                            pathname: "/Home/Search/[SearchedDevice]",
                            params: {
                                searchType: item.deviceType,
                                searchSize: item.deviceSize,
                                searchModel: item.deviceModel,
                                searchImg: item.deviceImg, // Corrected property name
                                searchCondition: item.deviceCondition,
                                searchHospitalPhoneNumber:
                                    item.hospitalPhoneNumber,
                            },
                        }}
                        style={{ marginVertical: 12, height: 128 }}>
                        <DeviceCard donation={item} showHospitalName={true} />
                    </Link>
                </View>
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Search input */}
            <TextInput
                style={styles.inputField}
                placeholder="ابحث هنا"
                onChangeText={(text) => setSearchInput(text)}
                value={searchInput}
            />
            {/* Devices */}
            <View style={{ flex: 1 }}>
                <FlatList
                    data={devices}
                    renderItem={handleDevices}
                    keyExtractor={(item) =>
                        item && item.id !== undefined
                            ? item.id.toString()
                            : "defaultKey"
                    }
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        display: "flex",
        flexDirection: "column",
        flex: 1,
        textAlign: "right",
        backgroundColor: "#fff",
        paddingBottom: 128,
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

export default SearchFeed;
