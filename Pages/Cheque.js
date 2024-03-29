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

export default function Cheque({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.servicesTitle}>Cheque</Text>

        <TouchableOpacity onPressIn={() => navigation.navigate("Services")}>
          <Image
            source={require("../assets/images/back.png")}
            style={styles.backBtn}
          />
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 450,
          }}
        >
          <Text style={{ fontSize: 17 }}>Cheque to Stop</Text>
          <View
            style={{
              // backgroundColor: COLORS.white, // borderBottomColor: "#000000",
              borderBottomWidth: 1,
            }}
          >
            <TextInput
              editable
              multiline
              placeholder="enter the cheque number here"
              // numberOfLines={1}
              // maxLength={40}
              // onChangeText={(text) => onChangeText(text)}
              // value="Value here"
              style={{ padding: 20, fontSize: 21 }}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{ paddingVertical: 30 }}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.proceedBtn}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  servicesTitle: HEADER.servicesTitle,
  backBtn: HEADER.backBtn,
  proceedBtn: {
    backgroundColor: COLORS.primary,
    color: COLORS.lightWhite,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
