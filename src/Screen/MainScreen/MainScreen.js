import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
} from "react-native";
import {image} from '../../../access/image'
import MyInput from "../../Component/MyInput/MyInput";
import MyButton from "../../Component/Button/MyButton";
import { useRef, useState } from "react";
import {SheetProvider} from 'react-native-actions-sheet'
import ActionSheet from "react-native-actions-sheet";
import RadioForm from 'react-native-simple-radio-button';
import {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button'
import MyRadioButton from "../../Component/RadioButton/RadioButton";
import RadioButtonContainer from "../../Component/RadioButton/RadioButtonContainer";
import ModalPage1 from "../../Component/ModalPage/ModalPage1";

function MainScreen({navigation}) {
    const [visible, setVisible] = useState(false)
    const [listSelectCompany, SetListSelectCompany] = useState([
        {
             lable:'Trang trại Dương gia Điện Biên',
             isSelect: false,
             value: 0
             
        },
        {
             lable:'Trang trại Dương gia Hòa Bình',
             isSelect: false,
             value: 1
        },
        {
             lable:'Nông hộ Dương Xuân Anh',
             isSelect: false,
             value: 2
        },
        {
             lable:'Trang trại Dương gia Nam Định',
             isSelect: false,
             value: 3
        },
       ])
    const [listFarm, setLisFarm] = useState([
        {
            lable:'Trang trại 1',
            isSelect: false,
            value: 0
        
        },
        {
            lable:'Trang trại 2',
            isSelect: false,
            value: 1
        },
        {
            lable:'Trang trại 3',
            isSelect: false,
            value: 2
        },
        {
            lable:'Trang trại 4',
            isSelect: false,
            value: 3
        },
        ])
    const [selectCompany, setSelectCompany] = useState('Chọn công ty');
    const [selectFarm, setSelecFarm] = useState('Chọn trang trại');
    const actionSheetCompany= useRef();
    const actionSheetFarm = useRef();
    const actionSheetUser = useRef();

    // action show sheet User 
    const showActionSheetUser = ()=>{
        actionSheetUser.current.show();
    }

    // action show list company
    const showActionSheetCompany = ()=>{
        actionSheetCompany.current.show();
    }
    // action show list farm
    const showActionSheetFarm = ()=>{
        actionSheetFarm.current.show();
    }

    // select company in list company
    const hanldeCompanyChoice=(index)=>{
        var arr = [...listSelectCompany]
        arr.forEach((item, i)=> {
            if(item.value == index){
                item.isSelect = true
                setSelectCompany(item.lable)
            }
            else{
                item.isSelect = false
            }
        } )
        SetListSelectCompany(arr)
    }

    // select farm in list farm
    const hanldeFarmChoice=(index)=>{
        var arr = [...listFarm]
        arr.forEach((item, i)=> {
            if(item.value == index){
                item.isSelect = true
                setSelecFarm(item.lable)
            }
            else{
                item.isSelect = false
            }
        } )
        setLisFarm(arr)
    }

    // handle exit account 
    const handleExtiAccount=()=>{
        setVisible(true)
        actionSheetUser.current.hide()
    }

    //handle Log out 
    const handleLogOut=()=>{
        navigation.navigate('Login')
        setVisible(false)
    } 

    // handle cancel log out 
    const handleCancelLogOut =()=> {
        setVisible(false)
        actionSheetUser.current.show();
    }

    // handle transfer Account Screen
    const handleTransferUser = ()=>{
        navigation.navigate('AccountScreen')
        actionSheetUser.current.hide()
    }

    // handle Confirm 
    const handleConfirm =()=> {
        navigation.navigate('HomeTab')
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#FFF'} barStyle={'dark-content'}/>
            <ImageBackground source={image.backgroundImage} style={styles.imageBackground}>            
                <View style={{backgroundColor: '#fff', borderBottomRightRadius: 30, borderBottomLeftRadius: 30}}>
                    <View style={styles.containerHeader}>
                        <Image source={image.logo} style={styles.imageLogo}></Image>
                        <View style={styles.headerRight}>
                            <TouchableHighlight>
                                <Image source={image.GgNeCf}></Image>
                            </TouchableHighlight>
                            <TouchableWithoutFeedback onPress={()=> navigation.navigate('NotifyScreen')}>
                                <Image source={image.iconnotify} style={{marginLeft: 26}}></Image>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={showActionSheetUser}>
                                <Image source={image.avarta} style={{marginLeft: 26}}></Image>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
                <View >
                    <View style={styles.content}>
                        <Text style={{...styles.textContent, fontSize: 30, fontWeight: 'bold'}}>Xin Chào...!</Text>
                        <Text style={{...styles.textContent, fontSize: 18}}>vui lòng chọn trang trại để theo dõi</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <View>
                            <Text style={{...styles.textInputTitle}}>Chọn công ty</Text>
                            <TouchableWithoutFeedback onPress={showActionSheetCompany}>
                                <View style={styles.containerInput}>
                                    <Text style={{...styles.textInput}}>{selectCompany}</Text>
                                    <View style={styles.containerIcon}>
                                        <Image source={image.iconArrowCheckDown}></Image>    
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View>
                        <View>
                            <Text style={{...styles.textInputTitle}}>Chọn trang trại</Text>
                            <TouchableWithoutFeedback onPress={showActionSheetFarm}>
                                <View style={styles.containerInput}>
                                    <Text style={{...styles.textInput}}>{selectFarm}</Text>
                                    <View style={styles.containerIcon}>
                                        <Image source={image.iconArrowCheckDown}></Image>    
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        </View>
                        <MyButton
                            onPress={handleConfirm}
                            props={{
                                borderRadius:200,
                                widthBtn: 300,
                                marginTop: 14,
                                heightBtn: 48,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColorBtn: '#006013',
                                fontSizeBtn: 16,
                                fontWeightBtn: 'bold',
                                colorBtn: '#fff',
                            }}
                        >Xác nhận</MyButton>
                    </View>
                </View>
                {/* tag sheet company / farm  */}
                <ActionSheet 
                    ref={actionSheetCompany}  
                    containerStyle={{
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                    }}           
                > 
                    <View style={styles.sheet}>
                        <Text style={styles.textHeaderSheet} >Chọn tên công ty</Text>
                        <TouchableWithoutFeedback onPress={() => actionSheetCompany.current.hide()}>
                            <View style={styles.buttonCloseSheet}>
                                <Image source={image.iconClose} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <RadioButtonContainer
                        radio_props={listSelectCompany}
                        hanldeFirmChoice={hanldeCompanyChoice}
                    />
                </ActionSheet>
                <ActionSheet 
                    ref={actionSheetFarm}  
                    containerStyle={{
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                    }}             
                > 
                    <View style={styles.sheet}>
                        <Text style={styles.textHeaderSheet} >Chọn trang trại</Text>
                        <TouchableWithoutFeedback onPress={() => actionSheetFarm.current.hide()}>
                            <View style={styles.buttonCloseSheet}>
                                <Image source={image.iconClose} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <RadioButtonContainer
                        radio_props={listFarm}
                        hanldeFirmChoice={hanldeFarmChoice}
                    />
                </ActionSheet>

                {/* tag sheet User */} 
                
                <ActionSheet
                    ref={actionSheetUser}
                    containerStyle={{
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                    }}
                >
                    <View style={styles.sheet}>
                        <Text style={styles.textHeaderSheet} >Nguyễn Văn A</Text>
                        <TouchableWithoutFeedback onPress={() => actionSheetUser.current.hide()}>
                            <View style={styles.buttonCloseSheet}>
                                <Image source={image.iconClose} />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <TouchableWithoutFeedback onPress={handleTransferUser}>
                        <View style={styles.exitAccount}>
                            <View style={styles.containerAccount}>
                                <Image source={image.iconProfile} />
                                <Text style={{marginLeft:22, color: '#212121'}}>Tài Khoản</Text>
                            </View>
                            <Image source={image.iconArrowRight} style={{marginRight: 17}} />
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={handleExtiAccount}>
                        <View style={styles.exitAccount}>
                            <View style={{...styles.containerAccount, marginLeft: 17}}>
                                <Image source={image.iconExport} />
                                <Text style={{marginLeft:17, color: '#212121'}}>Đăng xuất</Text>
                            </View>
                            <Image source={image.iconArrowRight} style={{marginRight: 17}} />
                        </View>
                    </TouchableWithoutFeedback>
                </ActionSheet>
                <ModalPage1 
                    visible={visible}
                    props={{
                        heightModal: 346
                    }}
                >
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={image.iconBell} style={{ marginTop:51}} />
                        <Text style={{
                            textAlign: 'center',
                            color: '#212121',
                            fontSize: 18,
                            fontWeight: 'bold',
                            marginTop: 30,
                            }}
                        >bạn có chắc chắn muốn đăng xuất khỏi tài khoản này không?</Text>
                        <View style={{flexDirection: 'row'}}>
                            <MyButton 
                                onPress={handleCancelLogOut}
                                props={{
                                        borderRadius:200,
                                        marginTop: 40,
                                        widthBtn: 145,
                                        heightBtn: 48,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColorBtn: '#fff',
                                        borderColor: '#006013',
                                        borderWidth: 1,
                                        fontSizeBtn: 16,
                                        fontWeightBtn: 'bold',
                                        colorBtn: '#006013',
                                    }}
                            >Không</MyButton>
                            <MyButton
                                onPress={handleLogOut}  
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
                                    marginLeft: 10
                                }}
                            >có</MyButton>
                        </View>
                    </View>
                </ModalPage1>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        flex: 1,
    },
    containerHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop:57,
        marginBottom: 36
    },
    imageLogo: {
        width: 150,
        resizeMode: 'contain',
        marginLeft: 16,
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginRight: 16,
    },
    content: {
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 40,
        marginBottom: 36
    },
    textContent: { 
        color: '#fff',
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 300,
        height: 48,
        backgroundColor: '#fff',
        borderColor: '#D6D6D6',
        borderWidth: 1,
        borderRadius: 150,
        marginBottom: 15,
    },
    textInputTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 11,
    },
    textInput: {
        color: '#797979',
        fontSize: 14,
        marginLeft: 20
    },
    containerIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: '100%',
        marginRight: 21,
    },


    // sheet
    sheet: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#F6F6F6',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    textHeaderSheet: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212121'
    },
    buttonCloseSheet: {
        position: 'absolute',
        right: 20,
        top: 10,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    exitAccount: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        height: 57,
        borderTopColor: '#F6F6F6',
        borderTopWidth: 1
    },
    containerAccount: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flexDirection: 'row',
        marginLeft: 22,
    },

})

export default MainScreen