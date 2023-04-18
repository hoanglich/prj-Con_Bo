import { useState } from 'react'
import {View,Text, TouchableWithoutFeedback} from 'react-native'
import MyRadioButton from './RadioButton'

const RadioButtonContainer =({radio_props,initValue,hanldeFirmChoice,props})=>{
    
    return(
        <View>
            {radio_props.map((item, index)=> {
                return (
                    <TouchableWithoutFeedback onPress={()=>hanldeFirmChoice(index)} key={index}>
                        <View style={{
                                flexDirection:'row',
                                justifyContent:'space-between',
                                height: 57,
                                borderTopColor: '#F6F6F6',
                                borderTopWidth: 1,
                                alignItems: 'center',
                             }}
                        >
                            <Text style={{marginLeft: 20, color: '#212121'}} >{item.lable}</Text>
                            <MyRadioButton isSelected={item.isSelect} />
                        </View>
                    </TouchableWithoutFeedback>
                )
            })}

        </View>
    )
}

export default RadioButtonContainer