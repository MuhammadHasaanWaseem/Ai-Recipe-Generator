import { View, Text, Image, Switch } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/context/UserContext'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace'

const Introheader = () => {
  const { user } = useContext(UserContext)
  useEffect(() => {
    // console.log(user)
  })
  const [enabled, setisenabled] = useState(false)
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        alignContent: 'center'
      }}>

      <View style={{ marginRight: '5%', flexDirection: 'row', gap: '5%', alignItems: 'center', display: 'flex' }}>
        <Image source={user?.picture ? { uri: user.picture } : require('../assets/logo/user.png')}
          style={{
            width: 60,
            height: 60,
            borderRadius: 99,


          }}
        />
        <Text style={{ color: 'black', fontFamily: 'outfit-bold', fontSize: 16 }}>Hello , {user?.name || 'User'}</Text>
      </View>
      <View style={{ gap: 6, flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 16, color: enabled ? 'green' : 'red' }}>
          {enabled ? 'veg' : 'Non veg'}
        </Text>
        <Switch
          trackColor={{ false: 'red', true: 'green' }}
          thumbColor={enabled ? 'green' : 'red'}
          value={enabled}
          onValueChange={(value) => setisenabled(!enabled)}
        />
      </View>
    </View>
  )
}

export default Introheader