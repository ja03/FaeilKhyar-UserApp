import React from 'react';
import { Link } from 'expo-router';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

const WelcomingOne = () => {
    return (
<SafeAreaView style={styles.container}>
    <View style={styles.imgContainer}>
        <Image
            source={require('../../assets/imgs/logo-lg.png')}
        />
    </View>
    <View style={styles.textContainer}>
        <Text style={styles.headerText}>فاعل خير</Text>
        <Text style={styles.text}> كن فاعلا للخير و قدم العون للاخرين </Text>
    </View>
    <TouchableOpacity style={styles.btn}>
        <Link href={'/Registration/WelcomingTwo'}>
            <Text style={styles.btnText}>تعرف على المزيد</Text>
        </Link>
    </TouchableOpacity>
</SafeAreaView>
    );
};

const styles = StyleSheet.create({
container:{
    padding:48,
    display:"flex",
    flex:1,
    flexDirection:"column",
    alignItems:"center", 
    justifyContent:"center",
    gap:48, textAlign:"center",
    backgroundColor:"#D9E7ED"
},
textContainer:{
    textAlign:"center", 
    flexDirection:"column",
    alignItems:"center", 
    justifyContent:"center",
    gap:24
},
headerText:{
    fontWeight:"bold",
    fontSize:32,
},
text:{
    fontSize:22,
    textAlign:"center"
},
btn:{
    paddingHorizontal:16,
    paddingVertical:10,
    borderRadius:8,
    backgroundColor:"#005F86"
},
btnText:{
    fontSize:18,
    color:"#fff"
}
});

export default WelcomingOne;
