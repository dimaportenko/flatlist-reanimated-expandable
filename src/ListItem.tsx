import React, { useState } from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { DataItemType } from "./data";

export const ListItem = ({ item }: { item: DataItemType }) => {
  const [expanded, setExpanded] = useState(false);

  const onItemPress = () => {
    setExpanded(!expanded);
  };

  return (
    <TouchableOpacity
      style={styles.wrap}
      onPress={onItemPress}
      activeOpacity={0.7}
    >
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.title}</Text>
          <Text style={styles.text}>{item.subtitle}</Text>
        </View>
      </View>
      {expanded && (
        <Text style={[styles.details, styles.text]}>{item.details}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrap: {
    borderColor: "#ccc",
    borderWidth: 1,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
  },
  container: { flexDirection: "row" },
  image: { width: 50, height: 50, margin: 10, borderRadius: 5 },
  textContainer: { justifyContent: "space-around" },
  details: { margin: 10 },
  text: { opacity: 0.7 },
});
