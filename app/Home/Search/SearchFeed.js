import { View, Image,Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView } from 'react-native'
import { FlatList } from 'react-native'

// components
import DeviceCard from '../../../components/DeviceCard'

const SearchFeed = () => {
  // data from the backend
  const devices= [
    {
			id:1,
			deviceImg:require('../../../assets/imgs/device-img.png'),
			deviceType:"كرسي متحرك",
			deviceModel:"Very Fire",
			deviceSize:"5xl",
			deviceCondition:true,
			hospitalName:"مستشفى الامير حمزة",
			hospitalPhoneNumber:+962791049417,
	},
    {
			id:2,
			deviceImg:require('../../../assets/imgs/device-img.png'),
			deviceType:"عكازة",
			deviceModel:"Very Fire",
			deviceSize:"5xl",
			deviceCondition:true,
			hospitalName:"مستشفى الامير حمزة",
			hospitalPhoneNumber:+962791049417,
	},
    {
			id:3,
			deviceImg:require('../../../assets/imgs/device-img.png'),
			deviceType:"سرير ",
			deviceModel:"Very Fire",
			deviceSize:"5xl",
			deviceCondition:true,
			hospitalName:"مستشفى الامير حمزة",
			hospitalPhoneNumber:+962791049417,
	},
    {
			id:4,
			deviceImg:require('../../../assets/imgs/device-img.png'),
			deviceType:"كرسي متحرك",
			deviceModel:"Very Fire",
			deviceSize:"5xl",
			deviceCondition:true,
			hospitalName:"مستشفى الامير حمزة",
			hospitalPhoneNumber:+962791049417,
	},
  ]
  const [searchInput, setSearchInput] = useState('')

  const handelDevices = ({item})=>{
    // empty search input
    if(searchInput === ''){
      return(
        <View style={{flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
          <Link href={{
            pathname:'/Home/Search/[SearchedDevice]',
            params:{
              searchType: item.deviceType,
              searchSize: item.deviceSize,
              searchModel: item.deviceModel,
              searchImg: item.deviceImg,
              searchCondition:item.deviceCondition,
              searchHospitalPhoneNumber: item.hospitalPhoneNumber
            }
          }} 
          style={{marginVertical:12, height:128}}>
            <DeviceCard donation={item} showHospitalName={true}/>
          </Link> 
        </View>
      )
    }
    
    // searching...
    if(item.deviceType.toLowerCase().includes(searchInput.toLocaleLowerCase())){
      return(
        <View style={{flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
          <Link href={{
            pathname:'/Home/Search/[SearchedDevice]',
            params:{
              searchType: item.deviceType,
              searchSize: item.deviceSize,
              searchModel: item.deviceModel,
              searchImg: item.searchImg,
              searchCondition:item.deviceCondition,
              searchHospitalPhoneNumber: item.hospitalPhoneNumber
            }
          }} 
          style={{marginVertical:12, height:128}}>
          <DeviceCard donation={item} showHospitalName={true}/>
          </Link>
        </View>
      )
    }

  }
  return (
    <SafeAreaView style={styles.container}>
      {/* Search input */}
        <TextInput
            style={styles.inputField}
            placeholder='ابحث هنا'
            onChangeText={(text)=>setSearchInput(text)}
            value={searchInput} 
        />
        {/* Devices */}
        <View>
          <FlatList
            data={devices}
            renderItem={handelDevices}
            keyExtractor={(item) => (item && item.id !== undefined ? item.id.toString() : 'defaultKey')}
          />
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container:{
      paddingHorizontal:24,
      display:"flex",
      flexDirection:"column",
      flex:1,
      textAlign:"right",
      backgroundColor:"#fff",
      paddingBottom:128
  },
  textContainer:{
      textAlign:"right", 
      flexDirection:"column",
      alignItems:"flex-end", 
      gap:16, 
      marginBottom:24
  },
  headerText:{
      fontWeight:"bold",
      fontSize:32,
      textAlign:"right"
  },
  text:{
      fontSize:18,
      textAlign:"right",
      paddingHorizontal:8
  },
  btn:{
      paddingHorizontal:16,
      paddingVertical:10,
      borderRadius:8,
      backgroundColor:"#005F86",
      marginHorizontal:8,
      marginVertical:8
  },
  btnText:{
      fontSize:18,
      color:"#fff",
      textAlign:"center"
  },
  subLinkText:{
      fontSize:14,
      color:"#005F86",
  }, 
  inputField:{
      paddingHorizontal:16,
      paddingVertical:10,
      fontSize:16,
      backgroundColor:"#899BAB",
      borderRadius:8,
      textAlign:"right",
      marginVertical:8
  },
  searchSection:{
      alignItems:"center",
      gap:16,
      marginTop:24,
  }
  });

export default SearchFeed