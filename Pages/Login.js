import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { COLORS } from "../assets/styles/Utils";

export default function Login() {
  // const [text, onChangeText] = React.useState("Enter account no. here");
  // const [pinText, onChangePin] = React.useState("Enter PIN here");
  // const [number, onChangeNumber] = React.useState("");
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: 0,
        }}
      >
        <Image
          style={styles.logoImg}
          source={require("../assets/images/logo.png")}
        />
      </View>
      <View>
        <Text style={styles.loginLabelOne}>Account No</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          placeholder="Enter account number"
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
      </View>
      <View>
        <Text style={styles.loginLabelTwo}>PIN</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangePin}
          placeholder="Enter account PIN"
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
      </View>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginLabelOne: {
    textAlign: "center",
    paddingTop: 95,
    color: COLORS.secondary,
    paddingBottom: 10,
  },
  loginLabelTwo: {
    textAlign: "center",
    color: COLORS.secondary,
    paddingTop: 20,
    paddingBottom: 10,
  },
  input: {
    height: 40,
    marginHorizontal: 55,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.lightWhite,
  },
  loginBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  logoImg: {
    backgroundColor: COLORS.primary,
    alignSelf: "center",
    display: "flex",

    width: 100,
    objectFit: "contain",
  },
});
