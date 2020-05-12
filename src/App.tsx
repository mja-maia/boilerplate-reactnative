import React from "react";
import { registerRootComponent } from "expo";
import { Text, View } from "react-native";

const App = (): JSX.Element => {
  return (
    <View>
      <Text>BoilerPlate</Text>
    </View>
  );
};

export default registerRootComponent(App);
