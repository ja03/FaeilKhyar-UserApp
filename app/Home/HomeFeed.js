import { View, Image,Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native'
import {Link} from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { ScrollView } from 'react-native'

//components
import FeaturedCard from '../../components/FeaturedCard'

const HomeFeed = () => {
  //data from the backend
  const FeaturedDonations=[
    {
    id: 1,
    deviceImg:require('../../assets/imgs/chair-02.jpg'),
    deviceType: 'كرسي متحرك',
    deviceModel:'Model 1101',
    deviceSize:'3xl',
    condition:true,
    durationOfUse:'Two weeks',
    hospitalName:'مستفى الامير حمزة',
    hospitalLocation:'عمان الدوار السابع',
    hospitalPhoneNumber: +962791049417
  },
  {
    id: 2,
    deviceImg:require('../../assets/imgs/chair-02.jpg'),
    deviceType: 'كرسي متحرك',
    deviceModel:'Model 1101',
    deviceSize:'3xl',
    condition:true,
    durationOfUse:'Two weeks',
    hospitalName:'مستفى الامير حمزة',
    hospitalLocation:'عمان الدوار السابع',
    hospitalPhoneNumber: +962791049417
  },
  {
    id: 3,
    deviceImg:require('../../assets/imgs/chair-02.jpg'),
    deviceType: 'كرسي متحرك',
    deviceModel:'Model 1101',
    deviceSize:'3xl',
    condition:true,
    durationOfUse:'Two weeks',
    hospitalName:'مستفى الامير حمزة',
    hospitalLocation:'عمان الدوار السابع',
    hospitalPhoneNumber: +962791049417
  },
  {
    id: 4,
    deviceImg:require('../../assets/imgs/chair-02.jpg'),
    deviceType: 'كرسي متحرك',
    deviceModel:'Model 1101',
    deviceSize:'3xl',
    condition:true,
    durationOfUse:'Two weeks',
    hospitalName:'مستفى الامير حمزة',
    hospitalLocation:'عمان الدوار السابع',
    hospitalPhoneNumber: +962791049417
  },
]

  return (
    <SafeAreaView style={styles.container}>
      {/* NavBar */}
      <View style={styles.navBar}>
        <Link href={'/Home/HomeFeed'} style={styles.linkImg}>
          <View>
            <Image source={require('../../assets/imgs/Logo-sm.png')}/>
          </View>
        </Link>
        <Link href={'/Home/Notification/NotificationFeed'} style={styles.linkImg}>
          <View>
            <Image source={require('../../assets/icons/bell-icon.png')}/>
          </View>
        </Link>
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
      {/* Hero Section */}
      <View>
        <Text style={styles.headerText}>مرحبًا بك في فاعل خير، حيث تبدأ قصة العطاء والأمل.</Text>
      {/* CTA section */}
        <View style={styles.CTA}>
          <TouchableOpacity style={styles.btn}>
            <Link href="/Home/Donate/DonateForm" style={styles.btnText}>تبرع الان</Link>
          </TouchableOpacity>
          <View style={{width:164}}>
            <Text style={styles.text}>
              العمل الخيري يبدأ من هنا! ساهم في تحسين حياة الآخرين
            </Text>
          </View>
        </View>
      </View>
      {/* Search CTA */}
      <View style={styles.searchCTA}>
        <Link href={'/Home/Search/SearchFeed'}>
          <View>
            <Image source={require('../../assets/icons/search-icon.png')}/>
          </View>
        </Link>
        <Text style={styles.sectionText}> 
            أفعال الخير الاخيرة
        </Text>
      </View>
      {/* Featured Donations */}
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal:15
        }}
        showsHorizontalScrollIndicator={false}
        >
          {FeaturedDonations.map((donation) => (
            <View style={{marginRight:24, marginVertical:12 }}>
              <Link 
              style={{width:162, height:200}}
              href={{
                pathname:'/Home/Search/[SearchedDevice]',
                params:{
                  searchType: donation.deviceType,
                  searchSize: donation.deviceSize,
                  searchModel: donation.deviceModel,
                  searchImg: donation.deviceImg,
                  searchHospitalPhoneNumber: donation.hospitalPhoneNumber
                }
                }} 
                >
                <FeaturedCard key={donation.id} donation={donation} />
              </Link>
            </View>
          ))}
        </ScrollView>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
      paddingVertical:48,
      paddingHorizontal:24,
      display:"flex",
      flexDirection:"column",
      // flex:1,
      paddingBottom:72,
      textAlign:"right",
      backgroundColor:"#FFF",
  },
  navBar:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:24
  },
  linkImg:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
  },
  headerText:{
      fontWeight:"bold",
      fontSize:24,
      textAlign:"right"  
  },
  sectionText:{
    fontSize:20,
    textAlign:"right" 
  },
  text:{
      fontSize:16,
      textAlign:"right",
      // paddingHorizontal:8
  },
  CTA:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:20,
    paddingHorizontal:20,
    backgroundColor:'#D9E7ED', 
    borderRadius: 8,
    marginTop:24,
  },
  searchCTA:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:24,
  },
  btn:{
      paddingHorizontal:16,
      paddingVertical:10,
      borderRadius:8,
      backgroundColor:"#005F86",
      // marginHorizontal:8,
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
  });
export default HomeFeed