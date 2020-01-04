

import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    View,
    Dimensions,
    ScrollView,
} from 'react-native';

import Swiper from './childComponent/swiper';
import Category from './childComponent/category';
import Freshmen from './childComponent/freshmen';
import Brand from './childComponent/brand';
import New from './childComponent/new';
import {getindexdata} from "../network/interface";
//屏幕信息

//获取屏幕的宽度
var {height, width} = Dimensions.get('window');



class Index extends Component {
    static navigationOptions={
        title:'首页',//设置导航栏标题
    }

    constructor(props) {
        super(props);
        this.state={
            goodsCount: 93,
            category:[],
            freshMenBenus:[],
            newGoods: [],
            hotGoods: [],
            topics: [],
            brands: [],
            banner: [],
            channel: []
        }
    }


    getIndexData=async()=>{
        console.log('getdata')
        const result=await getindexdata();
        console.log(result);
        var indexData=result.data[0].data
        this.setState({
            category:indexData.categoryList,
            freshMenBenus: indexData.indexActivityModule,
            newGoods: indexData.newGoodsList,
            hotGoods: indexData.hotGoodsList,
            topics: indexData.topicList,
            brands: indexData.brandList,
            banner: indexData.banner,
            channel: indexData.channel,
        })


    }
    //初始化数据
    componentDidMount() {
        this.getIndexData();
    };
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        }

    }


    render() {
        return (
            <View>
                <ScrollView >
                <View style={styles.search}>
                    <View style={styles.searchInput}>
                        <Image source={{uri:"http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png"}} style={{width:15,height:15}}/>
                        <Text style={styles.searchText} onPress={() => this.props.navigation.navigate('Search')}>商品搜索, 共{this.state.goodsCount}款好物</Text>
                    </View>
                </View>
                <View>
                    <Swiper bannerinfo={this.state.banner} />
                </View>
                <View style={styles.mMenu}>
                    {
                        this.state.channel.map((item)=>{
                            return(
                                <View style={styles.mMenuItem} key={item.id}>
                                        <Image source={{uri:item.icon}} style={styles.mMenuImage} />
                                        <Text style={styles.mMenuText}>{item.desc}</Text>


                                </View>

                            )

                        })
                    }

                </View>
                <Category categoryinfo={this.state.category} />
                <Freshmen/>
                    <Brand brandinfo={this.state.brands} />
                    <New newinfo={this.state.newGoods}/>

                </ScrollView>
            </View>





        );

    }
}

const styles = StyleSheet.create({
    search: {
        marginTop:10,
        height: 40,
        width: width,
        paddingLeft:30,
        paddingRight:30,
        backgroundColor: "#fff",

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
    mMenu: {
    flex:1,
    height: 30,
    width: width,
    flexDirection:'row',
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor:"#fff",
},
    mMenuItem:{
    flex: 1,
    flexDirection:'row',
        justifyContent:'center',
    paddingTop:20,
},

    mMenuImage: {
    width: 20,
    height: 20,
    marginBottom: 12,
},

    mMenuText: {
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
    color: "#333",
}




});


//输出本类  记住一定是exports  不是  export
module.exports = Index;
