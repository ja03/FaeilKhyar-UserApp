import { Camera, CameraType } from "expo-camera";
import { useState, useEffect, useRef } from "react";
import {
    Alert,
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
} from "react-native";
import { Link } from "expo-router";

const DonationImage = () => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [showCamera, setShowCamera] = useState(false);
    const [takenImage, setTakenImage] = useState("");

    // create ref for camer access
    const cameraRef = useRef(null);
    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraType() {
        setType((current) =>
            current === CameraType.back ? CameraType.front : CameraType.back
        );
    }

    // capture a photo function
    const takePicture = async () => {
        if (cameraRef) {
            console.log("processing function");
            try {
                let photo = await cameraRef.current.takePictureAsync({
                    allowsEditing: true,
                    aspect: [4, 3],
                    quality: 1,
                });
                return photo;
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <View style={styles.container}>
            {showCamera ? (
                <Camera style={styles.camera} type={type} ref={cameraRef}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={async () => {
                                console.log("taking a photo");
                                const img = await takePicture();
                                setTakenImage(img.uri);
                                console.log("Taken Image: ", takenImage);
                                setShowCamera(false);
                            }}>
                            <Text style={styles.btnText}>اخد الصورة</Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            ) : (
                <>
                    <View
                        style={{
                            width: "100%",
                            flex: 1,
                            backgroundColor: "#fff",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <View style={{ borderWidth: 5 }}>
                            <Text style={{ textAlign: "center" }}>
                                صورة الجهاز:{" "}
                            </Text>
                            <View
                                style={{
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}>
                                <Image
                                    source={{ uri: takenImage }}
                                    style={{
                                        width: 300,
                                        height: 300,
                                        margin: 16,
                                    }}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => {
                                setShowCamera(true);
                            }}>
                            <Text style={styles.btnText}>اخد صورة</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => {
                                setShowCamera(true);
                            }}>
                            <Link
                                href={{
                                    pathname: "/Home/Donate/DonateForm",
                                    params: {
                                        deviceImgURI: takenImage,
                                    },
                                }}>
                                <Text style={styles.btnText}>
                                    اختيار الصورة الحالية
                                </Text>
                            </Link>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
    },
    camera: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    buttonContainer: {
        flexDirection: "column",
        justifyContent: "center",
        margin: 24,
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
});

export default DonationImage;
