import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '@/context/UserContext'

const Introheader = () => {
    const {user}=useContext(UserContext)
    useEffect(()=>{
      console.log(user)
    })
  return (
    <View style={{}}>
     <Image source={{uri:user?.picture}}
     style={{
        width:40,
        height:40,
        borderRadius:99,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'green'
        
     }}
     />
     {/* <Text style={{color:'black',fontSize:100,marginTop:10}}>{user?.created_at}</Text> */}
    </View>
  )
}

export default Introheader