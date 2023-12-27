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

export default function Login({ navigation }) {
  // const [text, onChangeText] = React.useState("Enter account no. here");
  // const [pinText, onChangePin] = React.useState("Enter PIN here");
  // const [number, onChangeNumber] = React.useState("");
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: COLORS.primary,
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
          // placeholder="Enter account number"
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
      </View>
      <View>
        <Text style={styles.loginLabelTwo}>PIN</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangePin}
          placeholder="*******"
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Services")}
      >
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
      <View style={styles.register}>
        <Text style={styles.registerText}>Dont have an account</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerLink}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loginLabelOne: {
    // textAlign: "center",
    paddingLeft: 60,
    paddingTop: 55,
    color: COLORS.secondary,
    paddingBottom: 10,
  },
  loginLabelTwo: {
    // textAlign: "center",
    paddingLeft: 60,
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
  registerText: {
    color: COLORS.secondary,
    borderRadius: 10,
  },
  registerLink: {
    color: COLORS.secondary,
    paddingLeft: 10,
  },
  register: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
});
