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
import { COLORS, HEADER } from "../assets/styles/Utils";

export default function Deposit({ navigation }) {
  const [amount, setAmount] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const amountHandler = (text) => {
    setAmount(text);
  };
  useEffect(() => {
    const deposit = (async) => {
      axios
        .post(
          "https://bakntest24.000webhostapp.com/deposit.php",
          JSON.stringify({
            amount: amount,
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
    if (isSubmit) deposit();
  }, [isSubmit]);
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.servicesTitle}>Deposit here</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Services")} />
        <Image
          source={(require = "../assets/images/back.png")}
          style={styles.backBtn}
        />

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 450,
          }}
        >
          <Text style={{ fontSize: 17 }}>Amount to Deposit</Text>
          <View
            style={{
              // backgroundColor: COLORS.white, // borderBottomColor: "#000000",
              borderBottomWidth: 1,
            }}
          >
            <TextInput
              editable
              multiline
              style={{ padding: 20, fontSize: 21 }}
              value={amount}
              keyboardType="numeric"
              onChangeText={amountHandler}
            />
          </View>
          <View>
            <TouchableOpacity
              style={{ paddingVertical: 30 }}
              onPress={() => setIsSubmit(true)}
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
