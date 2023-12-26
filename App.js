import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Services from "./Pages/Services";
import Deposit from "./Pages/Deposit";
import Balance from "./Pages/Balance";
import Cheque from "./Pages/Cheque";
import Tips from "./Pages/Tips";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./Routes";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Cheque />
    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
