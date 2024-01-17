import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.rootViewStyle}>
      <View style = {styles.topViewStyle}>
      <Text style={styles.text1Style}>Box 1</Text>
      <Text style={styles.text2Style}>Box 2</Text>
      </View>
      <View style = {styles.bottomViewStyle}>
      <Text style={styles.text3Style}>Box 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  //box object model
  // viewStyle: {
  //   marginTop:40,
  //   // marginStart:40,
  //   borderWidth:3,
  //   borderColor:'black'
  // },
//flex box model
  // viewStyle: {
  //   flex:1,
  //   flexDirection:'column',
  //   alignItems:'baseline',
  //   borderColor:'blakc',
  //  // height:400,// if flex used no height attri needed
  //   justifyContent:'space-around',
  //   borderWidth:2
  // },

  // textStyle:{
  //     fontSize:20,
  //     borderColor:'red',
  //     margin:20,
  //     color:'blue',
  //     borderWidth:2,
  //     paddingLeft:40,
  //     paddingBottom:50,
  //     paddingTop:50
  // }
  //Flex model
//   text1Style:{
//     fontSize:20,
//     borderColor:'red',
//     color:'blue',
//     borderWidth:2
// },
// text2Style:{
//   fontSize:20,
//   borderColor:'red',
//   color:'blue',
//   borderWidth:2,
//   flex:1

// },
// text3Style:{
//   fontSize:20,
//   borderColor:'red',
//   color:'blue',
//   borderWidth:2,
//   alignSelf:'stretch', //alignSelf is for child alignItem, similar to parent 
//   flex:1
// }
rootViewStyle: {
    flex:1,
    flexDirection:'column'
  },
topViewStyle: {
  //   flex:1,
  //   flexDirection:'column',
  //   alignItems:'baseline',
  //   borderColor:'blakc',
  //  // height:400,// if flex used no height attri needed
  //   justifyContent:'space-around',
  //   borderWidth:2
  },
  bottomViewStyle: {
    flex:1,
    flexDirection:'column',
    alignItems:'baseline',
    borderColor:'blakc',
   // height:400,// if flex used no height attri needed
    justifyContent:'space-around',
    borderWidth:2
  },
  text1Style:{
    fontSize:20,
    borderColor:'red',
    color:'blue',
    borderWidth:2
},
text2Style:{
  fontSize:20,
  borderColor:'red',
  color:'blue',
  borderWidth:2,
  flex:1

},
text3Style:{
  fontSize:20,
  borderColor:'red',
  color:'blue',
  borderWidth:2,
  alignSelf:'stretch', //alignSelf is for child alignItem, similar to parent 
  flex:1
}


});
