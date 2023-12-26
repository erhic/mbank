import React from "react";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { COLORS } from "../assets/styles/Utils";
export default function Welcome() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.welcomeImg}
          source={require("../assets/images/logo.png")}
        />
        <Text style={styles.mainTitle}>mBank</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welcomeImg: {
    objectFit: "contain",
    width: 100,
  },
  mainTitle: {
    textAlign: "center",
    alignItems: "center",
    color: COLORS.lightWhite,
    fontWeight: "bold",
    fontSize: 35,
  },
});
