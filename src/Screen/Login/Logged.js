import { useState, useCallback } from "react";
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


// fix the place validate  userName ==> slacking


function LoggedScreen() {
    const [inputs, setInputs] = useState({
        password: '',
        isUserPassword: false,

    })
    const [isEye, setIsEye] = useState(true)
    const handleOnPress =()=>{
        alert('successtly')
    }

    // handle event appear/disappear password
    const handleToggleAppear = () => {
        setIsEye(isEye == true ? false : true)
    }
    
    // handle event onChange textinput
    const handleOnChange = (text, input) => {
        setInputs({...inputs, [input]: text ,isUserNameError: false })
    }

    return ( 
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
            <ImageBackground source={image.backgroundImage} style={styles.imageBackground}>
                    <KeyboardAwareScrollView
                        style={styles.containerKeyboard}
                    >
                        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                            <View style={styles.container}>
                                    <Image source={image.logo} style={styles.logo}></Image>
                                    <Image source={image.user1} style={styles.user}></Image>
                                    <View style={styles.userName}>
                                        <Text style={styles.userNameText}>Nguyễn Văn A</Text>
                                    </View>
                                    <View style={styles.LoginInput}>
                                        <Image source={image.frameLock} style={styles.iconLogin}></Image>
                                        <TextInput
                                            placeholder="password"
                                            style={styles.input}
                                            secureTextEntry={isEye}
                                            keyboardType='password'
                                            returnKeyType="go"
                                            ref={ele => this.inputRef = ele}
                                            onChangeText={text => handleOnChange(text, 'password')}  
                                        >
                                        </TextInput>
                                        <TouchableWithoutFeedback
                                            onPress={handleToggleAppear}
                                        >
                                            <Image
                                                source={isEye == true ? image.eye2 : image.eye1} style={styles.eye1}   
                                            ></Image>
                                        </TouchableWithoutFeedback>
                                    </View>
                                    <TouchableHighlight onPress={handleOnPress} underlayColor="white">
                                        <View style={styles.buttonLogin}>
                                            <Text style={styles.buttonText}>Đăng nhập</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <View style={styles.forgot}>
                                        <Text style={styles.textForgot}>bạn quên mật khẩu? </Text>
                                        <TouchableWithoutFeedback onPress={handleOnPress} >
                                            <Text style={styles.retrieval}>lấy lại mật khẩu</Text>
                                        </TouchableWithoutFeedback>
                                    </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </KeyboardAwareScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
    },
    containerKeyboard: {
        position: 'absolute',
        width: '100%',
        flex: 1,
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
        marginBottom: 30,

    },
    LoginInput: {
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
    userName: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        marginTop: 10,
    },
    userNameText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconLogin: {
        marginLeft: 18,
    },
    input: {
        marginLeft:18,
        marginRight: 'auto',
        width: 210,
    },
    eye1: {
        marginRight: 15,
    },
    // button
    buttonLogin: {
        width: 300,
        height: 50,
        backgroundColor: '#006013',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        marginLeft: 38,
        marginRight:37,
        marginBottom: 30,
        borderRadius: 150,
    },
    buttonText: {        
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
        
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
    retrieval: {
        color: '#006013',
    }
  
})

export default LoggedScreen