import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Register from "../screens/Register";
import Login from "../screens/Login";
import LandingPage from "../screens/LandingPage";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => {
        return {
          header: () => (
            <Header
              title={
                route.name === "Login"
                  ? "Login"
                  : route.name === "Register"
                  ? "Register"
                  : ""
              }
            />
          ),
        };
      }}
    >
      <Stack.Screen
        name="LandingPage"
        component={LandingPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
