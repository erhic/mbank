import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { COLORS, LOGINSTYLES } from "../assets/styles/Utils";

export default function Login({ navigation }) {
  const [accountno, setAccountNo] = useState("");
  const [pin, setPin] = useState("");
  const [seePin, setSeepin] = useState(true);
  const eyeActive = require("../assets/icons/iconseyesee.png");
  const eye = require("../assets/icons/iconhide.png");

  const [isSubmit, setIsSubmit] = useState(false);

  const accountHandler = (text) => {
    setAccountNo(text);
  };
  const pinHandler = (text) => {
    setPin(text);
  };

  useEffect(() => {
    const authenticate = (async) => {
      axios
        .post(
          "https://bakntest24.000webhostapp.com/login.php",
          JSON.stringify({
            accountno: accountno,
            pin: pin,
          })
        )
        .then((response) => {
          console.log(response);
          setIsSubmit(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    if (isSubmit) authenticate();
  }, [isSubmit]);

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
          value={accountno}
          keyboardType="numeric"
          onChangeText={accountHandler}
          // placeholder="Enter account number"
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
      </View>

      <View>
        <Text style={styles.loginLabelTwo}>PIN</Text>

        <View style={{ display: "flex", flexDirection: "row" }}>
          <TextInput
            style={styles.inputPass}
            value={pin}
            secureTextEntry={seePin}
            onChangeText={pinHandler}
            placeholderTextColor={(style = { color: COLORS.lightWhite })}
          />
          <TouchableOpacity onPressIn={() => setSeepin(!seePin)}>
            <Image style={styles.eyeIcon} source={setPin ? eye : eyeActive} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => setIsSubmit(true)}
      >
        <Text style={styles.textBtn}>Login</Text>
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
  loginLabelOne: LOGINSTYLES.loginLabelOne,
  loginLabelTwo: LOGINSTYLES.loginLabelTwo,
  input: LOGINSTYLES.input,
  inputPass: LOGINSTYLES.inputPass,
  loginBtn: LOGINSTYLES.loginBtn,
  logoImg: LOGINSTYLES.logoImg,
  registerText: LOGINSTYLES.registerLink,
  registerLink: LOGINSTYLES.registerLink,
  register: LOGINSTYLES.register,
  eyeIcon: LOGINSTYLES.eyeIcon,
  textBtn: LOGINSTYLES.textBtn,
});
