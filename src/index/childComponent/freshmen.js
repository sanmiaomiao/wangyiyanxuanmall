import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    PixelRatio,
}from 'react-native';
import {setSpText} from '../../commen/screenUtil';


var {height, width} = Dimensions.get('window');
class Freshmen extends React.Component{


    render() {
        return(


            <View style={{ width: width,height:width/2+30,backgroundColor: "yellow",color: "#333"}}>
                <View style={{flex:1,alignItems: "center",flexDirection:'row', justifyContent: "center",height: 50,backgroundColor: "#fff"}}>
                        <Text >新人专享礼</Text>
                </View>
               <View style={{backgroundColor:'white',width:'100%',height: '90%',position:"relative",}}>
                   <View style={{height:"100%",backgroundColor:'pink',width: "49%",marginLeft:2}}>
                    <View style={{backgroundColor: "#F9E9CF",height:"100%" ,flex:1,alignItems: "center",paddingBottom: 16,justifyContent: "space-between",flexDirection: "column"}}>
                        <Text style={{paddingTop:10,height:50,fontSize:15}}>新人专属礼包</Text>
                        <View style={{width:"75%",height:"80%"}}>
                            <Image source={{uri:"https://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"}}
                                   style={{width:"100%",height:"100%"}}/>
                        </View>
                    </View>
               </View>
                   <View style={{position:"absolute",left:'50%', height: '50%',width: "50%",backgroundColor:'white'}}>
                    <View style={{backgroundColor: "#F9E9CF",flex:1,alignItems: "flex-start",paddingBottom: 16,justifyContent: "space-between",flexDirection: "column",position:"relative",marginBottom:2}}>
                        <View style={{flex:1,flexDirection:"column",width: "50%",}}>
                            <Text style={{paddingTop:10}}>福利社</Text>
                            <Text style={{fontSize:13,color:"grey"}}>今日特价</Text>
                        </View>
                        <View style={{zIndex:10, position: "absolute",flex:1,flexDirection: "column",left: "50%",backgroundColor: "#F59524",borderRadius:30, fontSize: 11,color: "white",overflow: "hidden",padding: 3}}>
                            <Text>￥16.9</Text>
                            <Text style={{textDecorationLine:'line-through'}}>￥19.9</Text>
                        </View>
                        <View style={{width:"75%",height:'75%',marginLeft:20,marginTop:10}}>
                            <Image
                                source={{uri:"https://yanxuan-item.nosdn.127.net/3102300f769fda614dae80f8fca53614.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"}}
                                style={{width:"100%",height:"100%"}}/>
                        </View>
                    </View>
                   </View>
                    <View style={styles.xrpt}>
                        <View style={{flex:1,flexDirection:"column",width: 60,marginLeft: 6}}>
                            <Text style={{paddingTop:10}}>新人拼团</Text>
                            <Text style={{fontSize:13 ,color:"white",backgroundColor:"#CBB693"}}>1元起包邮</Text>
                        </View>
                        <View style={styles.xrptPrice}>
                            <Text>￥1</Text>
                            <Text style={{textDecorationLine:"line-through"}}>￥13.9</Text>
                        </View>
                        <View style={{width:"75%",height:"75%",marginLeft:60,marginTop:10}}>
                            <Image
                                source={{uri:"https://yanxuan-item.nosdn.127.net/bb9025c24057dfb89403055ac5b9f85c.png?quality=75&amp;type=webp&amp;imageView&amp;thumbnail=200x200"}}
                              style={{width:"100%",height:"100%"}}/>
                        </View>
                    </View>

                </View>
            </View>

        )
    }
}

const styles=StyleSheet.create({
    xrpt:{
    position:"absolute",
        top:'50%',
        left:'50%',
    width: "50%",
    backgroundColor: "#F9E9CF",
    height: "50%",
   flex:1,
    paddingBottom: 13,
    justifyContent: "space-between",
},
xrptPrice:{
        zIndex:10,
    position: "absolute",
    flex:1,
    flexDirection: "column",
    left: "50%",
    backgroundColor: "#F59524",
    borderRadius: 100,
    fontSize: 11,
    color: "white",
    overflow: "hidden",
    padding: 3,
}
})
module.exports=Freshmen;



