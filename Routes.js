import { StyleSheet } from "react-native";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Services from "./Pages/Services";
import Deposit from "./Pages/Deposit";
import Balance from "./Pages/Balance";
import Cheque from "./Pages/Cheque";
import Pin from "./Pages/Pin";
import Tips from "./Pages/Tips";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Deposit"
        component={Deposit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Services"
        component={Services}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cheque"
        component={Cheque}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tips"
        component={Tips}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Balance"
        component={Balance}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Pin"
        component={Pin}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
