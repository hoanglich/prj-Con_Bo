import { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native'
import {image} from '../../../../access/image'
import MyButton from '../../../Component/Button/MyButton'
import ActionSheet from 'react-native-actions-sheet'

const AccountScreen=({navigation})=> {

    // thu gọn lại chỗ footer này => ý tưởng: có thể tạo một component dùng chung cho tất cả các Screen 

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.AccountHeader}>
                <TouchableWithoutFeedback onPress={()=> navigation.goBack()}>
                    <View style={{width: 40, height: '100%', justifyContent: 'center'}}>
                        <Image source={image.iconArrowLeft} style={{marginLeft: 16}}/>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textHeader}>Tài khoản</Text>
                <MyButton
                    props={{
                        widthBtn: 100,
                        heightBtn: 34,
                        backgroundColorBtn: '#006013',
                        colorBtn: '#fff',
                        marginRight: 16
                    }}
                    onPress={()=> navigation.navigate('EditAccountScreen')}
                >chỉnh sửa</MyButton>
            </View>
            <ScrollView>
                <View style={styles.nameUser}>
                    <Image source={image.user120} style={{width: 120, height: 120}}></Image>
                    <Text style={styles.idUser}>0101001</Text>
                    <Text style={styles.NameTextUser}>Nguyễn Hoàng Thanh Phước</Text>
                    <MyButton
                        props={{
                            widthBtn: 200, 
                            heightBtn: 34, 
                            colorBtn: '#006013',
                            backgroundColorBtn:'#fff',
                            borderColor: '#006013',
                            borderWidth: 1,
                            fontSizeBtn: 16,
                            marginTop: 20
                        }}
                    >Thay đổi mật khẩu</MyButton>
                </View>
                <View style={styles.detailProfile}>
                    <Text style={styles.headerDetail}>Thông tin chi tiết</Text>
                    <View style={{...styles.itemDetail, marginTop: 24}}>
                        <Text style={styles.textItem}>Ngày sinh</Text>
                        <Text style={styles.textDataDetail}>19/02/1987</Text>
                    </View>
                    <View style={styles.itemDetail}>
                        <Text style={styles.textItem}>Giới tính</Text>
                        <Text style={styles.textDataDetail}>Nam</Text>
                    </View>
                    <View style={styles.itemDetail}>
                        <Text style={styles.textItem}>CMT/CCCD</Text>
                        <Text style={styles.textDataDetail}>145644747</Text>
                    </View>
                    <View style={styles.itemDetail}>
                        <Text style={styles.textItem}>Số điện thoại 1</Text>
                        <Text style={styles.textDataDetail}>0325665245</Text>
                    </View>
                    <View style={styles.itemDetail}>
                        <Text style={styles.textItem}>Số điện thoại 2</Text>
                        <Text style={styles.textDataDetail}>0325665246</Text>
                    </View>
                    <View style={styles.itemDetail}>
                        <Text style={styles.textItem}>Ngày vào làm</Text>
                        <Text style={styles.textDataDetail}>19/02/2019</Text>
                    </View>
                    <View style={{...styles.itemDetail, borderBottomWidth: 0}}>
                        <Text style={styles.textItem}>Ghi chú</Text>
                        <Text style={styles.textDataDetail}>Abc</Text>
                    </View>
                </View>

                <View style={styles.position}>
                    <Text style={styles.headerDetail}>Chức vụ</Text>
                        <View style={{...styles.itemDetail, marginTop: 11}}>
                            <Text style={styles.textItem}>Công ty</Text>
                            <Text style={styles.textDataDetail}>001 - Dương Gia Thái Bình</Text>
                        </View>
                        <View style={styles.itemDetail}>
                            <Text style={styles.textItem}>Phòng ban</Text>
                            <Text style={styles.textDataDetail}>Quản lý</Text>
                        </View>
                        <View style={styles.itemDetail}>
                            <Text style={styles.textItem}>Chức vụ</Text>
                            <Text style={styles.textDataDetail}>Phó Giám đốc phụ trách chăn nuôi</Text>
                        </View>
                        <View style={styles.itemDetail}>
                            <Text style={styles.textItem}>Nhóm tài khoản</Text>
                            <View style={{alignItems: 'flex-end'}}>
                                <Text style={styles.textDataDetail}>Quản lý</Text>
                                <Text style={styles.textDataDetail}>Quản lý, thú y</Text>
                            </View>
                        </View>
                        <View style={styles.itemDetail}>
                            <Text style={styles.textItem}>Trang trại quảng lý</Text>
                            <View style={{alignItems: 'flex-end'}}>
                                <Text style={styles.textDataDetail}>Trang trại</Text>
                                <Text style={styles.textDataDetail}>Trang trại Hà Nội 1</Text>
                                <Text style={styles.textDataDetail}>Trang trại Hà Nội 2</Text>
                            </View>
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6',
        flex: 1
    },
    AccountHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor:'#fff',
        height: 80
    },
    textHeader: {
        color: '#212121',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft:50
    },
    nameUser: {
        marginTop: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#fff', 
        paddingBottom: 24, 
        paddingTop:24
    },
    idUser: {
        color:'#006013', 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginTop:20
    },
    NameTextUser: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color:'#212121', 
        marginTop:5,
        fontFamily: 'Roboto_Bold_Italic'
    },
    detailProfile: {
        marginTop: 10,
        backgroundColor: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 14
    },
    headerDetail: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#006013'
    },
    itemDetail: {
        flexDirection: 'row',
        borderBottomColor: '#E0E0E0',
        borderBottomWidth: 1,
        justifyContent:'space-between',
        alignItems: "flex-start",
        minHeight:40,
        paddingVertical: 10
    },
    textDataDetail: {
        color: '#212121',
        lineHeight: 24,
        fontSize: 16
    },
    textItem: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#797979', 
        lineHeight:24
    },
    position: {
        marginTop: 10,
        backgroundColor: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 14
    },
    
})

export default AccountScreen