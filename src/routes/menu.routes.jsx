import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Checkpoint } from "../screams/Check";
import { Home } from "../screams/Home";
import { Timer } from "../screams/Timer";
import { Rules } from "../screams/Rules";
import { MyTabBar } from "../components/menuBar";

const tab = createBottomTabNavigator();

export function Routes() {
  return (
    <tab.Navigator tabBar={props => <MyTabBar {...props} />}

      screenOptions={{
        headerShown: false,
      }}
    >
      <tab.Screen
        name='Home'
        component={Home}
      />
      <tab.Screen
        name='Checkpoint'
        component={Checkpoint}
      />
      <tab.Screen
        name="Timer"
        component={Timer}
      />
      <tab.Screen
        name="Rules"
        component={Rules}
      />
    </tab.Navigator>
  )
}