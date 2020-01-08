import React from 'react';

import {
    View,
    Image,


}from 'react-native';

class SimpleSwiper extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            index:0
        }
    }
    changeIndex=()=>{

            this.timer=setInterval(()=>{

                this.state.index===1? this.setState({
                    index:0
                }):this.setState({
                    index:1
                })
            },2000)

    }

    componentDidMount() {
        this.changeIndex();
    }
    componentWillUnmount(nextProps, nextState) {
        clearInterval(this.timer)
    }

    render() {
        var banner=this.props.banner;
        return(
            <View>
                <Image source={{uri:banner[this.state.index]}} style={{width:'100%',height:100}}/>
            </View>
        )
    }

}

module.exports=SimpleSwiper;