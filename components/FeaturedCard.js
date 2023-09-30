import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Alert,
} from "react-native";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { ScrollView } from "react-native";

const FeaturedCard = ({ donation }) => {
    return (
        <View key={donation.id} style={styles.container}>
            <View>
                <Image
                    source={donation.deviceImg}
                    style={{ width: 160, height: 120 }}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{donation.deviceType}</Text>
                <Text style={styles.subLinkText}>{donation.hospitalName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: "#D9E7ED",
        marginRight: 24,
        marginVertical: 24,
        elevation: 6,
        shadowColor: "#121212",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        height: 220,
        flexDirection: "column",
        alignItems: "flex-end",
        // overflow: "hidden",
    },
    textContainer: {
        width: "100%",
        textAlign: "right",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 4,
        height: 60,
        margin: 8,
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "right",
    },
    text: {
        fontSize: 18,
        textAlign: "right",
    },
    subLinkText: {
        fontSize: 16,
        textAlign: "right",
        color: "#005F86",
    },
});
export default FeaturedCard;
