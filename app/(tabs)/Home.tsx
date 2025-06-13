import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Colors from '@/services/Colors'
import Introheader from '@/components/introheader'
import CreateRecipe from '@/components/createrecipe'
import Catogories from '@/components/Catogories'

const Home = () => {
  return (
    <ScrollView style={{height:'100%',padding:'4%',marginTop:'5%',backgroundColor:Colors.WHITE}}>
      {/* intro component */}
      <Introheader/>
      {/* recipe ui */}
       <CreateRecipe/>
      {/* catgories ui */}
      <Catogories/>

      </ScrollView>
  )
}

export default Home