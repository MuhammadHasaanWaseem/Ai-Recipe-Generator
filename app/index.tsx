import {  View } from "react-native";
import { Redirect } from "expo-router";
import React from "react";
import { useLogto } from "@logto/rn";
import { useEffect } from "react";
export default function Index() {
    const { getIdTokenClaims, isAuthenticated } = useLogto();
useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then((userdata) => {
        console.log('--',userdata); // { sub: '...', ... }
      });
    }
  }, [isAuthenticated, getIdTokenClaims]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    > 
      {/* <Redirect href={'/Landing'}/> */}
    </View>
  );
}
