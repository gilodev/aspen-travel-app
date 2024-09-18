import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const Card = ({ name, libelle, image, price, rating }) => {
  const router = useRouter();

  const data = {
    name,
    image,
    price,
    rating,
  };

  const encodedData = encodeURIComponent(JSON.stringify(data));

  const handlePress = () => {
    router.push({
      pathname: "/details",
      params: {
        data: encodedData,
      },
    });
  };
  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <View style={styles.libelleContainer}>
          <Text style={styles.libelleText}>{libelle}</Text>
        </View>
        <Image source={image} style={styles.cardImage} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.cardTitle}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    height: 250,
    aspectRatio: 1,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 15,
    backgroundColor: "#F4F4F4",
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
    height: "70%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "flex-end",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  star: {
    color: "gold",
    marginRight: 4,
    fontSize: 12,
  },
  rating: {
    color: "white",
    fontSize: 10,
  },
  libelleContainer: {
    backgroundColor: "#3A544F",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#F4F4F4",
    position: "absolute",
    bottom: -10,
    right: 5,
    zIndex: 99999,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  libelleText: {
    color: "#fff",
    fontSize: 10,
    textAlign: "center",
  },
});

export default Card;
