import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Button from './button'


const CreateRecipe = () => {
    const [userinput,setuserinput]=useState('');
   
    return (
        <View style={style.container}>
            <Image
                source={require('../assets/gif/pan.gif')}
                style={
                    style.panstyle
                }
            />
            <Text style={style.headline}>
                Tie your apron, sharpen your skills  it's time to cook
            </Text>
            <Text style={style.subheadline}>
                Start Cooking
            </Text>
            <TextInput
            style={style.input}
            multiline={true}
            numberOfLines={3}
            placeholder='Enter The promt to store your recipe'
         //   value={userinput}
            onChangeText={(value)=>setuserinput(value)}
            />
            <Button onpress={()=>console.log(userinput)} label={'🥣 generate'}/>
        </View>
    )
}

export default CreateRecipe
const style = StyleSheet.create(
    {
        container: {
            marginTop: '5%',
            padding: '5%',
            backgroundColor: '#55ff7a',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center'
        },
        panstyle: {
            width: 80,
            height: 80
        },
        headline: {
            fontSize: 15,
            textAlign: 'center',
            fontFamily: 'outfit',
        },
        subheadline: {
            fontSize: 20,
            fontFamily: 'outfit-bold',
            textAlign: 'center'
        },
        input:{
            width: '100%',
            textAlign:'center',
            padding:40,
            height:100,
            margin:4,
            color:'black',
            borderWidth:1,
            borderColor:'black',
            borderRadius:14,
            backgroundColor:'white'
        }
    }
)