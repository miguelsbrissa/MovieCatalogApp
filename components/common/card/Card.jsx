import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './cardStyle'

const Card = ({ item }) => {
  const { container, movieImg, movieTitle } = styles
  return (
    <TouchableOpacity style={container}>
      <Text style={movieTitle} numberOfLines={1}>Spider-Man: Into the Spider-Verse</Text>
      <Image source={{ uri: item }} resizeMode={'cover'} style={movieImg} />
    </TouchableOpacity>
  )
}

export default Card
