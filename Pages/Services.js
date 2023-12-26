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

export default function Services() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.servicesTitle}>Services</Text>
        <Image
          source={require("../assets/images/back.png")}
          style={styles.backBtn}
        />
      </View>
      <View>
        <View style={styles.rowOne}>
          <TouchableOpacity style={styles.depositBtn}>
            <Image
              source={require("../assets/icons/deposit.png")}
              style={{ objectFit: "contain", height: 45 }}
            />
            <Text style={{ textAlign: "center" }}>Deposit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.balanceBtn}>
            <Image
              source={require("../assets/icons/balance.png")}
              style={{
                objectFit: "contain",
                height: 40,
                alignSelf: "center",
                marginTop: 12,
              }}
            />
            <Text style={{ textAlign: "center" }}>Balance</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowTwo}>
          <TouchableOpacity style={styles.chequeBtn}>
            <Image
              source={require("../assets/icons/chequebook.png")}
              style={{
                objectFit: "contain",
                height: 45,
                alignSelf: "center",
                marginTop: 1,
              }}
            />
            <Text style={{ textAlign: "center" }}>Stop Cheque</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pinBtn}>
            <Image
              source={require("../assets/icons/account.png")}
              style={{
                objectFit: "contain",
                height: 45,
                alignSelf: "center",
                marginVertical: 0,
              }}
            />
            <Text style={{ textAlign: "center" }}>Change PIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.financialContainer}>
          <TouchableOpacity style={styles.tipsBtn}>
            <Image
              source={require("../assets/icons/info.png")}
              style={{
                objectFit: "contain",
                height: 45,
                alignSelf: "center",
                marginTop: 12,
              }}
            />
            <Text style={{ textAlign: "center" }}>Tips</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  servicesTitle: HEADER.servicesTitle,
  backBtn: HEADER.backBtn,
  rowOne: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 50,
    paddingBottom: 10,
  },
  rowTwo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
  },
  financialContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 25,
    paddingRight: 170,
  },
  depositBtn: {
    backgroundColor: COLORS.gray,
    paddingHorizontal: 22,
    paddingVertical: 22,
    borderRadius: 14,
    marginVertical: 10,
  },
  chequeBtn: {
    backgroundColor: COLORS.gray,
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 23,
  },
  balanceBtn: {
    backgroundColor: COLORS.gray,
    borderRadius: 14,
    paddingHorizontal: 29,
    marginVertical: 10,
    paddingVertical: 16,
  },
  pinBtn: {
    backgroundColor: COLORS.gray,
    borderRadius: 14,
    paddingHorizontal: 19,
    paddingVertical: 21,
  },
  tipsBtn: {
    backgroundColor: COLORS.gray,
    borderRadius: 14,
    paddingVertical: 18,
    paddingHorizontal: 30,
  },
});
