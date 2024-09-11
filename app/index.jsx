import {View, Text} from 'react-native'
import React from 'react'
import ColorList from '../components/ColorList'

const Home = () => {
  return (
    <View>
        <Text>
            Home
        </Text>

        <ColorList color="#0891b2"/>

    </View>
  )
}

export default Home