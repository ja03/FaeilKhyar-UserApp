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
            deviceImg: require("../../../assets/imgs/device-img.png"),
            deviceType: "كرسي متحرك",
            deviceModel: "Very Fire",
            deviceSize: "5xl",
            deviceCondition: true,
            hospitalName: "مستشفى الامير حمزة",
            hospitalPhoneNumber: "+962791049417",
        },
        {
            id: 2,
            deviceImg: require("../../../assets/imgs/device-img.png"),
            deviceType: "عكازة",
            deviceModel: "Very Fire",
            deviceSize: "5xl",
            deviceCondition: true,
            hospitalName: "مستشفى الامير حمزة",
            hospitalPhoneNumber: "+962791049417",
        },
        {
            id: 3,
            deviceImg: require("../../../assets/imgs/device-img.png"),
            deviceType: "سرير ",
            deviceModel: "Very Fire",
            deviceSize: "5xl",
            deviceCondition: true,
            hospitalName: "مستشفى الامير حمزة",
            hospitalPhoneNumber: "+962791049417",
        },
        {
            id: 4,
            deviceImg: require("../../../assets/imgs/device-img.png"),
            deviceType: "كرسي متحرك",
            deviceModel: "Very Fire",
            deviceSize: "5xl",
            deviceCondition: true,
            hospitalName: "مستشفى الامير حمزة",
            hospitalPhoneNumber: "+962791049417",
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
