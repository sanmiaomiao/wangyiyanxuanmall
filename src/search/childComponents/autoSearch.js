import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    PixelRatio
} from 'react-native';
import axios from 'axios';


//输入框组件
class AutoSearch extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            show: false,
            textlist:[],
        };
    }

    //组件渲染
    render() {
        return (
            <View style={styles.flex}>
                <View style={[styles.flexDirection, styles.inputHeight]}>
                    <View style={styles.flex}>
                        <TextInput
                            style={styles.input}
                            returnKeyType="search"
                            value={this.state.text}
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
        );
    }

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
        setTimeout(()=>{ this.search();},1000)//一秒之后自动搜索，不需点击搜索键


    }

    //搜索按钮点击
    search(){
        alert("您输入的内容为："+this.state.text);
    }
    //取消搜索
    closeSearch=()=>{
        this.props.closeSearch();
    }

}

//样式定义
const styles = StyleSheet.create({
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
        zIndex:1000,
    },
    item:{
        fontSize:16,
        padding:5,
        paddingTop:10,
        paddingBottom:10,
        borderWidth: 1/PixelRatio.get(),
        borderColor:'#ddd',
        borderTopWidth:0,
    },
searchHeaderDel:{
        width:50,
    textAlign:'center',
     fontSize:15,
    lineHeight:45,
    height:45,
    backgroundColor: 'pink',
}
});

module.exports=AutoSearch;
