import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";

const PopularCard = ({ name, rating, image, price }) => {
  const data = {
    name,
    image,
    price,
    rating,
  };

  const encodedData = encodeURIComponent(JSON.stringify(data));
  return (
    <Link
      href={{
        pathname: "/details",
        params: { data: encodedData },
      }}
      asChild
    >
      <Pressable>
        {({ pressed }) => (
          <View style={[styles.card, pressed && styles.pressed]}>
            <Image source={image} style={styles.image} />
            <View style={styles.overlay}>
              <View>
                <View style={styles.nameContainer}>
                  <Text style={styles.name}>{name}</Text>
                </View>
                <View style={styles.infoContainer}>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.star}>★</Text>
                    <Text style={styles.rating}>{rating}</Text>
                  </View>
                  <View style={styles.heartContainer}>
                    <Ionicons size={20} name="heart" color="#EC5655" />
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: "hidden",
    width: 190,
    height: 220,
    marginRight: 15,
  },
  pressed: {
    opacity: 0.75,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: 12,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 4,
    alignSelf: "flex-start",
  },
  name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    fontSize: 14,
  },
  rating: {
    color: "white",
    fontSize: 14,
  },
  heartContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 6,
  },
});

export default PopularCard;
