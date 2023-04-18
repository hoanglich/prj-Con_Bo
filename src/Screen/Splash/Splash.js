import { View,
         Text,
         StyleSheet,
         ImageBackground,
         Image,
         ActivityIndicator
        } from "react-native";
import { image } from "../../../access/image";

function SplashScreen ({navigation}) {

    setTimeout(()=>{navigation.navigate('Login')},1000)
    return (
        <View style ={styles.container}>
            <ImageBackground style={styles.image} source={image.backgroundImage} >
                <Image source={image.logoSplash} style={styles.logoSplash}></Image>
                <View style={[styles.activityIndicator]}>
                    <ActivityIndicator size='large'/>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1 
    },
    textcontent: {
        flex: 1,
        fontSize: 30,
    },
    image: {
        flex: 1,   
    },
    logoSplash: {      
        width: 200,
        height: 147.45,
        marginLeft: 87,
        marginTop: 112,
        background: '#FFFFFF',
        boxShadow: '0 4 10 rgba(59, 142, 222, 0.5)',
    },
    activityIndicator: {
        marginTop: 10,
    }
   
})

export default SplashScreen