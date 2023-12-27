import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, HEADER } from "../assets/styles/Utils";

export default function Pin({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.servicesTitle}>Change PIN</Text>

        <TouchableOpacity onPressIn={() => navigation.navigate("Services")}>
          <Image
            source={require("../assets/images/back.png")}
            style={styles.backBtn}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 60 }}>
        <Text style={styles.registerLabelTwo}> Old PIN</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangePin}
          placeholder="********"
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />

        <Text style={styles.registerLabelTwo}> New PIN</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangePin}
          placeholder="********"
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
      </View>
      <View>
        <Text style={styles.registerLabelTwo}> Confirm New PIN</Text>
        <TextInput
          style={styles.input}
          // onChangeText={onChangePin}
          placeholder="********"
          placeholderTextColor={(style = { color: COLORS.lightWhite })}
        />
      </View>
      <TouchableOpacity
        style={styles.registerBtn}
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
          Change
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  servicesTitle: HEADER.servicesTitle,
  backBtn: HEADER.backBtn,
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
});
