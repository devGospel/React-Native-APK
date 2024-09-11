import { View, Text } from 'react-native'
import React from 'react'
import ColorList from '../components/ColorList'

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <ColorList color="red"/>
    </View>
  )
}

export default Profile