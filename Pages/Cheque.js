import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, HEADER } from "../assets/styles/Utils";

export default function Cheque() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.servicesTitle}>Cheque</Text>

        <Image
          source={require("../assets/images/back.png")}
          style={styles.backBtn}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  servicesTitle: HEADER.servicesTitle,
  backBtn: HEADER.backBtn,
});
