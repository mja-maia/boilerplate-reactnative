/* global __DEV__ */

import React from "react";
import { Text, View } from "react-native";

import { registerRootComponent } from "expo";

if (__DEV__) {
  import("./config/ReactotronConfig").then(() =>
    console.log("Reactotron Configured")
  );
}

const App = (): JSX.Element => {
  return (
    <View>
      <Text>BoilerPlate</Text>
    </View>
  );
};

export default registerRootComponent(App);
