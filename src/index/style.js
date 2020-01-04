import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    search: {
    height: 88,
    width: "100%",
    padding: "0 30rpx",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
},

searchInput: {
    width: 690,
    height: 56,
    backgroundColor: "#ededed",
    borderRadius: 8,
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
},

searchIcon: {
    width: 28,
    height: 28,
},

searchText: {
    height: 42,
    lineHeight: 42,
    color: "#666",
    paddingLeft: 10,
    fontSize: 30,
},
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#dddddd',
        //设置次轴的对齐方式
        alignItems: 'center',
    },
    circleImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 100,
        marginBottom: 25,
    },
    textInput: {
        height: 40,
        width: 320,
        marginBottom: 5,
        backgroundColor: 'white',
        textAlign: 'center',
    },
    canNot: {
        width: 300,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        //设置主轴为两端对齐
        justifyContent: 'space-between',
    },
    loginTheWay: {
        flexDirection: 'row',
        //设置次轴的对齐方式
        alignItems: 'center',
        justifyContent: 'flex-start',
        width:320,
        height:450,
        //绝对定位
        /* position: 'absolute',*/
        //距离底部还有30 距离左边还有10 这样的一个位置
        /* bottom: 30,*/
        /*top:30,
        left: 10,*/
    },
    image: {
        width: 50,
        height: 50,
        marginLeft: 5,
        borderRadius: 25,
    },
    btnStyle: {
        height: 40,
        width:300,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: '#4398ff',
        justifyContent: 'center',
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        textAlignVertical: 'center',
    }

});

//输出本类  记住一定是exports  不是  export
module.exports = styles;
