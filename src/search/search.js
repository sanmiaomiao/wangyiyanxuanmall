import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    ScrollView,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
      PixelRatio,

} from 'react-native';

import {getsearchinitdata} from "../network/interface";
import axios from 'axios';
import DeviceStorage from '../commen/DeviceStorage';

//获取屏幕的宽度
var {height, width} = Dimensions.get('window');


class Search extends React.Component {
    static navigationOptions = {
        title: 'Search',
    };
    constructor(props){
        super(props);
        this.state={
            historyKeyword: [],            
            defaultKeyword: {},
            hotKeyword: [],
            
             text: '',
            show: false,
            textlist:[],
        }
    };

     //输入框文字改变
    textChange(text){
        console.log(text)
       axios(`https://suggest.taobao.com/sug?code=utf-8&q=${text}`).then(responseJSON=>{
            console.log('11')
            var data=JSON.parse(responseJSON.request._response);

           this.setState({
               show: true,
               text:text,
               textlist: data.result
           });
       })
            .catch(error=>{
                console.log('22')
                console.log(error)})
        console.log('123')


    }

    //隐藏自动提示列表
    hideList(text){
        console.log('hideList')
       // alert("您输入的内容为："+text);

       this.setState({
            show: false,
            text:text
        });
        setTimeout(()=>{ this.search();},500)//一秒之后自动搜索，不需点击搜索键


    }

    //搜索按钮点击
    search(){
        //搜索之前先存储数据
        //先判断此记录之前是否存在过
        let kw=this.state.historyKeyword;
        let tx=this.state.text;
        console.log(kw.indexOf(tx))
        if(kw.indexOf(tx)==-1){
            //如果不存在则添加进入记录
            kw.length===5?kw.shift():null; //判断历史记录个数，超过6个就删掉最早的一个，再添加一个新的
            console.log('123')
             kw.push(tx);
        let value=kw.join('_');
        DeviceStorage.save('searchhistory',value)
    }else{console.log('已存在');}
        
        alert("您输入的内容为："+this.state.text);
        this.props.navigation.navigate('SearchResult')
    }

    closeSearch=()=> {
        console.log('closeSearch')
       this.props.navigation.navigate('Index');
    };
    clearKeyword= ()=> {
        this.setData({
            keyword: '',
            searchStatus: false
        });
    };
    onLoad= ()=> {
        //获取存储的历史搜索记录        
        DeviceStorage.get('searchhistory').then((tags) => {

            console.log('tags')
            console.log(tags)
            var key=[];
            //先判断是否为空？
            if(tags===''){
                key=[];
            }else
            {
                console.log(tags)
            console.log(typeof(tags)) 
            console.log(tags.split('_'))
            key=tags.split('_');
               console.log("key")
            console.log(key)
            }
            
            this.setState({
                historyKeyword: key
            })
        });
        setTimeout(()=>{

           console.log(this.state.historyKeyword)
        }, 1000)
       

        this.getSearchKeyword();
    };

    getSearchKeyword=async ()=> {
        let that = this;
        var result=await getsearchinitdata();
     var res=result.data;
                that.setState({
                   // historyKeyword: res.data.historyKeywordList,
                    defaultKeyword: res.defaultKeyword,
                    hotKeyword: res.hotKeywordlist,
                });




    };
   /* inputChange=(e)=> {

        this.setState({
            keyword: e.nativeEvent.text,
            searchStatus: false
        });
        this.getHelpKeyword();
    };*/

    clearHistory=()=> {
        console.log('清除历史记录')        
        DeviceStorage.save('searchhistory','')
        this.setState({
            historyKeyword: []
        })


    };
    onKeywordTap= (event) =>{
        console.log('onKeywordTap')
        console.log(event._dispatchInstances.child.pendingProps)
        let kw=event._dispatchInstances.child.pendingProps;
        this.getSearchResult(kw);

    };
    getSearchResult=(keyword2)=> {
        this.setState({
            //keyword: keyword2,
            text:keyword2,
            
        });
       setTimeout(()=>{
        this.search();
       },1000)

     
    };
 


    componentDidMount() {
        this.onLoad();



    }


    render() {

        return (
            <View>
                           <View style={styles.flex}>
                <View style={[styles.flexDirection, styles.inputHeight]}>
                    <View style={styles.flex}>
                        <TextInput
                            style={styles.input}
                            returnKeyType="search"
                            placeholder='请输入搜索内容'
                            onChangeText={this.textChange.bind(this)}/>
                    </View>
                    <View style={styles.btn}>
                        <Text style={styles.search} onPress={this.search.bind(this)}>搜索</Text>
                    </View>
                    <View><Text onPress={this.closeSearch} style={styles.searchHeaderDel} >取消</Text></View>
                </View>


                {this.state.show && this.state.textlist!==undefined ?
                    <View style={styles.list}>
                        {
                            this.state.textlist.map((item,index)=>{
                                console.log(item)
                                return(
                                  <Text onPress={this.hideList.bind(this,item[0])}
                                          style={styles.item} numberOfLines={index+1}>{item[0]}</Text>


                                )
                            })

                        }

                    </View>
                    : null
                }
            </View>            
               
                <View style={styles.body}>
  {(this.state.historyKeyword.length>=1) ? <View style={styles.searchHistory}>
                        <View style={styles.searchKeywordsH}>
                            <Text  style={styles.searchKeywordsTitle}>历史记录</Text>
                              
                            <TouchableOpacity onPress={this.clearHistory} style={styles.searchKeywordsIcon}>
                                <Image  style={styles.searchKeywordsIcon}
                                    source={{uri:"http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/del1-93f0a4add4.png"}}/>
                      
                                </TouchableOpacity>                 
                           
                            
                        
                        </View>
                       
                        <View style={styles.searchKeywordsB}>
                            {
                                this.state.historyKeyword && this.state.historyKeyword.map((item)=>{
                                    return(
                                        <View style={styles.searchKeywordsItem}><Text onPress={this.onKeywordTap} style={styles.searchKeywordsItemText} >{item}</Text></View>
                                    )

                                })

                            }
                        </View>
                    </View>:null}


                       <View style={this.state.historyKeyword.length<1?styles.searchKeywords2:styles.searchKeywords}>
            <View >
                <Text style={styles.searchKeywordsTitle}>热门搜索</Text>
            </View>
            <View style={styles.searchKeywordsB}>
                {
                    this.state.hotKeyword && this.state.hotKeyword.map((item)=>{
                        return(
                            <View ><Text style={styles.searchKeywordsItem} onPress={this.onKeywordTap}>{item.keyword}</Text></View>
                        )

                    })

                }

            </View>
        </View>

                </View>
            </View>

        );
    }
}

var styles=StyleSheet.create({
 flex:{
        flex: 1,
    },
    flexDirection:{
        flexDirection:'row'
    },
    topStatus:{
        marginTop:25,
    },
    inputHeight:{
        height:45,
    },
    input:{
        height:45,
        borderWidth:1,
        marginLeft: 5,
        paddingLeft:5,
        borderColor: '#ccc',
        borderRadius: 4
    },
    btn:{
        width:55,
        marginLeft:-5,
        marginRight:5,
        backgroundColor:'#23BEFF',
        height:45,
        justifyContent:'center',
        alignItems: 'center'
    },
    search:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
    },
    list:{
        marginTop: 1/PixelRatio.get(),
        marginLeft:5,
        marginRight:5,
        height:200,
        borderColor:'#ccc',
        borderTopWidth: 1/PixelRatio.get(),
        zIndex:100,
    },
    item:{
        fontSize:16,
        padding:5,
        paddingTop:10,
        paddingBottom:10,
        borderWidth: 1/PixelRatio.get(),
        borderColor:'#ddd',
        borderTopWidth:0,
        backgroundColor:'white'
    },
searchHeaderDel:{
        width:50,
    textAlign:'center',
     fontSize:15,
    lineHeight:45,
    height:45,
    backgroundColor:'pink'
},
body:{
    width:width,
    position:'absolute',
    top:50,
    left:0,
    height:300,
},

 searchKeywordsB:{
    marginTop:5,
        width:"100%",
            height: 100,
            paddingLeft: 15,
            paddingRight: 15,
            flex:1,
            flexDirection:'row',
            flexWrap:'wrap',
    },
    searchKeywordsItem:{


        width: "auto",
            height: 25,
            lineHeight: 25,
            fontSize: 15,
            color: "#333",
            textAlign:'center',

            paddingHorizontal:15,
            margin:8,
            borderWidth:1,
            borderColor:'#999',
    },
     searchKeywords:{
       marginTop:80,

    },
    searchKeywords2:{
       marginTop:10,

    },
    searchKeywordsIcon:{
         width:30,
         height:30,
    }
,
searchKeywordsH:{
    marginLeft:0,
    marginTop:20,
    flex:1,
    flexDirection:'row',
    height:60,
    width:width,
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:10,
},
searchHistory:{
width:width,
},
searchKeywordsTitle:{

    width:100,
}


})

module.exports=Search;
