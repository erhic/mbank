import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, HEADER } from "../assets/styles/Utils";

export default function Tips() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.servicesTitle}>Financial Tips</Text>

        <Image
          source={require("../assets/images/back.png")}
          style={styles.backBtn}
        />
      </View>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  servicesTitle: HEADER.servicesTitle,
  backBtn: HEADER.backBtn,
});
