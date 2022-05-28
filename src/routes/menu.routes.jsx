import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Checkpoint } from "../screams/Check";
import { Home } from "../screams/Home";
import { Timer } from "../screams/Timer";
import { MyTabBar } from "../components/menuBar";
import {useState} from "react";
import {sortCommands} from "../utils/commands";

const tab = createBottomTabNavigator();

export function Routes() {
  const [instructions, setInstructions] = useState(sortCommands());
  return (
    <tab.Navigator tabBar={props => <MyTabBar callback={setInstructions} {...props} />}

      screenOptions={{
        headerShown: false,
      }}
    >
      <tab.Screen
        name='Home'
        children={ () => <Home inst={instructions}></Home>}
      />
      <tab.Screen
        name='Checkpoint'
        component={Checkpoint}
      />
      <tab.Screen
        name="Timer"
        component={Timer}
      />
    </tab.Navigator>
  )
}
