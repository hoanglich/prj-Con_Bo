import { useState, useRef } from 'react'
import {
    View,
    Text, 
    TouchableWithoutFeedback,
    SafeAreaView,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native'
import {image} from '../../../../access/image'
import ModalPage1 from '../../../Component/ModalPage/ModalPage1';
import MyButton from '../../../Component/Button/MyButton';
import ActionSheet from "react-native-actions-sheet";
import RadioButtonContainer from '../../../Component/RadioButton/RadioButtonContainer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const DashboardScreen = ({navigation})=>{
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
        setVisible(false)
        navigation.navigate('DashboardScreen')
    }


    // pie chart 

    const data =[20,20,20,20]
    const PieData = data.map((value, index)=> ({
        value,
        key: `${index}-${value}`,
        svg: {
            fill: 'red'
        }
    }))

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.EditHeaderAccount}>
                <TouchableWithoutFeedback onPress={()=> navigation.navigate('mainScreen')}>
                    <View style={{width:40, height: '100%', justifyContent: 'center'}}>
                        <Image source={image.iconArrowLeft}></Image>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textHeader}>Trang trại Bình Thuận</Text>
                <TouchableWithoutFeedback onPress={()=>setVisible(true)}>
                    <View>
                        <Image source={image.iconFilter} />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View>
                        <Image source={image.GgNeCf} />
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=> navigation.navigate('NotifyScreen')}>
                    <View>
                        <Image source={image.iconnotify} />
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <ScrollView>

            </ScrollView>

            <ModalPage1
                visible={visible}
                props={{
                    heigthModal: 421
                }}
            >
                <TouchableWithoutFeedback onPress={()=> setVisible(false)}>
                    <View style={styles.iconClose}> 
                        <Image source={image.iconClose} />
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.content}>
                    <Text style={{...styles.textContent, fontSize: 30, fontWeight: 'bold'}}>Xin Chào...!</Text>
                    <Text style={{color: '#212121', fontSize: 18}}>vui lòng chọn trang trại để theo dõi</Text>
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
                            marginBottom: 30,
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
            </ModalPage1>


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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    EditHeaderAccount: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 16,
        backgroundColor: '#fff'
    },
    textHeader: {
        color: '#212121',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight:20
       
    },
    listNotify: {
        paddingHorizontal: 21,
        borderBottomColor:"#e0e0e0",
        borderTopColor: '#e0e0e0',
        borderBottomWidth: 1,
        borderTopWidth:1,
        height: 80,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textListNotify: {
        marginBottom: 8,
        fontSize: 18,
        lineHeight: 20,
        fontWeight: 'bold'
    },
    colorRead: {
        color: '#797979'
    },
    colorUnRead: {
        color: '#212121',
    },


    // page modal
    iconClose:{
        position: 'absolute',
        right: 10,
        top: 10,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 54,
        marginBottom: 36
    },
    textContent: { 
        color: '#006013',
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
        color: '#212121',
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

export default DashboardScreen