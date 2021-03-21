import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
  <ScrollView>
    <View style = {styles.container}>
      <Text
      style={{
        height: 60,
        textAlign:'center',
        marginTop: 50,
        fontSize: 20,
        fontWeight:'bold',
        fontFamily: 'Fantasy',
        color: 'black' }}

        >Welcome to Valhalla </Text>
      <Image
      style={{width: 400, height: 300}}
      source= {{uri:"https://www.nme.com/wp-content/uploads/2020/07/Assassins-Creed-Valhalla-1-696x442.jpg" }}></Image>
      </View>
    <TextInput
      style= {{
        height:60, 
        borderColor:'black',
        borderWidth:5, 
        fontSize:20,
        textAlign: 'center',
      }}
      placeholder="Enter the name of the Vikings here"/>
    <Text 
      style={{
        height: 60,
        textAlign:'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight:'bold',
        fontFamily: 'Fantasy',
        color: 'black' }} > Top 5 Vikings </Text>
   
   <Text 
      style={{
        textAlign:'center',
        fontSize: 15,
        fontWeight:'bold',
        color: 'black' }} > Ragnar Lothbrook </Text>
    <Image 
    style={{width: 400, height: 400, marginBottom: 50}}
      source= {{uri:"https://i.pinimg.com/originals/af/61/3f/af613facc2c4ae059a96de5f43bb588e.jpg"}}></Image>
      <Text 
      style={{
        textAlign:'center',
        fontSize: 15,
        fontWeight:'bold',
        color: 'black' }} > Rollo </Text>
  <Image
    style={{width: 400, height: 400, marginBottom: 50}}
    source= {{uri: "https://s34960.pcdn.co/wp-content/uploads/2018/06/20-4.jpg"}}></Image>  
      <Text 
      style={{
        textAlign:'center',
        fontSize: 15,
        fontWeight:'bold',
        color: 'black' }} > Lagertha </Text>
    <Image
    style={{width: 400, height: 400, marginBottom: 50}}
    source= {{uri: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Fv6_06_11232017_jh_08328-2000.jpg"}}></Image>
        <Text 
      style={{
        textAlign:'center',
        fontSize: 15,
        fontWeight:'bold',
        color: 'black' }} > Ivar The Boneless </Text>  
    <Image
    style={{width:400, height:400, marginBottom: 50}}
    source= {{uri: "https://images05.military.com/sites/default/files/styles/full/public/2020-04/mightyragnarlead.jpg?itok=mW2MyUzj"}}></Image>
          <Text 
      style={{
        textAlign:'center',
        fontSize: 15,
        fontWeight:'bold',
        color: 'black' }} > Erik The Red </Text>  
    <Image
    style={{width:400, height:400, marginBottom: 50}}
    source= {{uri: "https://exploration.marinersmuseum.org/wp-content/uploads/sites/7/2013/11/Erik-the-Red-450x400-1385398671.png"}}></Image>
    
    <Text 
      style={{
        height: 60,
        textAlign:'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight:'bold',
        fontFamily: 'Fantasy',
        color: 'black' }} > Vikings </Text>

      <Image 
      style={{width:200, height:200, marginLeft: 10}}
      source= {{uri: "https://www.history.com/.image/c_fit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_620/MTU3ODc4NjgwODI0NzE4NjY1/image-placeholder-title.jpg"}}></Image>
      <Image
      style= {{width:200, height:200, marginLeft:200, marginTop: 10}}
      source= {{uri: "https://cdn.mos.cms.futurecdn.net/gxV9jGvxGxgzqH2mYTsPT7-320-80.jpg"}}></Image>

<Image
      style= {{width:400, height:300, marginTop:10}}
      source= {{uri: "https://i.pinimg.com/originals/df/b2/0c/dfb20c0027be9c43b7744a327c26ec5b.jpg"}}></Image>
<Image
      style= {{width:400, height:300, marginTop:10}}
      source= {{uri: "https://www.thepostil.com/wp-content/uploads/2019/08/funeral_of_a_viking_by_Frank_Dicksee.jpg"}}></Image>   
  <Image
      style= {{width:200, height:200, marginTop:10, marginLeft:10}}
      source= {{uri: "https://www.datocms-assets.com/15377/1574682987-viking.jpg?auto=compress%2Cformat&fm=jpg"}}></Image>   
  <Image
      style= {{width:200, height:200, marginLeft:200, marginTop: 10}}
      source= {{uri: "https://about-history.com/wp-content/uploads/2017/07/James_Ives_Viking_Raiders_0.jpg"}}></Image> 

  <Text 
      style={{
        height: 60,
        textAlign:'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight:'bold',
        fontFamily: 'Fantasy',
        color: 'black' }} > Joseph Brian Eugenio </Text> 
   </ScrollView>
  

  
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
