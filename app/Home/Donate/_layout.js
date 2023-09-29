import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="DonateFeed" options={{ title: " " }} />
            <Stack.Screen
                name="DonateForm"
                options={{ title: "نموذج التبرع" }}
            />
            <Stack.Screen
                name="DonationImage"
                options={{ title: "صورة الجهاز" }}
            />
            <Stack.Screen
                name="DonateConfirmation"
                options={{ title: "تأكيد عملية التبرع" }}
            />
            <Stack.Screen name="[PrevDonations]" options={{ title: " " }} />
        </Stack>
    );
};

export default Layout;
