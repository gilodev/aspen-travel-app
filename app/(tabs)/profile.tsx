import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from "react-native";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const ProfileScreen = () => {
  const [isPushEnabled, setPushEnabled] = useState(true);
  const [isFaceIdEnabled, setFaceIdEnabled] = useState(true);

  const togglePushSwitch = () =>
    setPushEnabled((previousState) => !previousState);
  const toggleFaceIdSwitch = () =>
    setFaceIdEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Text style={styles.username}>Gilodev</Text>
        <Text style={styles.email}>gilo.dev@aspen.com</Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Inventories</Text>
        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <FontAwesome5 name="hotel" size={24} color="black" />
            <Text style={styles.menuItemText}>My reservations</Text>
          </View>
          <View style={styles.menuItemRight}>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <FontAwesome5 name="headset" size={24} color="black" />
            <Text style={styles.menuItemText}>Support</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>

        <View style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <Ionicons name="notifications-outline" size={24} color="black" />
            <Text style={styles.menuItemText}>Push notifications</Text>
          </View>
          <Switch value={isPushEnabled} onValueChange={togglePushSwitch} />
        </View>

        <View style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <MaterialCommunityIcons
              name="face-recognition"
              size={24}
              color="black"
            />
            <Text style={styles.menuItemText}>Face ID</Text>
          </View>
          <Switch value={isFaceIdEnabled} onValueChange={toggleFaceIdSwitch} />
        </View>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuItemLeft}>
            <FontAwesome5 name="lock" size={24} color="black" />
            <Text style={styles.menuItemText}>PIN Code</Text>
          </View>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={24} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginTop: 80,
    marginBottom: 30,
  },

  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "gray",
  },
  editProfileButton: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 10,
  },
  editProfileText: {
    color: "white",
    fontWeight: "bold",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  menuItemRight: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },

  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  logoutText: {
    fontSize: 18,
    color: "red",
    marginLeft: 10,
  },
});

export default ProfileScreen;
