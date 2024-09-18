import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HotelReservationFeatures = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>how does it works?</Text>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.card, styles.card1]}>
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={40}
              color="black"
            />
            <Text style={styles.cardTitle}>Find the Perfect Stay</Text>
            <Text style={styles.cardText}>
              Browse hotels in your favorite destinations with just a few
              clicks.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card2]}>
            <MaterialCommunityIcons
              name="calendar-check-outline"
              size={40}
              color="black"
            />
            <Text style={styles.cardTitle}>Easy Booking</Text>
            <Text style={styles.cardText}>
              Reserve your room instantly with our seamless booking process.
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={[styles.card, styles.card3]}>
            <MaterialCommunityIcons
              name="cash-multiple"
              size={40}
              color="black"
            />
            <Text style={styles.cardTitle}>Best Price Guarantee</Text>
            <Text style={styles.cardText}>
              Get the best rates and exclusive deals available only on our app.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card, styles.card4]}>
            <MaterialCommunityIcons
              name="star-outline"
              size={40}
              color="black"
            />
            <Text style={styles.cardTitle}>Top-Rated Service</Text>
            <Text style={styles.cardText}>
              Enjoy excellent service at top-rated hotels curated just for you.
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    margin: 5,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 0 },
    elevation: 3,
  },
  card1: {
    backgroundColor: "#ff9a8d",
  },
  card2: {
    backgroundColor: "#3478F6",
  },
  card3: {
    backgroundColor: "#a4e786",
  },
  card4: {
    backgroundColor: "#d98bff",
  },
  cardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  cardText: {
    color: "white",
    textAlign: "center",
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
  },
});

export default HotelReservationFeatures;
