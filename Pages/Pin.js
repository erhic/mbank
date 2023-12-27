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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  servicesTitle: HEADER.servicesTitle,
  backBtn: HEADER.backBtn,
});
