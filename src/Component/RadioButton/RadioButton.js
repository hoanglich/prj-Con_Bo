import {View} from 'react-native'
import { useState } from 'react'

const MyRadioButton=({isSelected}) => {
    const [isSelect, setIsSelect] = useState(isSelected)
    return (
        <View
            style={[{
                height: 24,
                width: 24,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: '#006013',
                alignItems: 'center',
                justifyContent: 'center', 
                marginRight:16      
            }]}
        >   
            {isSelected ? 
            <View
                style={{
                height: 12,
                width: 12,
                borderRadius: 6,
                backgroundColor: '#006013',}}
            /> : null}
        </View>
    )
}

export default MyRadioButton