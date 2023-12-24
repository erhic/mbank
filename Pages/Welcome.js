import React from "react";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../assets/styles/Utils";
export default function Welcome() {
  return (
    <View>
      {/* <View
        style={{
          padding: 70,
          backgroundColor: COLORS.primary,
          borderBottomEndRadius: 50,
          borderBottomLeftRadius: 50,
        }}
      >
        <Image
          style={styles.welcomeImg}
          source={require("../assets/images/logo.png")}
        />
        <Text style={styles.mainTitle}>mBank</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={{
              backgroundColor: COLORS.primary,
              color: COLORS.lightWhite,
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text
            style={{
              backgroundColor: COLORS.primary,
              color: COLORS.lightWhite,
              paddingHorizontal: 30,
              paddingVertical: 10,
              borderRadius: 10,
            }}
          >
            Register
          </Text>
        </TouchableOpacity> 
      </View>*/}

      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeImg: {
    backgroundColor: COLORS.primary,
    alignSelf: "center",
    display: "flex",

    width: 100,
    objectFit: "contain",
  },
  mainTitle: {
    textAlign: "center",
    color: COLORS.lightWhite,
    fontWeight: "bold",
    fontSize: 35,
    display: "flex",
    position: "absolute",
    paddingLeft: 134,
    paddingTop: 228,
  },
  loginBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  registerBtn: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 166,
    borderRadius: 4,
  },
});
