import React from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
}from 'react-native';

import SimpleSwiper from './simpleSwiper/simpleSwiper';

import {getfenelidata} from '../network/interface'

//获取屏幕的宽度
var {height, width} = Dimensions.get('window');

class Fenlei extends React.Component{
    constructor(props) {
        super(props);
        this.state= {
            goodsCount: 93,
            categorylist:['年货专区','暖冬好物','爆品专区','新品专区','居家生活','服饰鞋包','美食酒水','个护清洁','母婴亲子','运动旅行'
                ,'数码家电','全球特色'],
            selectedCategory:0,
            categoryL2List:[],
            headBanner:[
                'https://yanxuan.nosdn.127.net/9849945eee04966870e8b744d1dd41a6.jpg?quality=75&type=webp&imageView&thumbnail=0x196',
                'https://yanxuan.nosdn.127.net/28a3cb2db28f0b6f7c8c513980e2e802.jpg?quality=75&type=webp&imageView&thumbnail=0x196',
                'https://yanxuan.nosdn.127.net/edc311882c97da117f860264548212e1.png?quality=75&type=webp&imageView&thumbnail=0x196',
                'http://yanxuan.nosdn.127.net/dec6ff5ae8bae410809598950ba1f5b4.jpg?quality=75&type=webp&imageView&thumbnail=0x196',
                'https://yanxuan.nosdn.127.net/2dddf8439581d4c9b657fc19c9e04dc7.jpg?quality=75&type=webp&imageView&thumbnail=0x196',
                'https://yanxuan.nosdn.127.net/9fafb4adb40303dc2914c3aa04da03df.jpg?quality=75&type=webp&imageView&thumbnail=0x196',
                'https://yanxuan.nosdn.127.net/a657e5214585b1825b7970c4b956e3c2.jpg?quality=75&type=webp&imageView&thumbnail=0x196',
                'https://yanxuan.nosdn.127.net/0cf6e47037b7cc7688ec9845b543525f.jpg?quality=75&type=webp&imageView&thumbnail=0x196',
                'https://yanxuan.nosdn.127.net/3dbb62e200611707a0f818833b823d9a.jpg?quality=75&type=webp&imageView&thumbnail=0x196',
                'https://yanxuan.nosdn.127.net/7325584e6fcaf7a6af0fa469b605ac0e.jpg?quality=75&type=webp&imageView&thumbnail=0x196',
                ['https://yanxuan.nosdn.127.net/6ea5a277746a4e9849040bf2c619d6e9.jpg?type=webp&imageView&quality=75&thumbnail=0x196',
                    'https://yanxuan.nosdn.127.net/dee1cc1624fbeea1ba7c5195f8927d49.jpg?type=webp&imageView&quality=75&thumbnail=0x196'],
                'https://yanxuan.nosdn.127.net/a29e68a6f85dc934412b478edc907ee8.jpg?quality=75&type=webp&imageView&thumbnail=0x196',
            ]
        }
    }

    getdata= async ()=>{

        var result=await getfenelidata()
        //console.log(result.data[0].categoryL2List)
        var categoryL2List=result.data[0].categoryL2List
        this.setState({
            categoryL2List:categoryL2List
        })


    }
    componentDidMount() {
        this.getdata();
    }
    componentWillUnmount() {
        //清除定时器
    }

    render() {
        return(
            <View>

                    <View style={styles.search}>
                        <View style={styles.searchInput}>
                            <Image source={{uri:"http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png"}} style={{width:15,height:15}}/>
                            <Text style={styles.searchText} onPress={() => this.props.navigation.navigate('Search')}>商品搜索, 共{this.state.goodsCount}款好物</Text>
                        </View>
                    </View>
                <ScrollView>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{height:800,width:'20%'}}>
                            {
                                this.state.categorylist.map((item,index)=>{
                                    return(
                                            <View style={{paddingTop:10,paddingBottom: 20,paddingLeft:2,paddingRight:5}}>
                                                <Text style={this.state.selectedCategory===index? styles.active:styles.unactive} onPress={()=>{
                                                    this.setState({
                                                        selectedCategory:index
                                                    })
                                                }}>{item}</Text>
                                            </View>
                                        )

                                })
                            }
                        </View>
                        <View style={{ height:800,width:'80%'}}>
                            {
                                typeof (this.state.headBanner[this.state.selectedCategory])==='string'?
                                    <Image source={{uri:this.state.headBanner[this.state.selectedCategory]}} style={{width:'95%',height:100,margin:6}}/>:<SimpleSwiper banner={this.state.headBanner[this.state.selectedCategory]}/>
                            }
                            <View style={{flex: 1,flexDirection: 'row',flexWrap:'wrap',justifyContent:'center'}}>


                            {
                                this.state.categoryL2List[this.state.selectedCategory] &&this.state.categoryL2List[this.state.selectedCategory].map((item,index)=>{
                                    return(
                                        <View style={{padding:10}}>
                                            <Image  source={{uri:item.wapBannerUrl}} style={{width:70,height:70}}/>
                                            <Text style={{width:80}}>{item.name}</Text>
                                        </View>
                                    )
                                })
                            }

                            </View>
                        </View>
                    </View>


                </ScrollView>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    search: {
        marginTop:10,
        height: 50,
        width: width,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor: "#fff",
        paddingTop: 5,
        paddingBottom: 5,

    },
    searchText: {
        lineHeight: 42,
        color: "#666",
        paddingLeft: 10,
        fontSize: 15,
    },
    searchInput: {
        width: "100%",
        minHeight: 30,

        backgroundColor: "#ededed",
        borderRadius: 8,
        flex: 1,
        flexDirection: 'row',
        alignItems:"center",
        paddingLeft:10,

    },
    active:{
        color: '#ab2b2b',
        borderLeftWidth:1,
        borderLeftColor:'#ab2b2b',
        textAlign:'center',


    },
    unactive:{
        textAlign:'center',
    }





});



module.exports=Fenlei;


