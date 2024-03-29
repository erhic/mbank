import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { COLORS, HEADER } from "../assets/styles/Utils";

export default function Tips({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.servicesTitle}>Financial Tips</Text>
        <TouchableOpacity onPressIn={() => navigation.navigate("Services")}>
          <Image
            source={require("../assets/images/back.png")}
            style={styles.backBtn}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignSelf: "center",
          justifyContent: "center",
          display: "flex",
          paddingTop: 80,
        }}
      >
        <Text>1. Plan your spending .</Text>
        <Text>2. Save , Save More , and Keep Saving .</Text>
        <Text>3. Put Yourself on a Budget .</Text>
        <Text>4. Learn to Invest .</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  servicesTitle: HEADER.servicesTitle,
  backBtn: HEADER.backBtn,
});
