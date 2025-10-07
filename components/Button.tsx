import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button() {
  return (

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Lorem, ipsum.</Text>
      </TouchableOpacity>

  )
}

const styles = StyleSheet.create({

  button: {
    backgroundColor: '#F472B6',
    paddingVertical: 19,
    paddingHorizontal: 100,
    borderRadius: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  }
})