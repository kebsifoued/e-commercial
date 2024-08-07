import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import * as Yup from 'yup'
import { Formik } from 'formik';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import AppFormPicker from '../components/AppFormPicker';
import CategoryPickerItem from '../components/CategoryPickerItem';

const categories=[
  {label:"Bike", value:1, backgroundColor:'green', icon:"bike"},
  {label:"Motocross", value:2, backgroundColor:'blue', icon:"motorbike"},
  {label:"Motocycle", value:3, backgroundColor:'red', icon:"motorbike-electric"},
  {label:"Scooter", value:4, backgroundColor:'grey', icon:"scooter"},
]
const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required'),
    price: Yup.number()
      .required('Price is required'),
    description: Yup.string(),
    category: Yup.object()
      .required().nullable().label("Category")
  }); 

function EditItemScreen() {

    return (
       <Screen style={styles.container}>
        <Formik 
        initialValues={{
          title:"",
          price:"",
          description:"",
          category:null
        }}
        onSubmit={(values=>console.log(values))}
        validationSchema={validationSchema}
        >
        {()=>(
        <>
        <AppFormField 
        name="title"
        placeholder="title" 
          />
        <AppFormField 
        name="price"
        keyBoardType='numeric'
        maxLengh={6}
        placeholder="Price" 
          />
        <AppFormPicker
        name="category"
        items={categories}
        placeholder="Category" 
          />
          <AppFormField 
          name="description"
        multiline
        placeholder="Description" 
          />

        <SubmitButton title="Post" />
        </>
        )}
        </Formik>
    </Screen>
    );
}
const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    logo:{
        width: 80, 
        height:80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
})

export default EditItemScreen;