import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import {HAMBURGER,PROFILE,SEARCH_ICON,CLOCK, INSPECTION, ARROW_RIGHT,MAINTENANCE} from "../components/icon/svgIcons";
import Icon from "../components/icon/Icon";
import { Searchbar } from 'react-native-paper';

function Home({navigation}){

    return(
        <ScrollView style={{paddingHorizontal:20,backgroundColor:'#EEECF8',flex:1,paddingBottom:40,paddingTop:20}}>
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'}/>
            <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center'}}>
                <Icon name={HAMBURGER} size={30}/>
                <Icon name={PROFILE} size={50}/>
            </View>

            <Text style={{fontWeight:'bold',fontSize:20,color:'#000'}}>Welcome Back,Imani 👋🏽 </Text>
            
            <Text style={{paddingVertical:15,color:'#999999'}}>It is a long established fact lorem</Text>
            
            <Searchbar
                    style={{ width:'100%',marginTop:5}}
                    placeholder="Search lorem ipsum"
                    icon={({ size }) => (
                        <Icon name={SEARCH_ICON} size={size}/>
                      )}
                />
            <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:'center',paddingVertical:30}}>
                <Text style={{fontWeight:'bold',color:'#000',fontSize:18}}>Recent Checklist</Text>
                <Text style={{color:'#53BED2'}}>View all</Text>
            </View>

            <View style={{backgroundColor:'#fff',padding:20}}>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',color:'#000',fontSize:15}}>Mr. Joseph Agunbiade</Text>
                    <View style={{backgroundColor:'#fce0db',borderRadius:5,padding:4}}> 
                        <Text style={{color:'#DC2C10'}}>Pending</Text>
                    </View>
                </View>
                <Text style={{color:'#999999'}}>Benz 2014 EClass</Text>
                <View style={{ height:1,backgroundColor:'#EEEEEE',marginVertical:15}}/>
                <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
                    <Icon name={CLOCK} size={30}/>
                    <Text style={{color:'#000',marginStart:7}}>14 July, 4:00pm - 7:00pm</Text>
                </View>
            </View>

            <View style={{backgroundColor:'#fff',padding:20,marginTop:30}}>
                <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',color:'#000',fontSize:15}}>Mr. Joseph Agunbiade</Text>
                    <View style={{backgroundColor:'#bcf5bc',borderRadius:5,padding:4}}> 
                        <Text style={{color:'#33CC66'}}>Ready</Text>
                    </View>
                </View>
                <Text style={{color:'#999999'}}>Benz 2014 EClass</Text>
                <View style={{ height:1,backgroundColor:'#EEEEEE',marginVertical:15}}/>
                <View style={{flexDirection:'row',width:'100%',alignItems:'center'}}>
                    <Icon name={CLOCK} size={30}/>
                    <Text style={{color:'#000',marginStart:7}}>14 July, 4:00pm - 7:00pm</Text>
                </View>
            </View>
            <Text style={{fontWeight:'bold',color:'#000',fontSize:18,marginVertical:30}}>Services</Text>

            <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center",backgroundColor:'#fff',padding:20}}>
                <View style={{paddingVertical:10,borderWidth:1,borderRadius:5,borderColor:'#53BED2',height:60}}>
                    <Icon name={INSPECTION} size={60}/>
                </View>
                <View>
                    <Text style={{fontWeight:'bold',color:'#000',fontSize:15,marginBottom:7}}>Inspection</Text>
                    <Text>Contrary to popolar belief,{'\n'}Lorem Ipsum dior</Text>
                </View>
                <Icon name={ARROW_RIGHT} size={50}/>
            </View>

            <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center",backgroundColor:'#fff',padding:20,marginTop:30,marginBottom:50}}>
                <View style={{paddingVertical:12,borderWidth:1,borderRadius:5,borderColor:'#53BED2',height:60}}>
                    <Icon name={MAINTENANCE} size={60}/>
                </View>
                <View>
                    <Text style={{fontWeight:'bold',color:'#000',fontSize:15,marginBottom:7}}>Maintenance</Text>
                    <Text>Contrary to popolar belief,{'\n'}Lorem Ipsum dior</Text>
                </View>
                <Icon name={ARROW_RIGHT} size={50}/>
            </View>

        </ScrollView>
    )
}

export default Home;