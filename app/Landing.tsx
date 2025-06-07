import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform, Button } from 'react-native';
import { Marquee } from '@animatereactnative/marquee';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from '@/services/Colors';
import { router } from 'expo-router';
import { useLogto } from '@logto/rn';

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
      const { signIn, signOut, isAuthenticated } = useLogto();


    return (
        <GestureHandlerRootView>
            <View>
                <Marquee speed={3} style={{ transform: [{ rotate: '-4deg' }] }}>
                    <View style={styles.imagecontainer}>
{imagelist.map((image, index) => (
    <Image key={index} source={image} style={styles.image} />
))}
                    </View>
                </Marquee>

                <Marquee reverse speed={3} style={{ transform: [{ rotate: '-4deg' }] }}>
                    <View style={styles.imagecontainer}>
{imagelist.map((image, index) => (
    <Image key={index} source={image} style={styles.image} />
))}
                    </View>
                </Marquee>

                <Marquee speed={3} style={{ transform: [{ rotate: '-4deg' }] }}>
                    <View style={styles.imagecontainer}>
{imagelist.map((image, index) => (
    <Image key={index} source={image} style={styles.image} />
))}
                    </View>
                </Marquee>
                
            </View>
            <View style={[styles.platformbasedview,{backgroundColor:Colors.WHITE}]} >
                        <Text style={{fontFamily:'outfit-bold',textAlign:'center',fontSize:20}}> Your Ai Recipe Founder</Text>
                        <Text style={{fontFamily:'outfit-bold',textAlign:'center',fontSize:15,color:Colors.Gray}}>
                        A smart culinary companion that instantly crafts personalized recipes tailored to your taste</Text>

            </View>
            <View style={{alignItems:'center'}}>
                {!isAuthenticated ?(
                <TouchableOpacity onPress={async () => {
                    await signIn('exp://jnprhae-hasaan-8081.exp.direct');
                    router.push('/');
                }} style={[styles.platformbased,{backgroundColor:'#009000',borderRadius:19}]}>
                <Text style={{color:'white',fontFamily:'outfit-bold',textAlign:'center'}}>Getting Started</Text>

                </TouchableOpacity>):(
                <Button title='Logout' onPress={ async ()=> signOut()}/>)}
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
    platformbased:{
        // padding:Platform.OS==='android' ? '5%' : Platform.OS==='web'?'2%' : '4%',
        padding: Platform.select({
            android: '6%',
            web: '2%',
            // everything else (iOS, native desktop, etc.)
            default: '3%',})
    },
    platformbasedview:{
        // padding:Platform.OS==='android' ? '5%' : Platform.OS==='web'?'2%' : '4%',
        padding: Platform.select({
            android: '20%',
            web: '2%',
            // everything else (iOS, native desktop, etc.)
            default: '10%',})
    }
});
