import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "@/components/SearchBar";
import PopularCard from "@/components/PopularCard";
import Card from "@/components/Card";
import {
  popularDestinations,
  recommendDestinations,
} from "@/data/destinations";
import { Colors } from "@/constants/Colors";

const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Explore</Text>
          <TouchableOpacity style={styles.locationButton}>
            <Ionicons name="location" size={16} color={Colors.light.primary} />
            <Text style={styles.locationText}>Aspen, USA</Text>
            <Ionicons
              name="arrow-down"
              size={16}
              color={Colors.light.primary}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Aspen</Text>
        <SearchBar placeholder="Find things to do" />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryScrollContent}
        >
          {["Location", "Hotels", "Food", "Adventure", "Art"].map(
            (category, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.categoryButton,
                  index === 0 && styles.activeCategoryButton,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    index === 0 && styles.activeCategoryText,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            )
          )}
        </ScrollView>
        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Popular</Text>
          <TouchableOpacity>
            <Text style={styles.textButton}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popularDestinations.map((item, index) => (
            <PopularCard
              key={index}
              name={item.name}
              image={item.image}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </ScrollView>
        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Recommended</Text>
        </View>
        <View style={styles.recommendedContainer}>
          {recommendDestinations.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              image={item.image}
              libelle={item.libelle}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </View>
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
  locationText: {
    marginHorizontal: 5,
    color: Colors.light.primary,
    fontWeight: "600",
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
    fontSize: 18,
    fontWeight: "500",
  },
  recommendedContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
});

export default ExploreScreen;
