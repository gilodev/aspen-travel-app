import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams, useRouter } from "expo-router";

const DetailScreen = () => {
  const router = useRouter();
  const { data } = useLocalSearchParams();

  const paramsData = JSON.parse(decodeURIComponent(data));

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={paramsData.image} style={styles.image} />
          <View style={styles.overlay}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Ionicons name="chevron-back" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.heartButton}>
              <Ionicons name="heart" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.heading}>
            <Text style={styles.title}>{paramsData.name}</Text>
            <Text style={styles.readMore}>Show map</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={16} color="#DF9652" />
            <Text style={styles.rating}>{paramsData.rating} (355 Reviews)</Text>
          </View>
          <Text style={styles.description}>
            Aspen is as close as one can get to a storybook alpine town in
            America. The choose-your-own-adventure possibilities—skiing, hiking,
            dining, shopping and ....
          </Text>
          <TouchableOpacity style={styles.ReadmoreContainer}>
            <Text style={styles.readMore}>Read more</Text>
            <Ionicons
              name="arrow-down"
              size={16}
              color={Colors.light.primary}
            />
          </TouchableOpacity>
          <Text style={styles.facilityTitle}>Facilities</Text>
          <View style={styles.facilitiesContainer}>
            <View style={styles.facilityItem}>
              <Ionicons name="wifi" size={35} color="#B8B8B8" />
              <Text style={styles.facilityText}>1 Heater</Text>
            </View>
            <View style={styles.facilityItem}>
              <Ionicons name="restaurant" size={35} color="#B8B8B8" />
              <Text style={styles.facilityText}>Dinner</Text>
            </View>
            <View style={styles.facilityItem}>
              <MaterialCommunityIcons
                name="bathtub"
                size={35}
                color="#B8B8B8"
              />
              <Text style={styles.facilityText}>1 Tub</Text>
            </View>
            <View style={styles.facilityItem}>
              <MaterialCommunityIcons name="pool" size={35} color="#B8B8B8" />
              <Text style={styles.facilityText}>Pool</Text>
            </View>
          </View>
          <View style={styles.bookingContainer}>
            <View>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.price}>${paramsData.price}</Text>
            </View>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book Now</Text>
              <MaterialCommunityIcons
                name="arrow-right-thin"
                size={20}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  heartButton: {
    position: "absolute",
    bottom: -20,
    right: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
  },
  content: {
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rating: {
    marginLeft: 5,
    fontSize: 12,
  },
  description: {
    fontSize: 15,
    color: "#666",
    marginBottom: 10,
  },
  readMore: {
    color: Colors.light.primary,
    fontWeight: "bold",
    fontSize: 14,
    marginRight: 5,
  },
  ReadmoreContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  facilitiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  facilityItem: {
    alignItems: "center",
    backgroundColor: "#E7E9F3",
    padding: 10,
    width: "20%",
    borderRadius: 10,
  },
  facilityText: {
    fontSize: 10,
    color: "#B8B8B8",
    marginTop: 1,
  },
  facilityTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 25,
    marginBottom: 15,
  },
  bookingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,

    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 20,
  },
  priceLabel: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2DD7A4",
  },
  bookButton: {
    backgroundColor: Colors.light.primary,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bookButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default DetailScreen;
