import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { Redirect, router } from "expo-router";
import { useLogto } from "@logto/rn";
import GlobalApis from "@/services/GlobalApis";
import { UserContext } from "@/context/UserContext";

export default function Index() {
  const { getIdTokenClaims, isAuthenticated } = useLogto();
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const fetchUserData = async () => {
      if (isAuthenticated) {
        const userdata = await getIdTokenClaims();

        if (userdata?.email) {
          const result = await GlobalApis.getuserbyemail(userdata.email);

          if (!result.data.data) {
            // User not found, create new
            const newUser = {
              email: userdata.email,
              name: userdata.name,
              picture: userdata.picture,
            };
            const resp = await GlobalApis.createnewuser(newUser);
            setUser(resp.data.data);
          } else {
            // User exists
            setUser(result?.data?.data[0]);
          }
        }
      }
    };
 if (isAuthenticated && user) {
    
<Redirect href={'/(tabs)/Home'}   />
  }

    fetchUserData();
  }, [isAuthenticated, getIdTokenClaims]);

  // If authenticated and user exists, redirect to /home
  

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
<Redirect href={'/(tabs)/Home'}   />

    </View>
  );
}
