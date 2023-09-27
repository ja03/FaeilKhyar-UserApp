import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {Link} from 'expo-router'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context';

//Assets
import confirmImage from '../../../assets/imgs/confirmation-donation.png'

const DoanteConfimration = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>

            <View style={{marginHorizontal:24, display:"flex", flexDirection:"column", gap:24}}>
            <View style={{display:"flex", alignItems:"cecnter", justifyContent:"center"}}>
                <Image source={confirmImage} style={{width:320}}/>
            </View>
                <Text style={styles.headerText}>تأكيد التبرع</Text>
                <Text style={styles.Text}>ستتلقى رمز QR مهم من المستشفى عبر الإشعارات. استخدم هذا الرمز عند زيارة المستشفى للتحقق وتأكيد تبرعك بسهولة وأمان. هذا الرمز يضمن استلام تبرعك وأنه سيُستخدم للغرض الذي تم التبرع من أجله.
                </Text>
                <TouchableOpacity style={styles.btn}>
                    <Link href="/Home/HomeFeed" style={styles.btnText}>العودة الى الصفحة الرئيسية</Link>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent:"center",
    },
    headerText:{
        textAlign:"right",
        fontSize:26,
        fontWeight:'bold',

    },
    Text:{
        textAlign:"right",
        fontSize:16,
    },
    btn:{
    backgroundColor:'#005F86',
    paddingHorizontal:16,
    paddingVertical:10,
    borderRadius:8,
    },
    btnText:{
        fontSize:18,
        color:'white',
        textAlign:"center"
    },
})
export default DoanteConfimration