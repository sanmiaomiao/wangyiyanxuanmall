import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    Dimensions,
    ScrollView,
    FlatList,
    ActivityIndicator,
    ScreenHelper,
    RefreshControl,
}from 'react-native';

import {getnavlist,gettopics} from "../network/interface";

//获取屏幕的宽度
var {height, width} = Dimensions.get('window');

class Worth extends React.Component {

    constructor(props) {
        super(props);
        this.myFlat = React.createRef();
        this.state={
            navlist:[],
            num:1,
            topics:[],
            enableScrollViewScroll: true,
            refreshing:false,
            scrollOffset:0,
        }
    }


    getnavlistdata=async ()=>{
        var result=await getnavlist();
        var navlist=result.data[0].navList;
        this.setState({
            navlist:navlist
        })
    }
    gettopics=async ()=>{
        var result=await gettopics(this.state.num);
        this.setState({
            num:this.state.num+1
        })
        console.log('topics')
        console.log(result.data.length);
        console.log(this.state.topics.length);
        var topics=this.state.topics;
        result.data.map((item)=>topics.push(item))
        //topics.push(result.data);
        this.setState({
            topics:topics,
            refreshing:false
        })

    }

    _renderItem =({item}) =>(
        <View style={{marginLeft:5,marginTop:10,borderRadius:20,borderWidth:1,borderColor:'transparent', overflow:'hidden',minHeight:185,backgroundColor:'white',width:width/2.2}}>
            <Image source={{uri:item.picUrl}} style={{width:'100%',height:(800/1440)*(width/2.2), backgroundColor:'red'}}/>
            <Text style={{width:width/2.2,marginLeft:5}}>{item.title}</Text>
            <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
                <Image source={{uri:item.avatar}} style={{width:20,height:20,borderRadius:20}}/>
                <Text>{item.nickname}</Text>
                <Image style={{width:20,height:20}} source={require('../images/eyes.png')}/>
                <Text>{Math.round(item.readCount/1000)}k</Text>
            </View>
        </View>


    )
    _reachend=()=>{
        console.log('_reachend')
        if (this.canLoadMore && this.state.topics.length>=1) {//避免频繁加载
            console.log('_reachend-in')
            this.setState({
                refreshing:true
            })
            this.gettopics();  //加载更多
            this.canLoadMore = false;
        }

    }

    renderFlatList=()=> {
        console.log(this.state.enableScrollViewScroll)
        console.log(this.state.scrollOffset)

        return (
            <View
                onStartShouldSetResponderCapture={() => {
                    this.setState({ enableScrollViewScroll: false });

                }}>
                <FlatList
                    backgroundColor={'green'}
                    data={this.state.topics}
                    renderItem={this._renderItem}
                    showsVerticalScrollIndicator={true}
                    numColumns ={2} // 一行3个
                    maxHeight={500}
                    marginBotton={30}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReachedThreshold={0.01}
                    onEndReached={this._reachend}
                    onMomentumScrollBegin={() => {
                        this.canLoadMore = true; //初始化时调用onEndReached的loadMore
                    }}
                    onScroll={this._onScroll2}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                        />
                    }

                />
            </View>
        );
    }

    onRefresh=()=> {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // 准备下拉刷新的5条数据
            var rowNewData = Array.from(new Array(5))
                .map((val, i) => ({
                    text: '下拉刷新增加的数据行 ' + (+this.state.loaded + i)
                }))
                .concat(this.state.rowData);
            this.setState({
                loaded: this.state.loaded + 5,
                isRefreshing: false,
                rowData: rowNewData,
            });
        }, 2000);
    }
    _onScroll1=(event)=>{
        console.log(' _onScroll11')
        let newScrollOffset=event.nativeEvent.contentOffset.y;
        console.log(newScrollOffset)
        if(newScrollOffset===328){
        this.setState({
            scrollOffset:newScrollOffset
        })
    }
    }
    _onScroll2=(event)=>{
        console.log(' _onScroll12')
        let newScrollOffset=event.nativeEvent.contentOffset.y;
        console.log(newScrollOffset)

    }




    componentDidMount() {
        this.getnavlistdata();
        this.gettopics();
        //console.log('333')
        //console.log(this._myScroll)
    }

    render() {
        return (
            <View onStartShouldSetResponderCapture={() => {
                this.setState({ enableScrollViewScroll: true });
            }}>
            <ScrollView scrollEnabled={this.state.enableScrollViewScroll}>

            <View style={{backgroundColor:'#eeeeee'}}>
            <ImageBackground style={{width: width, minHeight: 300}}
       source={{uri: 'http://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png'}}>
               <View style={{flex:1,flexDirection:'row',alignItems:'center',marginTop:20,marginLeft:10}}>
                   <Image source={{uri:"http://m.you.163.com/topic/index/img/topic_logo.c2284970.png"}} style={{width:70,height:40}}/>
                   <Text style={{color:'white'}}>严选好物&nbsp;用心生活</Text>
               </View>
                <ScrollView horizontal={true} style={{width:width/1.05,marginLeft:10,height:160,}}>
                <View style={{flex:1,flexDirection:'row',flexWrap:'wrap',backgroundColor:'white',width:2*width-70}}>
                        {
                            this.state.navlist.length>=1 &&this.state.navlist.map((item,index)=>{
                                return(
                                    <View style={{marginTop:10}}>
                                        <Image source={{uri:item.picUrl}} style={{width:50,height:50,marginLeft:25}}/>
                                        <Text style={{textAlign:'center',width:100}}>{item.mainTitle}</Text>
                                        <Text style={{fontSize:13,color:'#666',width:100,textAlign:'center'}}>{item.viceTitle}</Text>
                                    </View>
                                )


                            })
                        }
                    </View>
                </ScrollView>
            </ImageBackground>


            <View style={{margin:8}}>
                { this.state.topics.length?this.renderFlatList():null}


        </View>

            </View>
           </ScrollView>
            </View>

        )

    }
}

module.exports=Worth;