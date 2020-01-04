import AutoSearch from "./childComponents/autoSearch";

<View className="no-search" wx:if="{{ !searchStatus}}">
    <View className="serach-keywords search-history" wx:if="{{!keyword  && historyKeyword.length}}">
        <View className="h">
            <Text className="title">历史记录</Text>
            <Image className="icon" bindtap="clearHistory"
                   source="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/del1-93f0a4add4.png"/>
        </View>
        <View className="b">
            <View className="item" bindtap="onKeywordTap" data-keyword="{{item}}" wx:for="{{historyKeyword}}"
                  hover-class="navigator-hover">{{item}}</View>
        </View>
    </View>
    <View class="serach-keywords search-hot" wx:if="{{!keyword}}">
        <View class="h">
            <text class="title">热门搜索</text>
        </View>
        <View class="b">
            <View class="item {{item.is_hot === 1 ? 'active' : ''}}" hover-class="navigator-hover" bindtap="onKeywordTap" data-keyword="{{item.keyword}}" wx:for="{{hotKeyword}}">{{item.keyword}}</View>
        </View>
    </View>
    <View class="shelper-list" wx:if="{{keyword}}">
        <View class="item" hover-class="navigator-hover" wx:for="{{helpKeyword}}" bindtap="onKeywordTap" data-keyword="{{item}}">{{item}}</View>
    </View>
</View>

{
    noSearch:{
    height: "auto",
    overflow: "hidden",
    marginTop: 91,
},

serachKeywords:{
    backgroundColor: "#fff",
    width: 750,
    height: "auto",
    overflow: "hidden",
    marginBottom: 20,
}

serachKeywordsH:{
   // padding: 0 31.25rpx,
    height: 93,
    lineHeight: 93,
    width: "100%",
    color:"#999",
    fontSize: 29,
}

serachKeywordsTitle:{
    //display: block,
    width: 120,
   // float: left,
}

serachKeywordsIcon:{
    marginTop: 19,
    //float: right,
   // display: block,
    marginLeft: 511,
    height: 55,
    width: 55,
}

serachKeywordsB:{
    width: 750,
    height: "auto",
    overflow: "hidden",
    paddingLeft: 31.25,
}

serachKeywordsItem:{
  //  display: inline-block,
    width: "auto",
    height: 48,
    lineHeight: 48,
    padding:0 15,
   // border: 1px solid #999,
    //margin: 0 31.25rpx 31.25rpx 0,
    fontSize: 24,
    color: "#333",
}

serachKeywordsItemActive:{
    color: "#b4282d",
   // border: 1px solid #b4282d,
}

shelperList:{
    width: 750,
    height: auto,
    overflow: hidden,
    background: "#fff",
    //padding: 0 31.25rpx,
}

shelperListItem:{
    height: 93,
    width: 687.5,
    lineHeight: 93,
    fontSize: 24,
    color: "#333",
   // border-bottom: 1px solid #f4f4f4,
}

}



<View style={styles.container} >

    <View style={styles.searchHeader} >
        <View style={styles.searchHeaderInputBox} >
            <Image style={styles.searchHeaderIcon}
                   source={{uri:"http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/search2-2fb94833aa.png"}}/>
            {/*<TextInput name="input" style={styles.searchHeaderKeyword}  value={this.state.keyword}
                                   onChange={this.inputChange} onFocus={this.inputFocus} onEndEditing={this.onKeywordConfirm}
                                   placeholder={this.state.defaultKeyword.keyword}/>*/}
            <AutoSearch/>

            {this.state.keyword? <View onAccessibilityTap={this.clearKeyword} accessible={true}><Image style={styles.searchHeaderIcon}
                                                                                                       source={{uri:"http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/clearIpt-f71b83e3c2.png"}}/></View> :null}
        </View>
        <View style={styles.searchHeaderDel} ><Text onPress={this.closeSearch}>取消</Text></View>



    </View>
    {/*  <ScrollView style={styles.container}>*/}
    { !this.state.searchStatus? <View style={styles.noSearch} >
        {/*  {(!this.state.keyword  && this.state.historyKeyword && this.state.historyKeyword.length) ? <View  style={styles.searchKeywords}>
                        <View style={styles.searchKeywordsH}>
                            <Text  style={styles.searchKeywordsTitle}>历史记录</Text>
                            <View onAccessibilityTap={this.clearHistory} accessible={true}>
                            <Image  style={styles.searchKeywordsIcon}
                                    source="http://nos.netease.com/mailpub/hxm/yanxuan-wap/p/20150730/style/img/icon-normal/del1-93f0a4add4.png"/></View>
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
                    </View>:null}*/}
        {!this.state.keyword? <View >
            <View style={styles.searchKeywords}>
                <Text style={styles.searchKeywordsTitle}>热门搜索</Text>
            </View>
            <View style={styles.searchKeywordsB}>
                {
                    this.state.hotKeyword && this.state.hotKeyword.map((item)=>{
                        return(
                            <View style={styles.searchKeywordsItem}><Text onPress={this.onKeywordTap}>{item.keyword}</Text></View>
                        )

                    })

                }

            </View>
        </View>:null}
        {this.state.keyword? <View style={styles.shelperList}>
            {/*               {
                            this.state.hotKeyword && this.state.hotKeyword.map((item)=>{
                                return(
                                    <View style={styles.shelperListItem}><Text onPress={this.onKeywordTap}>{item}</Text></View>
                                )

                            })

                        }*/}



        </View>:null}
    </View>:null}
    {/*   </ScrollView>*/}




</View>


{


    container:{
        width:width,
            minHeight:50,
            /*backgroundColor: "#f4f4f4",*/
            backgroundColor:"red",
    },
    autocompleteContainer: {
        flex: 1,
            left: 0,
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: 1
    },
    itemText: {
        fontSize: 15,
            margin: 2
    },
    descriptionContainer: {
        // `backgroundColor` needs to be set otherwise the
        // autocomplete input will disappear on text input.
        backgroundColor: '#F5FCFF',
            marginTop: 25
    },
    infoText: {
        textAlign: 'center'
    },
    titleText: {
        fontSize: 18,
            fontWeight: '500',
            marginBottom: 10,
            marginTop: 10,
            textAlign: 'center'
    },
    directorText: {
        color: 'grey',
            fontSize: 12,
            marginBottom: 10,
            textAlign: 'center'
    },
    openingText: {
        textAlign: 'center'
    },

    searchHeader:{
        marginTop:40,
            width: "100%",
            height: 50,
            flex:1,
            /* backgroundColor: "#fff",*/
            backgroundColor:'pink',
            flexDirection:'row',
            alignItems:'center',
            /* borderBottom: 1px solid rgba(0,0,0,.15),
             padding: 0 31.25rpx,*/
            fontSize: 29,
            color: "#333",
    },
    searchHeaderInputBox:{
        position: "relative",
            flex: 1,
            width:'70%',
            height: "80%",
            lineHeight: 59,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'flex-start',
            /* backgroundColor:"#f4f4f4",*/
            backgroundColor:'pink',
            marginLeft: 30,
            borderRadius: 5,
    },

    searchHeaderIcon:{
        width: 25,
            height: 25,
            marginLeft:10,
            backgroundColor:'green'
    },
    searchHeaderDel:{
        width: '20%',
            height: '100%',
            zIndex: 10,
            paddingLeft: width/10-width/20,
            paddingTop:15,
            backgroundColor:'blue',
    },

    searchHeaderKeyword:{
        width: '70%',
            height: "100%",
            paddingLeft: 15,
            marginHorizontal:5,
    },

    searchHeaderRight:{
        marginTop: 24,
            marginLeft: 31,
            marginRight: 6,
            width: 58,
            height: 43,
            lineHeight: 43,
    },
    noSearch:{
        height: "auto",
            overflow: "hidden",
            marginTop: 91,
    },

    searchKeywords:{
        backgroundColor: "#fff",
            width: 750,
            height: "auto",
            overflow: "hidden",
            marginBottom: 20,
    },

    searchKeywordsH:{
        // padding: 0 31.25rpx,
        height: 93,
            lineHeight: 93,
            width: "100%",
            color:"#999",
            fontSize: 15,
    },

    searchKeywordsTitle:{
        //display: block,
        width: 120,
        // float: left,
    },

    searchKeywordsIcon:{
        marginTop: 19,
            //float: right,
            // display: block,
            marginLeft: 511,
            height: 55,
            width: 55,
    }
,
    searchKeywordsB:{
        width: width,
            height: "auto",
            overflow: "hidden",
            paddingLeft: 15,
            paddingRight: 15,
            flex:1,
            flexDirection:'row',
            flexWrap:'wrap',
    },

    searchKeywordsItem:{
        //  display: inline-block,

        width: "auto",
            height: 25,
            lineHeight: 15,
            //  padding:0 15,
            // border: 1px solid #999,
            //margin: 0 31.25rpx 31.25rpx 0,
            fontSize: 20,
            color: "#333",
            paddingHorizontal:15,
            margin:8,
            borderWidth:1,
            borderColor:'#999'



    },

    searchKeywordsItemText:{
        backgroundColor:'red'
    }
,
    searchKeywordsItemActive:{
        color: "#b4282d",
        // border: 1px solid #b4282d,
    },

    shelperList:{
        width: 750,
            height: "auto",
            overflow: "hidden",
            backgroundColor: "#fff",
        //padding: 0 31.25rpx,
    }
,
    shelperListItem:{
        height: 93,
            width: 687.5,
            lineHeight: 93,
            fontSize: 24,
            color: "#333",
        // border-bottom: 1px solid #f4f4f4,
    }
,
