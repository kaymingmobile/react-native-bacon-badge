import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Badge } from 'react-native-elements'
//import { observer } from 'mobx-react'

const styles = {
  view: {
    margin: 7, 
    flexDirection: 'row'
  },
  yesContainerStyle : { 
    backgroundColor: 'white', 
    borderColor: '#d63768', 
    borderWidth: 1
  },
  noContainerStyle : { 
    paddingLeft: 20, 
    backgroundColor: 'white', 
    borderColor: '#d63768', 
    borderWidth: 1
  },
  noImage: { 
    position:'absolute',
    left: 8, 
    bottom: 9
  },
  text: {
    color: '#d63768'
  }
}

const BaconBadgeYes = ({ text, onPress }) => {
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.view}>
        <Badge containerStyle={styles.yesContainerStyle}>
          <Text style={styles.text}>{ text }</Text>
        </Badge>
      </View>
    </TouchableOpacity>
  )
}

const BaconBadgeNo = ({ text, onPress }) => {
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.view}>
        <Badge containerStyle={styles.noContainerStyle}>
          <Text style={styles.text}>{ text }</Text>
        </Badge>
        <Image style={styles.noImage} source={require('./Images/btn_interest_del.png')}/>
      </View>
    </TouchableOpacity>
  )
}

export { BaconBadgeYes, BaconBadgeNo }
