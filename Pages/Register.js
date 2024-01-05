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
import { useState, useEffect } from "react";
import axios from "axios";
import { COLORS, REGISTERSTYLES } from "../assets/styles/Utils";

export default function Register({ navigation }) {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [accountno, setAccountNo] = useState("");
  const [pin, setPin] = useState("");

  const [isSubmit, setIsSubmit] = useState(false);

  const userHandler = (text) => {
    setFirstName(text);
  };

  const userLstnameHandler = (text) => {
    setLastName(text);
  };
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
          "https://mb4nk.000webhostapp.com/register.php",
          JSON.stringify({
            firstname: firstname,
            lastname: lastname,
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
        <Text style={styles.registerLabelthree}>First Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={userHandler}
          autoCapitalize="none"
        />
        <Text style={styles.registerLabelFour}>Last Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={userLstnameHandler}
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
        <Text style={styles.registerLabelOne}>Account No</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          autoCapitalize="none"
          onChangeText={accountHandler}
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
      </View>
      <View>
        <Text style={styles.registerLabelTwo}>PIN</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={pinHandler}
          placeholder="********"
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
      </View>
      <TouchableOpacity
        style={styles.registerBtn}
        onPress={() => setIsSubmit(true)}
      >
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ paddingLeft: 10 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  registerLabelOne: REGISTERSTYLES.registerLabelOne,
  registerLabelTwo: REGISTERSTYLES.registerLabelTwo,
  input: REGISTERSTYLES.input,
  registerBtn: REGISTERSTYLES.registerBtn,
  logoImg: REGISTERSTYLES.logoImg,
  registerLabelthree: REGISTERSTYLES.registerLabelthree,
  registerLabelFour: REGISTERSTYLES.registerLabelFour,
  btnContainer: REGISTERSTYLES.btnContainer,
  btnText: REGISTERSTYLES.btnText,
});
