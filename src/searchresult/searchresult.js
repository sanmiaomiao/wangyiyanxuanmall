import React from 'react';
import{
View,
Text,
}from 'react-native';

class SearchResult extends React.Component{
 static navigationOptions = {
        title: 'SearchResult',
    };

    render(){

    	return(
    		<View><Text>搜索结果界面</Text></View>

    		)
    }


}

module.exports=SearchResult;