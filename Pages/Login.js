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
import { user_login } from "./userapi";

export default function Login({ navigation }) {
  const [accNo, setAccNo] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [seePassword, setSeePassword] = React.useState(true);
  const [checkValidAccount, setcheckValidAccount] = React.useState(false);
  const eyeActive = require("../assets/icons/iconseyesee.png");
  const eye = require("../assets/icons/iconhide.png");

  const handleAccNo = (text) => {
    let numberRegex = /^\d+$/;
    setAccNo(text);
    if (!numberRegex) {
      setcheckValidAccount(false);
    } else {
      setcheckValidAccount(true);
    }
  };
  const passwordValidity = (text) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(text)) {
      return "password must not contain whitespace";
    }
    const isContainUpperCase = /^\(?=.*[A-Z]).*/;
    if (!isContainUpperCase.test(text)) {
      return "password must atleast one upppercase character";
    }
    const isContainLowerCase = /^\(?=.*[a-z]).*/;
    if (!isContainLowerCase.test(text)) {
      return "password must atleast one lowercase character";
    }
    const isContainNumber = /^\(?=.*[0-9]).*/;
    if (!isContainNumber.test(text)) {
      return "password must contain atleast one digit";
    }
    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(text)) {
      return "password must be 8-16 character long";
    }
    return null;
  };

  const handleLogin = () => {
    const checkPassword = passwordValidity(password);
    if (!checkPassword) {
      user_login({
        accNo: accNo,
        password: password,
      })
        .then((result) => {
          if (result.status == 200) {
            AsyncStorage.setItem("AccessToken", result.data.token);
            navigation.replace("Services");
          }
        })
        .catch((err) => {
          console.err(err);
        });
    } else {
      alert(checkPassword);
    }
    console.log("llll");
  };
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
        {checkValidAccount ? <Text>Wrong format</Text> : <Text>.</Text>}
        <TextInput
          style={styles.input}
          value={accNo}
          keyboardType="numeric"
          onChangeText={(text) => handleAccNo(text)}
          // placeholder="Enter account number"
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
      </View>

      <View>
        <Text style={styles.loginLabelTwo}>PIN</Text>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <TextInput
            style={styles.inputPass}
            value={password}
            secureTextEntry={seePassword}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor={(style = { color: COLORS.lightWhite })}
          />
          <TouchableOpacity onPressIn={() => setSeePassword(!seePassword)}>
            <Image
              style={styles.eyeIcon}
              source={setPassword ? eye : eyeActive}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
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
  inputPass: {
    height: 40,
    marginLeft: 55,
    borderWidth: 1,
    padding: 10,
    width: 269,
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
  eyeIcon: {
    // // position: "absolute",
    // paddingTop: -40,
    // display: "flex",
    // flexDirection: "row",
    // paddingLeft: 50,
    objectFit: "contain",
    width: 30,
    marginLeft: -40,
  },
});
