import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeDrawerContents from "../components/HomeDrawerContents";
import Home from "../screens/Home";
import Menu from "../screens/Menu";

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {


    return (
      
      <Drawer.Navigator drawerContent={props => <HomeDrawerContents {...props} />}>

          <Drawer.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Drawer.Screen name="Menu" component={Menu} options={{headerShown: false}} />

      </Drawer.Navigator>
      
    )
  }