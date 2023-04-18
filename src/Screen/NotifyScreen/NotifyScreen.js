import { useState } from 'react'
import {
    View,
    Text, 
    TouchableWithoutFeedback,
    SafeAreaView,
    StyleSheet,
    Image,
    ImageBackground
} from 'react-native'
import {image} from '../../../access/image'

const NotifyScreen =({navigation})=> {
    const [listNotify, setListNotify] = useState([
        {
            icon: image.iconGrassNotify,
            nameNotify: 'Cho ăn',
            isread: false,
            id: 0,
        },
        {
            icon: image.iconStethoscopeNotify,
            nameNotify: 'Khám bệnh',
            isread: false,
            id: 1,
        },
        {
            icon: image.iconTickerNotify,
            nameNotify: 'Bò mang thai <25 ngày đẻ',
            isread: false,
            id: 2,
        },
        {
            icon: image.iconCalfNotify,
            nameNotify: 'Bê con > 4 tháng tuổi',
            isread: false,
            id: 3,
        },
        {
            icon: image.iconFramNotify,
            nameNotify: 'Xác nhận chuyển trang trại',
            isread: false,
            id: 4,
        }
    ])
    // get realTime
    const getCurrentDate=()=>{
 
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        var hours = new Date().getHours(); 
        var min = new Date().getMinutes();
        return  date + '/' + month + '/' + year + '  ' + hours + ':' + min ;//format: dd-mm-yyyy;
    }
    const date = getCurrentDate()
    const handleReadNotify=(index)=>{
        let arr = [...listNotify]
        arr.forEach(item=>{
            if(index == item.id){
                item.isread=true
                console.log(item)
            }
        })

        setListNotify(arr)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.EditHeaderAccount}>
                <TouchableWithoutFeedback onPress={()=> navigation.goBack()}>
                    <View style={{width:40, height: '100%', justifyContent: 'center'}}>
                        <Image source={image.iconArrowLeft}></Image>
                    </View>
                </TouchableWithoutFeedback>
                <Text style={styles.textHeader}>Thông báo</Text>
            </View>
           {listNotify.length > 0 ? 
            <View>
                {listNotify.map((item, index)=>{
                    return (
                        <TouchableWithoutFeedback onPress={()=>handleReadNotify(index)} key={index}>
                            <View style={styles.listNotify}>
                                <Image style={{width:40, height:40,}} source={item.icon}></Image>
                                <View style={{marginLeft: 20,}}>
                                    <Text style={[styles.textListNotify, item.isread === true ? styles.colorRead : styles.colorUnRead]}>{item.nameNotify}</Text>
                                    <Text style={{lineHeight: 20, fontSize: 16}}>{date}</Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </View>
           :<View style={{height: '80%', justifyContent:'center', alignItems: 'center', backgroundColor: '#fff',}}>
                <Image source={image.iconBellUnColor} />
                <Text style={{marginTop: 22}}>{date}</Text>
            </View>}
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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
        marginRight: '40%',
        color: '#212121',
        fontSize: 18,
        fontWeight: 'bold',
       
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
    }
})

export default NotifyScreen