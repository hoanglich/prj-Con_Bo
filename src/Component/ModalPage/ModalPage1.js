import React, { useCallback, useEffect, useRef,useState } from 'react';
import { Text,
         View,
        StyleSheet,
        TouchableOpacity,
        Image,
        Animated,
        Button,
        Modal,
} from 'react-native';
import { Children } from 'react/cjs/react.production.min';


const ModalPage1 = ({props,visible,children}) => {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = useRef(new Animated.Value(0)).current;
    const {heightModal,...other} = props
    useEffect(()=> {
        toggleModal();
    },[visible]) 
    const toggleModal =()=>{
        if(visible){
            setShowModal(true);
            Animated.spring(scaleValue,{
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
        else {
            setTimeout(()=> setShowModal(false), 200);
            Animated.timing(scaleValue,{
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };


    return (
        <Modal  transparent visible={showModal}>
            <View style={styles.modalBackgorund}>
                <Animated.View
                    style={[styles.modalContainer, {transform: [{scale: scaleValue}], height: heightModal}]}    
                >
                    {children}
                </Animated.View>
            </View>
        </Modal>
    )
};

const styles= StyleSheet.create({
    modalBackgorund: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: 343,
        height: 300,
        backgroundColor: '#fff',
        paddingHorizontal:15,
        borderRadius: 20,
    }
})
export default ModalPage1;