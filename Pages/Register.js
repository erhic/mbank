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

export default function Register({ navigation }) {
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
          // onChangeText={onChangeText}
          // placeholder="Enter first name"
          // placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
        <Text style={styles.registerLabelFour}>Last Name</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          // placeholder="Enter last name"
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
        <Text style={styles.registerLabelOne}>Account No</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          // placeholder="Enter account number"
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
      </View>
      <View>
        <Text style={styles.registerLabelTwo}>PIN</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangePin}
          placeholder="********"
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
      </View>
      <TouchableOpacity style={styles.registerBtn}>
        <Text
          style={{
            backgroundColor: COLORS.primary,
            color: COLORS.lightWhite,
            paddingHorizontal: 40,
            paddingVertical: 10,
            borderRadius: 10,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
      <View
        style={{
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
          paddingVertical: 15,
        }}
      >
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ paddingLeft: 10 }}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  registerLabelOne: {
    // textAlign: "center",
    paddingLeft: 60,
    paddingTop: 10,
    color: COLORS.secondary,
    paddingBottom: 10,
  },
  registerLabelTwo: {
    // textAlign: "center",
    paddingLeft: 60,
    color: COLORS.secondary,
    paddingTop: 10,
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
  registerBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 44,
  },
  logoImg: {
    backgroundColor: COLORS.primary,
    alignSelf: "center",
    display: "flex",

    width: 100,
    objectFit: "contain",
  },
  registerLabelthree: {
    // textAlign: "center",
    paddingLeft: 60,
    color: COLORS.secondary,
    paddingTop: 10,
    paddingBottom: 10,
  },
  registerLabelFour: {
    // textAlign: "center",
    paddingLeft: 60,
    color: COLORS.secondary,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
