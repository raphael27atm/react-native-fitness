import React from 'react'
import { View, Slider, Text } from 'react-native'

export default function UdaciSlider ({step, max, unit, value, onChange}) {
  return (
    <View>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      >
      </Slider>
      <Text>{value}</Text>
      <Text>{unit}</Text>
    </View>
  )
}