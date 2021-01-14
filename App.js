import * as Font from 'expo-font'
import { changeStyle } from './styles/style'
import { Ionicons, Feather } from '@expo/vector-icons';
import React, {useState, useEffect} from 'react'
import { join, clear, checkWinner, changeLevel } from './components/main'
import { Text, View, Alert, TouchableHighlight, TouchableOpacity } from 'react-native'

export default function App() {
  const [styles, SetStyles] = useState(changeStyle);
  const [data, setData] = useState(["","","","","","","","",""])
  const [color, ChangeColor] = useState('#007bff')
  const [levelDegree, setLevelDegree] = useState('easy')

  useEffect(() => {
    Font.loadAsync({
      'road-rage': require('./assets/fonts/Road_Rage.otf'),
      // 'piedra-regular': require('./assets/fonts/Piedra-Regular.ttf'),
      // 'pangolin-regular': require('./assets/fonts/Pangolin-Regular.ttf'),
    });
  }, [])

  useEffect(() => {
    let winner = checkWinner();
    if(winner.win === 1) {
      Alert.alert(
        'Congratulations',
        'You win',
        [{ text: 'try again', onPress: restart }]
      );
    } else if(winner.win === -1) {
      Alert.alert(
        "it's a pity",
        'You lose',
        [{ text: 'try again', onPress: restart }]
      );
    } else if(winner.win === 0) {
      Alert.alert(
        '',
        'Draw',
        [{ text: 'try again', onPress: restart }]
      );
    }
  }, [data])
  
  const handleClick = index => {
    if(data[index] === "") {
      setData(data => data.map((elm, _index) => (index === _index ? 'X' : elm)))
      const index_O = join(index + 1) - 1
      setData(data => data.map((elm, _index) => (index_O === _index ? 'O' : elm)))
    }
  }

  const handleChangeColor = (val) => {
    ChangeColor(val)
    SetStyles(() => changeStyle(val, levelDegree))
  }

  const handleChangeLevel = (val) => {
    if(data.every(elm => elm == "")) {
      setLevelDegree(val)
      SetStyles(() => changeStyle(color, val))
      changeLevel(val)
    }    
  }

  const restart = () => {
    clear()
    setData(["","","","","","","","",""])
    // setResStyle(() => reload(true))
  }

  const info = () => {
    Alert.alert(
      'Info',
      `Rules: You begin first and play as 'X'
      
Color buttons: These buttons include four types of color that are red, yellow, green and blue. By the buttons you can change the color anytime.

Level buttons: These buttons include three types of level which are easy, normal, hard and by them you can change the level only at the beginning of the game or after you have restarted.

Creator: Namoz Ostonayev

Created date: 30.06.2020`,
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.colorButtons}>
        <TouchableOpacity onPress={() => handleChangeColor('#C42817')}>
          <View style={styles.redButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChangeColor('#D0FF00')}>
          <View style={styles.yellowButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChangeColor('#18A911')}>
          <View style={styles.greenButton} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChangeColor('#007bff')}>
          <View style={styles.blueButton} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.info} onPress={info}>
        <Feather name='info' color="#fff" size={25} />
      </TouchableOpacity>
      <View style={styles.main}>
        <View style={styles.row}>
          <View style={styles.col}>
            <TouchableHighlight style={styles.touchableCol} onPress={() => handleClick(0)}>
              <View style={styles.card}>
                <Text style={styles.text}>{data[0]}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.col}>
            <TouchableHighlight style={styles.touchableCol} onPress={() => handleClick(1)}>
              <View style={styles.card}>
                <Text style={styles.text}>{data[1]}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.col}>
            <TouchableHighlight style={styles.touchableCol} onPress={() => handleClick(2)}>
              <View style={styles.card}>
                <Text style={styles.text}>{data[2]}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <TouchableHighlight style={styles.touchableCol} onPress={() => handleClick(3)}>
              <View style={styles.card}>
                <Text style={styles.text}>{data[3]}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.col}>
            <TouchableHighlight style={styles.touchableCol} onPress={() => handleClick(4)}>
              <View style={styles.card}>
                <Text style={styles.text}>{data[4]}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.col}>
            <TouchableHighlight style={styles.touchableCol} onPress={() => handleClick(5)}>
              <View style={styles.card}>
                <Text style={styles.text}>{data[5]}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <TouchableHighlight style={styles.touchableCol} onPress={() => handleClick(6)}>
              <View style={styles.card}>
                <Text style={styles.text}>{data[6]}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.col}>
            <TouchableHighlight style={styles.touchableCol} onPress={() => handleClick(7)}>
              <View style={styles.card}>
                <Text style={styles.text}>{data[7]}</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.col}>
            <TouchableHighlight style={styles.touchableCol} onPress={() => handleClick(8)}>
              <View style={styles.card}>
                <Text style={styles.text}>{data[8]}</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.restart} 
          onPress={restart}
        >
          <Ionicons name='md-refresh' size={50} color='#fff' />
        </TouchableOpacity>        
      </View>
      <View style={styles.levelsGroup}>
        <TouchableOpacity 
          style={styles.levelEasy} 
          onPress={() => {handleChangeLevel('easy')}}
        >
          <Text style={styles.levelText}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.levelNormal}
          onPress={() => {handleChangeLevel('normal')}}
        >
          <Text style={styles.levelText}>Normal</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.levelHard}
          onPress={() => {handleChangeLevel('hard')}}
        >
          <Text style={styles.levelText}>Hard</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom} />
    </View>
  );
}
