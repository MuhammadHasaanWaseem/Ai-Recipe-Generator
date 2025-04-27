import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Marquee } from '@animatereactnative/marquee';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from '@/services/Colors';
import { router } from 'expo-router';

const Landing = () => {
    const imagelist = [
        require('../assets/images/1.jpg'),
        require('../assets/images/c1.jpg'),
        require('../assets/images/2.jpg'),
        require('../assets/images/c2.jpg'),
        require('../assets/images/3.jpg'),
        require('../assets/images/c3.jpg'),
        require('../assets/images/4.jpg'),
        require('../assets/images/5.jpg'),
        require('../assets/images/6.jpg'),
    ];

    return (
        <GestureHandlerRootView>
            <View>
                <Marquee speed={3} style={{ transform: [{ rotate: '-4deg' }] }}>
                    <View style={styles.imagecontainer}>
                        {imagelist.map((image, index) => (
                            <Image source={image} style={styles.image} />
                        ))}
                    </View>
                </Marquee>

                <Marquee reverse speed={3} style={{ transform: [{ rotate: '-4deg' }] }}>
                    <View style={styles.imagecontainer}>
                        {imagelist.map((image, index) => (
                            <Image source={image} style={styles.image} />
                        ))}
                    </View>
                </Marquee>

                <Marquee speed={3} style={{ transform: [{ rotate: '-4deg' }] }}>
                    <View style={styles.imagecontainer}>
                        {imagelist.map((image, index) => (
                            <Image source={image} style={styles.image} />
                        ))}
                    </View>
                </Marquee>
            </View>
            <View style={{backgroundColor:Colors.WHITE,padding:'8%',marginTop:'10%'}} >
                        <Text style={{fontFamily:'outfit-bold',textAlign:'center',fontSize:20}}> Your Ai Recipe Founder</Text>
                        <Text style={{fontFamily:'outfit-bold',textAlign:'center',fontSize:12,color:Colors.Gray}}>
                        A smart culinary companion that instantly crafts personalized recipes tailored to your taste</Text>

            </View>
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={()=>console.log('clicked')} style={{backgroundColor:'#009000',padding:'3%',borderRadius:19}}>
                <Text style={{color:'white',fontFamily:'outfit-bold'}}>Getting Started</Text>

                </TouchableOpacity>
            </View>
        </GestureHandlerRootView>
    );
};

export default Landing;

const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 160,
        borderRadius: 19,
    },
    imagecontainer: {
        flexDirection: 'row',
        display: 'flex',
        gap: '0.5%',
        marginRight: '1%',
        marginTop: '1%',
    },
});
