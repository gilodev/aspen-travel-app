import React from "react";
import { Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import FavoriteCard from "@/components/FavoriteCard";
import { recommendDestinations } from "@/data/destinations";
import { Colors } from "@/constants/Colors";

const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text style={styles.sectionTitle}>My favorites</Text>

        {recommendDestinations.map((item, index) => (
          <FavoriteCard
            key={index}
            title={item.name}
            image={item.image}
            libelle={item.libelle}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "400",
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "400",
    marginBottom: 20,
  },
  sectionHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 25,
  },
  textButton: {
    color: Colors.light.primary,
    fontWeight: "600",
  },
  categoryScroll: {
    flexGrow: 0,
  },
  categoryScrollContent: {
    marginVertical: 10,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 20,
  },
  activeCategoryButton: {
    backgroundColor: "#F3F8FE",
  },
  categoryText: {
    fontSize: 16,
    color: "#B8B8B8",
    fontWeight: "500",
  },
  activeCategoryText: {
    color: Colors.light.primary,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  recommendedContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
});

export default ExploreScreen;
