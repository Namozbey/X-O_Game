import { StyleSheet } from 'react-native';

export const changeStyle = (val = '#007bff', level = "easy") => {
  let color = val
  let easyColor = '#181818'
  let normalColor = '#181818'
  let hardColor = '#181818'

  if(level === 'easy') {
    easyColor = color
  } else if(level === 'normal') {
    normalColor = color
  } else if(level === 'hard') {
    hardColor = color
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#181818',
      padding: 0,
      margin: 0,
      // borderColor: color,
      // borderWidth: 1
    },
    top: {
      height: '4%',
      backgroundColor: color,
    },
    colorButtons: {
      justifyContent: 'center',
      flexDirection: 'row',
    },
    redButton: {
      padding: 20,
      backgroundColor: '#C42817'
    },
    yellowButton: {
      padding: 20,
      backgroundColor: '#D0FF00' 
    },
    greenButton: {
      padding: 20,
      backgroundColor: '#18A911' 
    },
    blueButton: {
      padding: 20,
      backgroundColor: '#007bff' 
    },
    info: {
      padding: 3,
      position: 'absolute',
      top: '4%'
    },
    main: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
    },
    row: {
      flexDirection: 'row',
    },
    col: {
      width: 100,
      height: 100,
      padding: 5,
    },
    touchableCol: {
      borderRadius: 10,
    },
    card: {
      justifyContent: 'center',
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: color,
      borderRadius: 10,
      width: '100%',
      height: '100%',
      // shadowOpacity: 1,
      // shadowColor: color,
      // shadowRadius: 200,
      // shadowOffset: {width: 10, height: 10},
    },
    text: {
      fontFamily: 'road-rage',
      fontSize: 55,
      textAlign: 'center',
      margin: 0,
      color: '#fff'
    },
    restart: {
      marginTop: 44,
    },
    restartIcon: {
      width: 40,
      height: 40,      
    },
    levelsGroup: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    levelEasy: {
      borderColor: easyColor,
      borderWidth: 1,
      borderBottomWidth: 0,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    levelNormal: {
      borderColor: normalColor,
      borderWidth: 1,
      borderBottomWidth: 0,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    levelHard: {
      borderColor: hardColor,
      borderWidth: 1,
      borderBottomWidth: 0,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
    },
    levelText: {
      fontSize: 20,
      textAlign: 'center',
      color: '#fff',
      marginHorizontal: 10,
      marginVertical: 5,
    },
    bottom: {
      height: '4%',
      width: '100%',
      backgroundColor: color,
      // alignItems: 'flex-end',
      // position: 'absolute',
      // bottom: 0,
    },
  });

  return styles;
}
