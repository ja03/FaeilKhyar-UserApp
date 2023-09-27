import React from "react";
import { Tabs } from "expo-router";
import { Image } from "react-native"; // Make sure to import Image

// Icons
import FeedIcon from "../../assets/icons/home-icon.png";
import DonateIcon from "../../assets/icons/donate-icon.png";
import ProfileIcon from "../../assets/icons/profile-icon.png";

const Layout = () => {
return (
    <Tabs screenOptions={{tabBarShowLabel:false, headerShadowVisible:false,  }}>
        <Tabs.Screen
        name="HomeFeed"
        options={{ tabBarIcon: () => ( <Image source={FeedIcon} style={{ width: 24, height: 24 }} /> ), title:'', headerShown:false }}
        />
        <Tabs.Screen
        name="Donate"
        options={{ 
            tabBarIcon: () => ( <Image source={DonateIcon} style={{ width: 28, height: 28 }} /> ),
            title:'',
            headerShown:false,
        }} 
        />
        <Tabs.Screen
        name="Notification"
        // options={{ tabBarIcon: () => ( <Image source={BellIcon} tyle={{ width: 24, height: 24 }} /> )}}
        options={{title:"الاشعارات",href: null}}
        />
        <Tabs.Screen
        name="Search"
        // options={{ tabBarIcon: () => ( <Image source={BellIcon} tyle={{ width: 24, height: 24 }} /> )}}
        options={{title:"بحث",href: null}}
        />

        <Tabs.Screen
        name="Profile"
        options={{ tabBarIcon: () => ( <Image source={ProfileIcon} style={{ width: 28, height: 28 }} /> ), title:"حسابي"}}
        />
    </Tabs>
);
};

export default Layout;