import { useState, useCallback, useEffect } from "react";
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
} from "react-native";
import { image } from "../../../access/image";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import MyInput from '../../Component/MyInput/MyInput';
import MyButton from '../../Component/Button/MyButton'
import ModalPage1 from "../../Component/ModalPage/ModalPage1";



function LoginScreen({navigation }) {
    const [inputs, setInputs] = useState({
        userName: '',
        password: '',
        isUserNameError: false,
        isUserPassword: false,
        errorName: '',
        errorPassword: '',
    })
    const [isEye, setIsEye] = useState(true)
    const [users, setUser]= useState({})
    const [login, setLogin] =useState(false)
    const [visible, setVisible] = useState(false)
    const [error,setError ] = useState('')
    
    //handle valid login check for login

    // const handleOnPress =()=>{
    //     const user = datas.filter(data => {
    //         // console.log(data.name)
    //         // console.log(inputs.userName)
    //         if(data.name == inputs.userName.trim() ) {
    //             console.log(1234)
    //             if(data.password === inputs.password.trim()){
    //                 login.isLogin=true
    //                 return data
    //             }
    //             else {
    //                 setLogin(true)
    //                 setError('Mật khẩu bạn nhập chưa chính xác vui lòng nhập lại!')
    //                 setVisible(true)
    //             }
    //         }
    //         else {
    //             console.log(1234567)
    //             setError('Tên đăng nhập chưa chính xác vui lòng nhập lại!')
    //             setVisible(true)
    //         }
    //     })
    //     // setInputs({...inputs, userName: '',password: '',})
    //     setUser(...user)
    // }

    const handleOnPress =()=>{
        navigation.navigate('mainScreen')
    }

    // handle event appear/disappear password
    const handleToggleAppear = () => {
        setIsEye(isEye == true ? false : true)
    }
    
    // handle event onChange textinput
    const handleOnChangeName = (text, input) => {
        setInputs({...inputs, [input]: text ,isUserNameError: false })
    }
    const handleOnChangePassword = (text, input) => {
        setInputs({...inputs, [input]: text ,isUserPassword: false,})
    }

    // handle event check validate name
    const userNameValidate = ()=>{
        if(inputs.userName.length === 0){
            setInputs({...inputs, isUserNameError: true, errorName:'vui lòng nhập tên vào!'})
        }
        
    }  

    // handle event check validate password
    let checkSpecialCharacters = /([!-\/:-@[-`{-~])/gm; 
    let checkLetters = /[a-zA-z]/gm;
    let checkNumber = /[0-9]/gm;
    
    const userPasswordValidate =()=> {
        if(inputs.password.length > 6){
            if (checkSpecialCharacters.test(inputs.password) && checkLetters.test(inputs.password) && checkNumber.test(inputs.password)) {
                setInputs({...inputs, isUserPassword: false})
            } 
            else {
                setInputs({...inputs, isUserPassword: true, errorPassword: 'mật khẩu phải bao gồm chữ, số và ký tự đặc biệt!' })
            }
        }
        else {
                setInputs({...inputs, isUserPassword:true, errorPassword: 'mật khẩu phải trên 6 ký tự!' })
        }
    }
    return ( 
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'dark-content'}/>
            <ImageBackground source={image.backgroundImage} style={styles.imageBackground}>
                    
                    <ModalPage1 
                        visible={visible}
                        props={{
                            heightModal: 340,
                        }}
                    >
                        <View style={{alignItems: 'center'}}>
                            <View style={styles.modalHeader}>
                                <Image style={styles.modalHeaderImg} source={image.iconError} />
                            </View>
                            <View style={{marginTop: 24, width:283}}>
                                <Text style={styles.modalText}>{error}</Text>
                            </View>
                            <MyButton 
                                onPress={() => setVisible(false)}
                                props={{
                                    borderRadius:200,
                                    widthBtn: 145,
                                    heightBtn: 48,
                                    marginTop: 32,
                                    marginBottom:40,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColorBtn: '#006013',
                                    fontSizeBtn: 16,
                                    fontWeightBtn: 'bold',
                                    colorBtn: '#fff',
                                }}
                            >Nhập lại</MyButton>
                        </View>
                    </ModalPage1>
                    <View
                        style={styles.containerKeyboard}
                    >   
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View>
                                    <Image source={image.logo} style={styles.logo}></Image>
                                    <Image source={image.user} style={styles.user}></Image>
                                    <View style={{justifyContent: 'center', alignItems:'center'}}>
                                        <MyInput
                                            value={inputs.userName}
                                            isError={inputs.isUserNameError}
                                            error={inputs.errorName}
                                            placeholder="Tên đăng nhập"
                                            style={styles.input}
                                            returnKeyType='next'
                                            onChangeText={text => handleOnChangeName(text, 'userName')}
                                            onBlur={()=> userNameValidate()}
                                            iconHeader={image.frameUser}
                                        ></MyInput>
                                        
                                        <MyInput
                                                value={inputs.password}
                                                isError = {inputs.isUserPassword}
                                                error= {inputs.errorPassword}
                                                iconHeader={image.frameLock}
                                                placeholder="Nhập mật khẩu"
                                                style={styles.input}
                                                secureTextEntry={isEye}
                                                keyboardType='password'
                                                returnKeyType="go"
                                                onChangeText={text => handleOnChangePassword(text, 'password')}
                                                onBlur={()=> userPasswordValidate()}
                                            >
                                            <TouchableWithoutFeedback
                                                onPress={handleToggleAppear}
                                            >
                                                <Image
                                                    source={isEye == true ? image.eye2 : image.eye1} style={styles.eye1}
                                                ></Image>
                                            </TouchableWithoutFeedback>
                                        </MyInput>
                                   
                                    
                                    <MyButton 
                                         onPress={handleOnPress} 
                                            props={{
                                                widthBtn: 300,
                                                heightBtn:50,
                                                backgroundColorBtn: '#006013',
                                                fontSizeBtn: 18,
                                                colorBtn: '#fff',
                                                marginTop: 6,
                                                marginBottom: 30,
                                            }}    
                                    >Đăng nhập</MyButton>

                                    <View style={styles.forgot}>
                                        <Text style={styles.textForgot}>bạn quên mật khẩu? </Text>
                                        <TouchableWithoutFeedback onPress={()=> navigation.navigate('Retrieval')} style={styles.retrievalBtn} >
                                            <Text style={styles.retrieval}>lấy lại mật khẩu</Text>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
    },
    containerKeyboard: {
        width: '100%',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    container: {
        flex: 1,
    },
    logo: { 
        marginTop: 80,
        marginLeft: 87,
        marginRight: 88,
        width: 200,
        height: 37.82,
    },
    user: {
        width: 80,
        height: 80,
        marginLeft: 147,
        marginRight: 148,
        marginTop: 42,
        marginBottom: 30
    },
    input: {
        marginLeft:18,
        marginRight: 'auto',
        width: 210,
    },
    eye1: {
        marginRight: 15,
    },
    // password retrieval
    forgot: {
        flexDirection: 'row',
        marginBottom: 32,
        justifyContent:'center',
        alignItems:'center',
        fontSize: 14,
    },
    textForgot: {
        color: '#2D2D2D',
    },
    retrievalBtn: {
        height:30,
    },
    retrieval: {
        color: '#006013',
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
        fontWeight: 'bold',
        textAlign: 'center',
    },
  
})

export default LoginScreen