// import { Text, View, Button } from 'react-native';
// import React, {useState} from 'react';
// import { _styles } from './style/Style'


// export default function App() {
//     const styles = _styles;
  
//     const [count, setCount] = useState([])
  
//     const join = (index) => {
//       let _data = count;
//       _data[index] = 'O'
//       return _data
//     }
  
//     return (
//         <>
//             <Button 
//                 title='click' 
//                 onPress={() => {setCount(join(0)); console.log(count)}} 
//             />
//             <Button 
//                 title='click' 
//                 onPress={() => {setCount(join(1)); console.log(count)}} 
//             />

//             <View style={styles.card} >
//                 <Text style={styles.text}>{count[0] ? count[0] : ''}</Text>
//                 <Text style={styles.text}>{count[1] ? count[1] : ''}</Text>
//             </View>
//         </>        
//     );
//   }
  