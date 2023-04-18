import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './AccountScreen/AccountScreen';
import DashboardScreen from './DashboardScreen/DashboardScreen';
import GrowthScreen from './GrowthScreen/GrowthScreen';
import CategoryScreen from './CategoryScreen/CategoryScreen';
import {image} from '../../../access/image'
const Tab = createBottomTabNavigator();

const HomeTab =()=> {

    return (
          <Tab.Navigator
            screenOptions={
                
              ({ route }) => ({
              tabBarIcon: ({ focused }) => {
                let iconName
                if (route.name === 'Dashboard') {
                  iconName = focused
                    ? image.iconDashboardActive
                    : image.iconDashboardNoActive;
                } else if (route.name === 'Tài khoản') {
                  iconName = focused ? image.iconUserActive : image.iconUserNoActive;
                }
                else if (route.name === 'Danh mục') {
                  iconName = focused ? image.iconCategoryActive : image.iconCategoryNoActive;
                }
                else if (route.name === 'Sinh trưởng bò') {
                  iconName = focused ? image.iconProfitActive : image.iconProfitNoActive;
                }
                // You can return any component that you like here!
                return <Image source={iconName}  />;
              },
              tabBarActiveTintColor: '#006013',
              tabBarInactiveTintColor: '#797979',
              tabBarIconStyle: {
                marginTop: 16,
              },
              tabBarStyle: {
                height: 70,
              },
              tabBarLabelStyle: {
                fontSize: 14,
                marginBottom: 9,

              }
              
            })}
            backBehavior={'firstRoute'}
          >
            <Tab.Screen options={{headerShown: false}} name='Dashboard' component={DashboardScreen} />
            <Tab.Screen options={{headerShown: false}} name='Danh mục' component={CategoryScreen} />
            <Tab.Screen options={{headerShown: false}} name='Sinh trưởng bò' component={GrowthScreen} />
            <Tab.Screen options={{headerShown: false}} name="Tài khoản" component={AccountScreen} />
          </Tab.Navigator>
      );
}

export default HomeTab