import React, { useContext } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Marquee } from '@animatereactnative/marquee';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from '@/services/Colors';
import { router } from 'expo-router';
import { useLogto } from '@logto/rn';
import { UserContext } from '@/context/UserContext';

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

  const { setUser } = useContext(UserContext);
  const logto = useLogto();

  const handleSignIn = async () => {
    try {
      await logto.signIn('exp://192.168.100.140:8081');
      const userInfo = await logto.fetchUserInfo();
      setUser(userInfo);
      router.push('/');
    } catch (error) {
      console.error('Sign-in error:', error);
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Marquee Section */}
      <View style={styles.marqueeWrapper}>
        {[0, 1, 2].map((item, index) => (
          <Marquee
            key={index}
            speed={3}
            reverse={index % 2 === 1}
            style={styles.marquee}
          >
            <View style={styles.imageRow}>
              {imagelist.map((img, i) => (
                <Image key={i} source={img} style={styles.image} />
              ))}
            </View>
          </Marquee>
        ))}
      </View>

      {/* Info Text Section */}
      <View style={styles.infoSection}>
        <Text style={styles.titleText}>Your AI Recipe Founder</Text>
        <Text style={styles.subtitleText}>
          A smart culinary companion that instantly crafts personalized recipes tailored to your taste
        </Text>
      </View>

      {/* Button Section */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignIn} style={styles.getStartedButton}>
          <Text style={styles.getStartedText}>Getting Started</Text>
        </TouchableOpacity>
      </View>
    </GestureHandlerRootView>
  );
};

export default Landing;


const styles = StyleSheet.create({
  marqueeWrapper: {
    marginTop: Platform.select({
      android: 20,
      ios: 30,
      default: 20,
    }),
  },
  marquee: {
    transform: [{ rotate: '-3deg' }],
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 19,
    marginRight: 8,
  },
  infoSection: {
    padding: Platform.select({
      android: '16%',
      web: '4%',
      ios: '12%',
      default: '12%',
    }),
    backgroundColor: Colors.WHITE,
  },
  titleText: {
    fontFamily: 'outfit-bold',
    textAlign: 'center',
    fontSize: 22,
    color: 'black',
  },
  subtitleText: {
    fontFamily: 'outfit',
    textAlign: 'center',
    fontSize: 15,
    color: Colors.Gray,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#009000',
    paddingVertical: 14,
    paddingHorizontal: 58,
    borderRadius: 19,
    elevation: 3,
  },
  getStartedText: {
    color: 'white',
    fontFamily: 'outfit-bold',
    fontSize: 16,
  },
});











// import React from 'react';
// import { View, Image, Text, StyleSheet, TouchableOpacity, Platform, Button } from 'react-native';
// import { Marquee } from '@animatereactnative/marquee';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import Colors from '@/services/Colors';
// import { router } from 'expo-router';
// import { useLogto } from '@logto/rn';

// const Landing = () => {
//     const imagelist = [
//         require('../assets/images/1.jpg'),
//         require('../assets/images/c1.jpg'),
//         require('../assets/images/2.jpg'),
//         require('../assets/images/c2.jpg'),
//         require('../assets/images/3.jpg'),
//         require('../assets/images/c3.jpg'),
//         require('../assets/images/4.jpg'),
//         require('../assets/images/5.jpg'),
//         require('../assets/images/6.jpg'),
//     ];
//       const { signIn, signOut, isAuthenticated } = useLogto();


//     return (
//         <GestureHandlerRootView>
//             <View>
//                 <Marquee speed={3} style={{ transform: [{ rotate: '-4deg' }] }}>
//                     <View style={styles.imagecontainer}>
// {imagelist.map((image, index) => (
//     <Image key={index} source={image} style={styles.image} />
// ))}
//                     </View>
//                 </Marquee>

//                 <Marquee reverse speed={3} style={{ transform: [{ rotate: '-4deg' }] }}>
//                     <View style={styles.imagecontainer}>
// {imagelist.map((image, index) => (
//     <Image key={index} source={image} style={styles.image} />
// ))}
//                     </View>
//                 </Marquee>

//                 <Marquee speed={3} style={{ transform: [{ rotate: '-4deg' }] }}>
//                     <View style={styles.imagecontainer}>
// {imagelist.map((image, index) => (
//     <Image key={index} source={image} style={styles.image} />
// ))}
//                     </View>
//                 </Marquee>
                
//             </View>
//             <View style={[styles.platformbasedview,{backgroundColor:Colors.WHITE}]} >
//                         <Text style={{fontFamily:'outfit-bold',textAlign:'center',fontSize:20}}> Your Ai Recipe Founder</Text>
//                         <Text style={{fontFamily:'outfit-bold',textAlign:'center',fontSize:15,color:Colors.Gray}}>
//                         A smart culinary companion that instantly crafts personalized recipes tailored to your taste</Text>

//             </View>
//             <View style={{alignItems:'center'}}>
//                 {/* {!isAuthenticated ?( */}
//                 <TouchableOpacity onPress={async () => {
//                     await signIn('exp://192.168.100.140:8081');
//                     router.push('/');
//                 }} style={[styles.platformbased,{backgroundColor:'#009000',borderRadius:19}]}>
//                 <Text style={{color:'white',fontFamily:'outfit-bold',textAlign:'center'}}>Getting Started</Text>

//                 </TouchableOpacity>
//                 {/* ):( */}
//                 {/* <Button title='Logout' onPress={ async ()=> signOut()}/> */}
//                     {/* )} */}
//             </View>
//         </GestureHandlerRootView>
//     );
// };

// export default Landing;

// const styles = StyleSheet.create({
//     image: {
//         width: 160,
//         height: 160,
//         borderRadius: 19,
//     },
//     imagecontainer: {
//         flexDirection: 'row',
//         display: 'flex',
//         gap: '0.5%',
//         marginRight: '1%',
//         marginTop: '1%',
//     },
//     platformbased:{
//         // padding:Platform.OS==='android' ? '5%' : Platform.OS==='web'?'2%' : '4%',
//         padding: Platform.select({
//             android: '6%',
//             web: '2%',
//             // everything else (iOS, native desktop, etc.)
//             default: '3%',})
//     },
//     platformbasedview:{
//         // padding:Platform.OS==='android' ? '5%' : Platform.OS==='web'?'2%' : '4%',
//         padding: Platform.select({
//             android: '20%',
//             web: '2%',
//             // everything else (iOS, native desktop, etc.)
//             default: '10%',})
//     }
// });