import React from 'react';
import{
View,
Text,
Image,
StyleSheet,
TextInput,
TouchableOpacity,
Dimensions,
Button,
ScrollView,
ImageBackground,
}from 'react-native';

import {getsearchresult} from '../network/interface';

//获取屏幕的宽度
var {height, width} = Dimensions.get('window');

class SearchResult extends React.Component{
 static navigationOptions = {
        title: 'SearchResult',
    };
    constructor(props){
        super(props);
        this.state={
        	name:'',//搜索内容
        	list:[],//搜索列表
        	showCategory:false,//展示分类
        	showPriceR:false,//展示价格区间
        	categorylist:['全部','居家生活','服饰鞋包','母婴亲子','个护清洁','全球特色','运动旅行'],//分类数据
        }
    };
    getdata=async(name)=>{//获取数据方法

    	//console.log(name)
    	var nameafter=name.substring(1,name.length-1);
    	//console.log(nameafter)
    	this.setState({
		name:nameafter
	})
     var result=await getsearchresult({'name':nameafter});
    // console.log(result.data.length)

     if(result.data.length>=1){
     //	 alert(result.data)
     	this.setState({
		list:result.data
     })
 }else{
 	alert('搜索数据为空')
 }
     
   //  console.log(result.data)

    }
    onLoad=()=>{   //页面加载方法 	
    	console.log('onload')
	const { navigation } = this.props;
	var name=JSON.stringify(navigation.getParam('name'))
	
    this.getdata(name);
    }
     componentDidMount() {
        this.onLoad();



    }

    render(){
    	var showCategory=true;
    	return(
    		<View>
    		<View style={{flex:1,flexDirection:'row',alignItems:'center',marginTop:20,}}>
    	<TouchableOpacity onPress={()=>this.props.navigation.navigate('Index')} style={{width:30}}><Image style={{width:30,height:30}} source={require('../images/Home.png')}/></TouchableOpacity>
    		<View style={styles.search}>
    		
                    <View style={styles.searchInput}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Search')} style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                        <Image source={{uri:"http://yanxuan.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png"}} style={{width:15,height:15}}/>
                        <Text style={styles.searchText}>{this.state.name}</Text>
                    </TouchableOpacity>
                     <Image style={{width:30,height:30}} source={{uri:"http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png"}}/>
       
                    </View>
            </View>
    		</View>
    		<View style={{marginTop:35,flex:1,flexDirection:'row',justifyContent:'space-around'}}>
    		<View style={{marginLeft:40}}><Text style={{fontSize:15}}>综合</Text></View>
    		<View style={{marginTop:10,flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
    		<Text style={{fontSize:15}}onPress={()=>{
    			console.log('123'); 
    			this.setState({
    				showCategory:false,
    				showPriceR:!(this.state.showPriceR)})
    		}}>价格</Text>
    		<Image style={{width:15,height:15}} source={require('../images/down_arrow.png')}/>
    		</View>
    		<View style={{marginRight:40}}><Text style={{fontSize:15}} onPress={()=>{
    			console.log('123'); 
    			this.setState({
    				showPriceR:false,
    				showCategory:!(this.state.showCategory)})
    		}}>分类</Text></View>
    		
    		</View>
    		{(this.state.showCategory)?<View style={{marginTop:30,height:160,
    		flex:1,flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',paddingHorizontal:20,
    	position:'absolute',top:55,zIndex:10,backgroundColor:'white'}}>
    		{

				this.state.categorylist.map((item,index)=>{
					return(
						<View style={{marginLeft:30,marginTop:20}}>
						<Text style={{fontSize:17
					}}>{item}</Text>
						</View>
						)
				})    			
    		}
    		
    		</View>:null}
    		{
    			this.state.showPriceR?
    			<View style={{marginTop:30,height:160,position:'absolute',top:55,zIndex:10,backgroundColor:'white'}}>
    			<View style={{flex:1,flexDirection:'row',marginTop:10,
    			alignItems:'center',marginLeft:20,width:width/1.5}}>
    			<Text style={{fontSize:16}}>筛选</Text>
    			<TextInput placeholder='最低价' style={{height:40, borderWidth:1,borderColor:'gray',width:width/5,
    			paddingVertical:0,margin:10}}/>
    			<Text>—</Text>
    			<TextInput placeholder='最高价' style={{height:40,borderWidth:1,borderColor:'gray',width:width/5,
    			paddingVertical:0,margin:10}}/>
    			</View>
    			<View style={{flex:1,flexDirection:'row',height:50,marginTop:20,
    			alignItems:'center',marginLeft:20,width:width/1.5
    				}}>
    			<Text style={{fontSize:16}}>筛选</Text>
    			<Text style={{height:40,lineHeight:40,textAlign:'center', borderWidth:1,borderColor:'gray',width:width/5,
    			paddingVertical:0,margin:10}}>从低到高</Text>
    			
    			<Text style={{height:40, lineHeight:40,textAlign:'center', borderWidth:1,borderColor:'gray',width:width/5,
    			paddingVertical:0}}>从高到低</Text>
    			</View>
    			<View style={{marginTop:10,flex:1,flexDirection:'row',justifyContent:'space-around'}}>
    			<Text style={{borderWidth:1,width:width/2,textAlign:'center',fontSize:18,padding:5,borderColor:'#d9d9d9'}}  onPress={()=>{this.setState({
    				showPriceR:false,
    			})}}>取消</Text>
    			<Text style={{borderRightWidth:1,borderTopWidth:1,borderBottomWidth:1,borderColor:'#d9d9d9',width:width/2,textAlign:'center',fontSize:18,padding:5,color:'red'}}>确定</Text>
    			</View>
    			</View>:null
    		
    			
    		}
    		<ScrollView style={{marginTop:30}}>
    		<View style={{flex:1,flexDirection:'row',flexWrap:'wrap',minHeight:300,overflow:'hidden'}}>
    		{
    			this.state.list.map((item,index)=>{
                    var il=0;
                    var im=0;
                    item.listPromBanner.promoTitle?il=220:il=255;
                    item.listPromBanner.promoTitle?im=20:im=5;
    				return(
    				<View style={{width:width/2.1,height:360,marginBottom:10,
    				marginLeft:4,marginRight:4}}>

    				<Image source={{uri:item.listPicUrl}} style={{width:"100%",height:il,
    				}}/>
                        {item.listPromBanner.promoTitle?


                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <View style={{width:80,height:40,borderTopRightRadius:20,backgroundColor:'#c0070e',zIndex:5}}>
                                    <Text>{item.listPromBanner.promoTitle}</Text>
                                    <Text>{item.listPromBanner.promoSubTitle}</Text>
                                </View>
                                <View style={{backgroundColor:'green',height:40,width:122,marginLeft:-15}}>
                                    <Text style={{lineHeight: 40,marginLeft:30}}>{item.listPromBanner.content}</Text>
                                </View>
                            </View>:null

                        }

    				<View style={{marginTop:im}}>
    				<Text style={{lineHeight:20,height:40}}>{item.name}</Text>
    				</View>
					<View style={{flex:1,flexDirection: 'row',height:15}}>
    				<Text style={{margin:5,lineHeight:15,color:'#DD1A21'}}>￥{item.retailPrice}</Text>
                        {item.counterPrice?	<Text style={{margin:5,lineHeight:15,color:'gray',textDecorationLine:'line-through'}}>￥{item.counterPrice}</Text>:null}
    				</View>
    				<View style={{width:60,borderWidth:1, height:30,
    				borderColor:'#DD1A21',borderRadius:20,marginLeft:5}}>
    				<Text style={{margin:5,lineHeight:18,color:'#DD1A21'}}>超值价</Text>
    				</View>
    				</View>

    				)


    			})

    		}


    		</View>
                <Text style={{color:'white'}}>被挡住的部分</Text>
                <Text  style={{color:'white'}}>被挡住的部分</Text>
                <Text  style={{color:'white'}}>被挡住的部分</Text>
    		</ScrollView>
    		{(this.state.showCategory || this.state.showPriceR)?
    			<TouchableOpacity 
    			onPress={()=>{
    				this.setState({
    					showCategory:false,
    					showPriceR:false,
    				})
    			}}
    			style={{width:width,height:height-245,backgroundColor:'black',zIndex:5,opacity:0.7,position:'absolute',top:245}}></TouchableOpacity>
    			:null}

    		</View>

    		)
    }


}

var styles=StyleSheet.create({
	 search: {
        marginTop:10,
        height: 40,
        width: width-30,
        paddingLeft:10,
        paddingRight:20,
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
        justifyContent:'space-between',
        paddingLeft:10,

    },
})

module.exports=SearchResult;