import { useState, useCallback, useRef } from "react";
import { View,
         Text,
         StyleSheet,
         TextInput,
         SafeAreaView,
         StatusBar,
         Image,
         ImageBackground,
         TouchableHighlight,
         TouchableWithoutFeedback,
         KeyboardAvoidingView,
         Keyboard,
         ScrollView,
         Button,
         TouchableOpacity,
} from "react-native";
import { image } from "../../../access/image";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ModalPage1 from "../../Component/ModalPage/ModalPage1";
import MyInput from '../../Component/MyInput/MyInput';
import MyButton from "../../Component/Button/MyButton";

function RetrievalScreen({navigation}) {
    const [visible, setVisible] = useState(false);
    const [inputs, setInputs] = useState({
        newPassword: '',
        enterNewPassword: '',
        isError: false,
        isErrorEntered: false,
        textError: '',
        textErrorEntered: '',
    })
    const [isEye, setIsEye] = useState(true)
    const [isEye2, setIsEye2] = useState(true)
    const myRef = useRef()
    const handleOnPress =()=>{
        alert('Successfully ')
    }

    // handle event appear/disappear password
    const handleToggleAppear1 = () => {
        setIsEye(isEye == true ? false : true)
    }
    const handleToggleAppear2 = () => {
        setIsEye2(isEye2 == true ? false : true)
    }
    // handle event onChange textinput
    const handleOnChangeNewPassword = (text, input) => {
        setInputs({...inputs, [input]: text, isError: false})
    }

    const handleOnChangeEnterNewPassword = (text, input) => {
        setInputs({...inputs, [input]: text, isErrorEntered: false})
    }

    // Check if the new password is correct
    let checkSpecialCharacters = /([!-\/:-@[-`{-~])/gm; 
    let checkLetters = /[a-zA-z]/gm;
    let checkNumber = /[0-9]/gm;

    const validate = ()=>{
        if(inputs.newPassword.length > 6)
        {
            if (checkSpecialCharacters.test(inputs.newPassword) && checkLetters.test(inputs.newPassword) && checkNumber.test(inputs.newPassword)) {
                setInputs({...inputs, isError: false})
            }
            else {
                setInputs({...inputs, isError: true,textError: 'mật khẩu phải bao gồm chữ, số và ký tự đặc biệt!' })
            }
        }
        else {
            setInputs({...inputs, isError:true, textError: 'mật khẩu phải trên 6 ký tự!' })

        }
    }
     
    // Check if the password is the same or not
    const handleCheckTheSamePassWord =()=> {
        if(inputs.enterNewPassword.length > 0) {
            if (inputs.newPassword !== inputs.enterNewPassword){
                setInputs({...inputs, isErrorEntered: true, textErrorEntered: 'mật khẩu nhập lại không chính xác!'})
            }
        }
        else {
            setInputs({...inputs, isErrorEntered: true,textErrorEntered: 'vui lòng nhập trường này!' })
        }
    }

    // successful save the new password
    const handleSuccessful = ()=> {
        if(inputs.newPassword === ''){
            setInputs({...inputs, isError: true, textError: 'vui lòng nhập trường này!'})
        }
        else if(inputs.enterNewPassword === ''){
            setInputs({...inputs, isErrorEntered: true, textErrorEntered: 'vui lòng nhập trường này!' })
        }
        else if (inputs.newPassword !== inputs.enterNewPassword){
            setInputs({...inputs, isErrorEntered: true,textErrorEntered: 'mật khẩu nhập lại không chính xác!'})
        }
        else {
            setVisible(true)
        }
    }
    return ( 
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <ImageBackground source={image.backgroundImage} style={styles.imageBackground}>
                    
                    <View style={styles.Containerbackground}>
                        <ModalPage1 
                            visible={visible}
                            props = {{
                                heightModal: 300 
                            }}
                        >
                            <View style={{alignItems: 'center'}}>
                                <View style={styles.modalHeader}>
                                    <Image style={styles.modalHeaderImg} source={image.iconSuccess} />
                                </View>
                                <View style={{marginTop: 24}}>
                                    <Text style={styles.modalText}>Đổi mật khẩu mới thành công</Text>
                                </View>
                                <MyButton 
                                    onPress={() => setVisible(false)}
                                    props={{
                                        borderRadius:200,
                                        marginTop: 40,
                                        widthBtn: 145,
                                        heightBtn: 48,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColorBtn: '#006013',
                                        fontSizeBtn: 16,
                                        fontWeightBtn: 'bold',
                                        colorBtn: '#fff',
                                    }}
                                >Đóng</MyButton>
                            </View>
                        </ModalPage1>
                        <View style={styles.containerKeyboard}>
                            <View >
                                <TouchableWithoutFeedback onPress={()=> navigation.navigate('Login')}  style={styles.iconContainer}>
                                        <Image source={image.iconArrowLeft} style={styles.iconArrowLeft}></Image>
                                </TouchableWithoutFeedback>
                            </View>
                            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                                        <Image source={image.imageLock} style={styles.imageLock}></Image>
                                        <View style={styles.passwordRetrieval}>
                                            <Text  style={styles.passwordRetrievalText}>Lấy lại mật khẩu</Text>
                                        </View>
                                        <MyInput 
                                            isError ={inputs.isError}
                                            error={inputs.textError}
                                            placeholder="nhập mật khẩu mới"
                                            secureTextEntry={isEye2}
                                            returnKeyType='next'
                                            keyboardType="password"
                                            onChangeText={text => handleOnChangeNewPassword(text, 'newPassword')}
                                            onBlur={validate}
                                        
                                        >
                                            <TouchableWithoutFeedback
                                                onPress={handleToggleAppear2}
                                            >
                                                <Image
                                                    source={isEye2 == true ? image.eye2 : image.eye1} style={styles.eye1}
                                                ></Image>
                                            </TouchableWithoutFeedback>
                                        </MyInput>

                                        <MyInput 
                                            isError ={inputs.isErrorEntered}
                                            error={inputs.textErrorEntered}
                                            placeholder="nhập lại mật khẩu mới"
                                            secureTextEntry={isEye}
                                            keyboardType='password'
                                            returnKeyType="go"
                                            onChangeText={text => handleOnChangeEnterNewPassword(text, 'enterNewPassword')}
                                            onBlur={handleCheckTheSamePassWord}
                                        >
                                            <TouchableWithoutFeedback
                                                onPress={handleToggleAppear1}
                                            >
                                                <Image
                                                    source={isEye == true ? image.eye2 : image.eye1} style={styles.eye1}
                                                ></Image>
                                            </TouchableWithoutFeedback>
                                        </MyInput>
                                    
                                        <View style={styles.buttonContainer}>
                                            <MyButton
                                                onPress={()=> navigation.navigate('Login')}
                                                props={{
                                                    widthBtn: 140,
                                                    heightBtn:50,
                                                    backgroundColorBtn: '#fff',
                                                    fontSizeBtn: 18,
                                                    colorBtn: '#006013',
                                                    borderColor: '#97D9A2',
                                                    borderWidth: 1,
                                                    borderStyle: 'solid',    
                                                }}
                                            >Hủy</MyButton>
                                            <MyButton 
                                                onPress={handleSuccessful} 
                                                props={{
                                                    widthBtn: 140,
                                                    heightBtn:50,
                                                    backgroundColorBtn: '#006013',
                                                    fontSizeBtn: 18,
                                                    colorBtn: '#fff',
                                                    marginLeft: 19,  
                                                }}    
                                            >lưu</MyButton>
                                        </View>
                            
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <ScrollView style={styles.passwordRegulation}>
                            <View style={styles.regulation}>
                                <Image source={image.iconCheck} style={styles.iconCheck}></Image>
                                <Text style={styles.regulationText}>Mật khẩu bắt buộc từ 6 ký tự trở lên</Text>
                            </View>
                            <View style={styles.regulation}>
                                <Image source={image.iconCheck} style={styles.iconCheck}></Image>
                                <Text style={styles.regulationText}>Mật khẩu không trùng với họ tên, số điện thoại của Quý khách, Không sử dụng số, chữ tăng/giảm liên tiếp (VD: 123456, abcdef...) hoặc mật khẩu dễ đoán (VD: matkhau, password...)</Text>
                            </View>
                            <View style={styles.regulation}>
                                <Image source={image.iconCheck} style={styles.iconCheck}></Image>
                                <Text style={styles.regulationText}>Mật khẩu mạnh là mật khẩu bao gồm chữ, số và ký tự đặc biệt. Khuyến nghị quý khách nên thường xuyên đổi mật khẩu (2 tháng/lần)</Text>
                            </View>
                        </ScrollView>
                    </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    Containerbackground: {
        backgroundColor: 'rgba(0, 96, 19, 0.75);',
        flex: 1
    },
    iconContainer: {
        width: 30,
        height: 30,
    },
    iconArrowLeft: {
        width: 20,
        height: 20,
        marginTop: 20,
        marginLeft:20
    },
    containerKeyboard: {
        width: '100%',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    logo: { 
        marginTop: 80,
        marginLeft: 87,
        marginRight: 88,
        width: 200,
        height: 37.82,
    },
    imageLock: {
        width: 80,
        height: 80,
        marginLeft: 147,
        marginRight: 148,
        marginTop: 6,
        marginBottom: 30
    },
    passwordRetrieval: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 10,
    },
    passwordRetrievalText: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#212121'
    },
    passwordRetrievalInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 300,
        height: 48,
        left: 38,
        backgroundColor: '#FFFFFF',
        borderColor: '#D6D6D6',
        borderWidth: 1,
        borderRadius: 150,
        marginBottom: 15,
    },
    eye1: {
        marginRight: 15,
    },
    // button
    buttonContainer: {
        flexDirection: 'row',
        width: 300,
        marginLeft: 38,
        marginRight: 37,
        marginBottom: 21,
        marginTop: 6,
    },

    // password Regulation
    passwordRegulation:{
        marginTop: 72,
        marginLeft: 17,
        marginRight: 18,
       
    },
    regulation: {
        flexDirection: 'row',
        marginBottom: 10,
        marginRight: 10,
    },
    iconCheck: {
        marginTop: 4
    },
    regulationText: {
        color: '#E0FFE5',
        fontSize: 14,
        marginLeft: 12,
        lineHeight: 24
    },
    modalHeader: {
        marginTop: 57,
        paddingHorizontal: 140,
    },
    modalHeaderImg: {
        width: 62,
        height:62,
    },
    modalText: {
        fontSize: 20,
        color: '#212121',
        fontWeight: 'bold'
    },

})

export default RetrievalScreen