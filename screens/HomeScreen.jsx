import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Flatlist,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
const HomeScreen = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const time = new Date().getHours();
    if (time >= 1 && time < 12) {
      setGreeting("Good Morning,");
    } else if (time >= 12 && time < 17) {
      setGreeting("Good Afternoon,");
    } else {
      setGreeting("Good Evening,");
    }
  }, []);
  return (
    <SafeAreaView>
      <View style={{ marginTop: 30, marginLeft: 15 }}>
        <Text>{greeting}</Text>
      </View>
      <View style={styles.header}>
        <Text>FurnishPik</Text>
        <TouchableOpacity>
          <AntDesign
            name="shoppingcart"
            size={20}
            color={"grey"}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search Here" style={styles.searchText} />
        <TouchableOpacity>
          <AntDesign
            name="search1"
            size={20}
            color={"grey"}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
    borderWidth: 1,
    borderColor: "red",
    height: 35,
    marginTop: 10,
  },
  searchText: {
    padding: 5,
  },
});
