import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cio}>
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
    cio:{
        paddingVertical: 7,
        paddingHorizontal: 13,
        borderRadius: 30,
        marginTop: 5,
        backgroundColor: 'black',
    },
    title:{
        color: '#FFF', fontWeight: 'bold'
    }
})


