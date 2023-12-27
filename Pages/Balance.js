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

export default function Balance({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.servicesTitle}>Balance</Text>

        <TouchableOpacity onPressIn={() => navigation.navigate("Services")}>
          <Image
            source={require("../assets/images/back.png")}
            style={styles.backBtn}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.balanceContent}>
          <Text>Account No: 342344555</Text>
          <View
            style={{ display: "flex", flexDirection: "row", paddingTop: 10 }}
          >
            <Text>Name:</Text>
            <Text style={{ paddingLeft: 15, fontWeight: "500" }}>
              {" "}
              Mike Doe
            </Text>
          </View>
        </View>

        <View style={styles.balanceCard}>
          <View style={{ paddingVertical: 40, paddingHorizontal: 47 }}>
            <Text
              style={{
                textAlign: "center",
                color: COLORS.lightWhite,
                paddingHorizontal: 45,
              }}
            >
              Balance
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: COLORS.lightWhite,
                fontSize: 34,
              }}
            >
              Ksh 200,000
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  servicesTitle: HEADER.servicesTitle,
  backBtn: HEADER.backBtn,
  balanceContent: {
    alignSelf: "center",
    display: "flex",
    paddingTop: 130,
  },
  balanceCard: {
    backgroundColor: COLORS.primary,
    marginTop: 50,
    borderRadius: 13,
    alignSelf: "center",
    display: "flex",
  },
  balanceCardText: {
    textAlign: "center",
  },
});
