// components/dashboard.js

import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import firebase from "../Database/firebase";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Camera from "./Camera";
import Profile from "./Profile";
import Statistics from "./Statistics";
import Home from "./Home";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Statistics" component={Statistics} />
    </Tab.Navigator>
  );
}

export default class DashboardScreen extends Component {
  constructor() {
    super();
    this.state = {
      uid: "",
    };
  }
  signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.navigation.navigate("Login");
      })
      .catch((error) => this.setState({ errorMessage: error.message }));
  };
  render() {
    this.state = {
      displayName: firebase.auth().currentUser.displayName,
      uid: firebase.auth().currentUser.uid,
    };
    return (
      <MyTabs />
      /* <Text style={styles.textStyle}>Hello, {this.state.displayName}</Text>
        <Button color="#3740FE" title="Logout" onPress={() => this.signOut()} /> */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 35,
    backgroundColor: "#fff",
  },
  textStyle: {
    fontSize: 15,
    marginBottom: 20,
  },
});

// import React, { Component } from "react";
// import { Button, View, Text, StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createAppContainer, createSwitchNavigator } from "react-navigation";
// //import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import firebase from "../Database/firebase";

// class DashboardScreen extends Component {
//   HomeScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Home</Text>
//         <Button
//           title="Go to profile"
//           onPress={() => navigation.navigate("Profile")}
//         />
//       </View>
//     );
//   }

//   Profile({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Profile</Text>
//         <Button
//           title="Go to camera"
//           onPress={() => navigation.navigate("Camera")}
//         />
//       </View>
//     );
//   }

//   Camera({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Camera</Text>
//         <Button
//           title="Go to statistics"
//           onPress={() => navigation.navigate("Statistics")}
//         />
//       </View>
//     );
//   }

//   Statistics({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>Statistics</Text>
//         <Button
//           title="Go to home"
//           onPress={() => navigation.navigate("Profile")}
//         />
//       </View>
//     );
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text> DashboardScreen </Text>
//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Profile" component={Profile} />
//             <Stack.Screen name="Camera" component={Camera} />
//             <Stack.Screen name="Statistics" component={Statistics} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </View>
//     );
//   }
// }
// export default DashboardScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });