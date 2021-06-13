import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      {/*Today's tasks*/}
<View style= {styles.tasksWrapper}>
      <Text style= {styles.sectionTitle}>Today's Task</Text>
     <View style={styles.items}>
  {/*This is where the tasks go */} 

  <Task text= {'Task1'}/>
  <Task text= {'Task2'}/>   
   </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
   
  },
  sectionTitle:{
fontSize:20,
  },
  tasksWrapper:{
paddingTop:80,
paddingHorizontal:20
  },
  items:{
marginTop:30
  },
});
