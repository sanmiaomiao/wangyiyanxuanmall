

import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
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

import Home from './Home';
import Fenlei from '../fenlei/fenlei';
import Worth from '../worth/worth';
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
            selectedTab:'tb_index',
        }
    }



    //初始化数据
    componentDidMount() {
    };
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return
        }

    }


    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="首页"
                        renderIcon={() => <Image style={styles.image} source={require('../images/shop.png')} />}
                        renderSelectedIcon={() => <Image style={styles.image} source={require('../images/shop.png')} />}
                        badgeText=""
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <View style={styles.page1}>
                            <Home navigation={this.props.navigation}/>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'category'}
                        title="分类"
                        renderIcon={() => <Image style={styles.image} source={require('../images/category.png')} />}
                        renderSelectedIcon={() => <Image style={styles.image} source={require('../images/category.png')} />}
                        onPress={() => this.setState({ selectedTab: 'category' })}>
                        <View style={styles.page2}>
                            <Fenlei/>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'pic'}
                        title="值得买"
                        renderIcon={() => <Image style={styles.image} source={require('../images/pic.png')} />}
                        renderSelectedIcon={() => <Image style={styles.image} source={require('../images/pic.png')} />}
                        onPress={() => this.setState({ selectedTab: 'pic' })}>
                        <View style={styles.page3}>
                            <Worth/>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="购物车"
                        renderIcon={() => <Image style={styles.image} source={require('../images/cart.png')} />}
                        renderSelectedIcon={() => <Image style={styles.image} source={require('../images/cart.png')} />}
                        onPress={() => this.setState({ selectedTab: 'cart' })}>
                        <View style={styles.page4}></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="个人"
                        renderIcon={() => <Image style={styles.image} source={require('../images/account.png')} />}
                        renderSelectedIcon={() => <Image style={styles.image} source={require('../images/account.png')} />}
                        onPress={() => this.setState({ selectedTab: 'profile' })}>
                        <View style={styles.page5}></View>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>






        );

    }
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1: {
        flex: 1,
       // backgroundColor: 'red'
    },
    page2: {
        flex: 1,
       // backgroundColor: 'yellow'
    }, page3: {
        flex: 1,
       // backgroundColor: 'blue'
    }, page4: {
        flex: 1,
        backgroundColor: 'green'
    }, page5: {
        flex: 1,
        backgroundColor: 'red'
    },
    image: {
        height: 22,
        width: 22
    }



});


//输出本类  记住一定是exports  不是  export
module.exports = Index;
