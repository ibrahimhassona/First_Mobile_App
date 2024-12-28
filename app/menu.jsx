import { Colors } from "@/constants/Colors";
import {
  Appearance,
  StyleSheet,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
} from "react-native";
import MenuItems from "@/constants/MenuItems";
import MenuImages from "@/constants/ImagesData";
import React from "react";
export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyles(theme, colorScheme);
  console.log(MenuItems);

  // Conditionally choose the container component based on the platform
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  return (
    <Container>
      <FlatList
        data={MenuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <Image
              source={MenuImages[1] }  // Fallback image in case of invalid id
              style={styles.image}
            />
          </View>
        )}
      />
    </Container>
  );
}

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    itemContainer: {
      flexDirection: "row", // Ensure the image and text are aligned horizontally
      padding: 10,
      marginBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
    },
    textContainer: {
      flex: 1, // Ensures text takes up remaining space
      marginRight: 10,
    },
    title: {
      fontWeight: "bold",
      fontSize: 18,
    },
    description: {
      color: "#555",
      fontSize: 14,
    },
    image: {
      width: 100, // Set a fixed width for the image
      height: 100, // Set a fixed height for the image
      borderRadius: 8, // Optional: adds rounded corners to the image
    },
  });
}
