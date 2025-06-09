import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Tabs } from 'expo-router'

export default function Tablayout() {
   
    return (
        <Tabs screenOptions={{headerShown:false}}>
            <Tabs.Screen name='Home'  
            options={{
                tabBarIcon: ({focused,size,color}) =><Image source={require('../../assets/tab-icons/home.png')}
                style={{
                    width:size,
                    height:size,
                    opacity:focused?1:0.5
                    
                 }}
                />
            
            }}
            />
            <Tabs.Screen name='Explore' options={{
                tabBarIcon: ({focused,size,color}) =><Image source={require('../../assets/tab-icons/explore.png')}
                style={{
                    width:size,
                    height:size,
                    opacity:focused?1:0.5
                    
                 }}
                />
            
            }} />
            <Tabs.Screen name='Cookbook' options={{
                tabBarIcon: ({focused,size,color}) =><Image source={require('../../assets/tab-icons/cookbook.png')}
                style={{
                    width:size,
                    height:size,
                    opacity:focused?1:0.5
                    
                 }}
                />
            
            }} />
            <Tabs.Screen name='Profile'  options={{
                tabBarIcon: ({focused,size,color}) =><Image source={require('../../assets/tab-icons/profile.png')}
                style={{
                    width:size,
                    height:size,
                    opacity:focused?1:0.5
                    
                 }}
                />
            
            }}/>
        </Tabs>
    )
}
//password for strap 03224476937hH
//email mevector1947