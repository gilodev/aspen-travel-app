import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ title, libelle, image }) => (
  <View style={styles.card}>
    <View style={styles.imageContainer}>
      <View style={styles.libelleContainer}>
        <Text style={styles.libelleText}>{libelle}</Text>
      </View>
      <Image source={image} style={styles.cardImage} />
    </View>
    <View style={styles.heartContainer}>
      <Ionicons size={25} name="heart" color="#EC5655" />
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.cardDesc}>
        4 guest - 2 bedrooms - 2 beds - 1 bathroom
      </Text>
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.cardPrice}>$ 109 - night</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 300,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 15,
    backgroundColor: "#F4F4F4",
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 15,
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "60%",
  },
  cardPrice: {
    fontWeight: "bold",
    fontSize: 16,
  },
  cardDesc: {
    fontSize: 12,
    color: "grey",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "flex-end",
  },
  contentContainer: {
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    flex: 1,
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  libelleContainer: {
    backgroundColor: "#3A544F",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#F4F4F4",
    position: "absolute",
    bottom: -10,
    right: 15,
    zIndex: 99999,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  libelleText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  heartContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#eee",
    borderRadius: 20,
    padding: 5,
  },
});

export default Card;
