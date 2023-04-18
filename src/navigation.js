import SplashScreen from './Screen/Splash/Splash'
import LoginScreen from './Screen/Login/Login'
import RetrievalScreen from './Screen/RegardingPassword/PasswordRetrieval'
import MainScreen from './Screen/MainScreen/MainScreen'
import AccountScreen from './Screen/HomeTab/AccountScreen/AccountScreen'
import EditAccountScreen from './Screen/HomeTab/AccountScreen/EditAccountScreen'
import NotifyScreen from './Screen/NotifyScreen/NotifyScreen'
import DashboardScreen from './Screen/HomeTab/DashboardScreen/DashboardScreen'
import HomeTab from './Screen/HomeTab/TabNavigation'
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { Easing } from "react-native";
const Stack = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name= "Retrieval" component={RetrievalScreen} />
          <Stack.Screen name="mainScreen" component={MainScreen} />
          <Stack.Screen name="AccountScreen" component={AccountScreen} />
          <Stack.Screen name="EditAccountScreen" component={EditAccountScreen} />
          <Stack.Screen name='NotifyScreen' component={NotifyScreen} />
          <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
          <Stack.Screen name='HomeTab' component={HomeTab} />
        </Stack.Navigator>
      );
}

export default MyStack