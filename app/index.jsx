import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";
import imageCoffee from "@/assets/images/coffe-cup.jpg";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageCoffee}
        resizeMethod="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Coffe Shope</Text>
        <Link style={styles.link} href={"/contact"} asChild>
          <Pressable>
            <Text>Explore</Text>
          </Pressable>
        </Link>
        <Link style={styles.link} href={"/menu"} asChild>
          <Pressable>
            <Text>Menu</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    resizeMode: "cover",
  },
  text: {
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    marginTop: 30,
  },
});
