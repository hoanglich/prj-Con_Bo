import { cloneElement } from 'react'
import {
    View,
    Image,
    Text,
    SafeAreaView,
    TouchableWithoutFeedback,
    StyleSheet,
    ScrollView,
    TextInput,
} from 'react-native'
import {image} from '../../../../access/image'
import MyButton from '../../../Component/Button/MyButton'
import DatePicker from 'react-native-date-picker'
import { useState, useRef } from 'react'

const EditAccountScreen = ({navigation}) => {
    const [dataProfile, setDataProfile] = useState({
        id: '0101001',
        name: 'Vacxin',
        brDate:'19/02/1987',
        sex:'Nam',
        numberID: '145644747',
        phoneNumber1: '0325665245',
        phoneNumber2: '0325665246',
        WorkingDay: '19/02/2019',
        Note: ''
    })
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)


    // handle change data
    const handleChangeData = (text, input) =>{
        setDataProfile({...dataProfile, [input]: text})
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.EditHeaderAccount}>
                <TouchableWithoutFeedback onPress={()=> navigation.navigate('AccountScreen')}>
                    <View style={{width:40, height: '100%', justifyContent: 'center'}}>
                        <Image source={image.iconArrowLeft}></Image>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textHeader}>Chỉnh sửa nhân viên</Text>
            </View>
            <ScrollView>
                <View style={styles.editProflie}>
                    <View style={styles.editImage}>
                        <Image source={image.user120}></Image>
                        <Image style={styles.iconChoiceImage} source={image.iconChoiceImage}></Image>
                    </View>
                </View>
                <View style={styles.editDetailProflie}>
                    <Text style={{color: '#006013', fontSize: 18, fontWeight: 'bold', marginBottom: 8}}>Thông tin</Text>
                    <View style={styles.editListProflie}>
                        <View style={styles.listInput}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginLeft:6, lineHeight: 20}}>Mã nhân viên</Text>
                                <Image source={image.iconStar}></Image>
                            </View>
                            <TextInput
                                onChangeText={text => handleChangeData(text, 'id')}
                                value={dataProfile.id}
                                style={{ paddingTop: 3, paddingBottom: 7}}
                            />
                        </View>
                        <View style={styles.listInput}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginLeft:6, lineHeight: 20}}>Tên nhân viên</Text>
                                <Image source={image.iconStar}></Image>
                            </View>
                            <TextInput
                                onChangeText={text => handleChangeData(text, 'name')}
                                value={dataProfile.name}
                                style={{ paddingTop: 3, paddingBottom: 7}}
                            />
                        </View>
                        <View style={styles.listPosition}>
                            <View style={{paddingVertical: 6}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{marginLeft:6, lineHeight: 20}}>Ngày sinh</Text>
                                </View>
                                <TextInput
                                    onChangeText={text => handleChangeData(text, 'brDate')}
                                    value={dataProfile.brDate}
                                    style={{ paddingTop: 3, paddingBottom: 7}}
                                />
                                
                            </View>
                            <TouchableWithoutFeedback onPress={()=> setOpen(true)}>
                                <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                                    <Image source={image.iconDate}></Image>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.listInput}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginLeft:6, lineHeight: 20}}>Giới tính</Text>
                                <Image source={image.iconStar}></Image>
                            </View>
                            <TextInput
                                onChangeText={text => handleChangeData(text, 'sex' )} 
                                value={dataProfile.sex}
                                style={{ paddingTop: 3, paddingBottom: 7}} 

                            />
                        </View>
                        <View style={styles.listInput}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginLeft:5, lineHeight: 20}}>CMT/CCCD</Text>
                                <Image source={image.iconStar}></Image>
                            </View>
                            <TextInput
                                onChangeText={text => handleChangeData(text, 'numberID' )}
                               value={dataProfile.numberID}
                                style={{ paddingTop: 3, paddingBottom: 7}}
                            />
                        </View>
                        <View style={styles.listInput}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginLeft:6, lineHeight: 20}}>Số điện thoại 1</Text>
                                <Image source={image.iconStar}></Image>
                            </View>
                            <TextInput
                                onChangeText={text => handleChangeData(text,  'phoneNumber1')}
                                value={dataProfile.phoneNumber1}
                                style={{ paddingTop: 3, paddingBottom: 7}}
                            />
                        </View>
                        <View style={styles.listInput}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginLeft:6, lineHeight: 20}}>Số điện thoại 2</Text>
                                <Image source={image.iconStar}></Image>
                            </View>
                            <TextInput
                                onChangeText={text => handleChangeData(text, 'phoneNumber2')}
                                value={dataProfile.phoneNumber2}
                                style={{ paddingTop: 3, paddingBottom: 7}}
                            />
                        </View>
                        <View style={styles.listPosition}>
                            <View style={{paddingVertical: 6}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{marginLeft:6, lineHeight: 20}}>Ngày vào làm</Text>
                                </View>
                                <TextInput
                                    onChangeText={text => handleChangeData(text, 'WorkingDay')}
                                    value={dataProfile.WorkingDay}
                                    style={{ paddingTop: 3, paddingBottom: 7}}
                                />
                                
                            </View>
                            <TouchableWithoutFeedback onPress={()=> setOpen(true)}>
                                <View style={{width: 40, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                                    <Image source={image.iconDate}></Image>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={styles.listInput}>
                            <TextInput
                                onChangeText={text => handleChangeData(text, 'Note')}
                                value={dataProfile.Note}
                                placeholder='Ghi chú'
                                style={{ paddingTop: 3, paddingBottom: 7}}
                            />
                        </View>
                    </View>
                 
                </View>
                <View style={styles.editPositionProflie}>
                    <Text style={{color: '#006013', fontSize: 18, fontWeight: 'bold', marginBottom: 8}}>Chức vụ</Text>
                    <View style={styles.listPosition}>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginRight:6, lineHeight: 20}}>Công ty</Text>
                                <Image source={image.iconStar}></Image>
                            </View>
                            <Text>001 - Dương Gia Thái Bình</Text>
                        </View>
                        <View>
                            <Image source={image.iconArrowCheckDown} ></Image>
                        </View>
                    </View>
                    <View style={styles.listPosition}>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginRight:6, lineHeight: 20}}>Phòng ban</Text>
                                <Image source={image.iconStar}></Image>
                            </View>
                            <Text>Quản lý</Text>
                        </View>
                        <View>
                            <Image source={image.iconArrowCheckDown} ></Image>
                        </View>
                    </View>
                    <View style={styles.listPosition}>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginRight:6, lineHeight: 20}}>Chức vụ</Text>
                            </View>
                            <Text>1. Phó Giám đốc phụ trách chăn nuôi</Text>
                        </View>
                        <View>
                            <Image source={image.iconArrowCheckDown} ></Image>
                        </View>
                    </View>
                    <View style={styles.listPosition}>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginRight:6, lineHeight: 20}}>Trạng thái</Text>
                               
                            </View>
                            <Text>Hiệu lực</Text>   
                        </View>
                        <View>
                            <Image source={image.iconArrowCheckDown} ></Image>
                        </View>
                    </View>
                    <View style={styles.listPosition}>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginRight:6, lineHeight: 20}}>Nhóm tài khoản</Text>
                               
                            </View>
                            <Text>Quản lý</Text>   
                        </View>
                        <View>
                            <Image source={image.iconArrowCheckDown} ></Image>
                        </View>
                    </View>
                    <View style={styles.listPosition}>
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{marginRight:6, lineHeight: 20}}>Trang trại quản lý</Text>
                            </View>
                            <Text>Trang trại</Text>   
                        </View>
                        <View>
                            <Image source={image.iconArrowCheckDown} ></Image>
                        </View>
                    </View>
                </View>
            </ScrollView>
           
            <View style={styles.footer}>
                <MyButton 
                    onPress={()=> navigation.navigate('AccountScreen')}
                    props={{
                        widthBtn: 162,
                        heightBtn: 43,
                        backgroundColorBtn: '#fff',
                        borderColor: '#97D9A2',
                        borderWidth: 1,
                        colorBtn:'#97D9A2'

                    }}
                >Hủy</MyButton>
                <MyButton 
                    onPress={()=> navigation.navigate('AccountScreen')}
                    props={{
                        widthBtn: 162,
                        heightBtn: 43,
                        backgroundColorBtn: '#006013',
                        colorBtn:'#fff'

                    }}
                >Lưu</MyButton>
            </View>
            <DatePicker
                    modal
                    mode='date'
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginRight: '25%',
        color: '#212121',
        fontSize: 18,
        fontWeight: 'bold',
       
    },
    footer: {
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical:14
    },
    editProflie: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 24,
        backgroundColor: '#fff',
        marginTop: 10,

    },
    editImage: {
        
    },
    iconChoiceImage: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },

    editDetailProflie: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: '#fff',
    },
    listInput: {
        height: 56,
        width:'100%',
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginTop: 14,
    },
    editPositionProflie: {
        marginTop: 10,
        paddingHorizontal: 16,
        paddingVertical: 24,
        backgroundColor: '#fff'
    },
    listPosition: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 56,
        width:'100%',
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginTop: 14,
    }
})

export default EditAccountScreen