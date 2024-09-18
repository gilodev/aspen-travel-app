import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/cosmic-timetraveler.jpg")}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Aspen</Text>
        <View>
          <Text style={styles.subtitle1}>Plan your</Text>
          <Text style={styles.subtitle2}>Luxurious Vacation</Text>
          <Link href="/explore" asChild>
            <TouchableOpacity style={styles.exploreButton}>
              <Text style={styles.exploreButtonText}>Explore</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    fontSize: 100,
    fontWeight: "bold",
    color: "white",
    marginTop: 30,
    textAlign: "center",
    fontFamily: "Hiatus",
  },
  subtitle1: {
    fontSize: 24,
    color: "white",
    fontWeight: "300",
  },
  subtitle2: {
    fontSize: 40,
    color: "white",
    fontWeight: "400",
    marginBottom: 20,
    width: "50%",
  },
  exploreButton: {
    backgroundColor: "#176FF2",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  exploreButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HomeScreen;
