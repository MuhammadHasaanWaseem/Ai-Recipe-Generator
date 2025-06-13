import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({ label, onpress }: any) => {
    return (
        <TouchableOpacity onPress={onpress} style={{
            backgroundColor: 'white',
            paddingVertical: 14,
            paddingHorizontal: 40,
            borderRadius: 19,
            marginTop: 5,
            borderWidth: 1,
            borderColor: 'black',
            elevation: 3,
            width: '100%'
        }}>
            <Text style={{
                color: 'green',
                textAlign: 'center',
                fontFamily: 'outfit-bold',
                fontSize: 16,
            }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default Button