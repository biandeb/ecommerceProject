import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import OrdersStack from "./OrdersStack";
import TabBarIcon from "../components/TabBarIcon";
import { colors } from "../global/colors";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon focused={focused} text="Shop" icon="shopping-bag" />
            );
          },
        }}
      />
      <Tab.Screen
        name="OrdersStack"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon focused={focused} text="Orders" icon="list" />;
          },
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon focused={focused} text="Cart" icon="shopping-cart" />
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <TabBarIcon focused={focused} text="Profile" icon="user-circle" />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.beige1,
    shadowColor: "black",
    elevation: 4,
    position: "absolute",
    height: 110,
  },
});
