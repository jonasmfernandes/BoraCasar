import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

export default function Button() {
  return (

    <TouchableOpacity>
      <LinearGradient
        colors={['#F43F5E', '#F472B6']}
        start={{ x: 0.93, y: 0.75 }}
        end={{ x: 0.07, y: 0.25 }}
        style={styles.gradient}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </LinearGradient>
    </TouchableOpacity>

  )
} 
const styles = StyleSheet.create({

  gradient: {
    width: 327,
    paddingVertical: 19,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 14.65,
    elevation: 8,
  },
  buttonText: {
    fontFamily: 'Inter_400Regular',
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center', 
  },
})