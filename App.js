import React, { useState } from 'react';
import ListingsScreen from './app/screens/ListingsScreen';
import AccountScreen from './app/screens/AccountScreen';
import AppTextInput from './app/components/AppTextInput';
import Screen from './app/components/Screen';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';

// const categories=[
//   {label:"Bike", value:1},
//   {label:"Motocross", value:2},
//   {label:"Motocycle", value:3},
//   {label:"Scooter", value:4},
// ]
// const [category, setCategory]=useState(categories[0]);
// <Screen>
// <AppPicker 
// selectedItem={category}
// onSelectItem={(item)=>setCategory(item)}
// items={categories} icon='apps'></AppPicker>
// </Screen>

export default function App() {
  
  return (
    <LoginScreen></LoginScreen>
  )
}

