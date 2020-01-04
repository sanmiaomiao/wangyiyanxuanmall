import React from 'react';
import {
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native';

var {height, width} = Dimensions.get('window');
var newGoodsList=[ ];

class New extends React.Component{


    render() {
        newGoodsList=this.props.newinfo;
        return(

                <View >
                    <View style={{flex:1,alignItems: "center",flexDirection:'row', justifyContent: "center",height: 50,backgroundColor: "#fff"}}>
                            <Text className="txt">周一周四 · 新品首发</Text>
                    </View>
                <View style={styles.aNewB}>
                    {
                        newGoodsList.map((item)=>{
                            return(
                                <View style={styles.aNewBItem} key={item.id}>
                                    <Image style={{width:"100%",height:'100%'}} source={{uri:item.listPicUrl}} />
                                    <Text style={styles.aNewBName}>{item.name}</Text>
                                    <Text style={styles.aNewBPrice}>￥{item.retailPrice}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({

    aNewB: {
    width: width,
    height: "auto",
    overflow: "hidden",
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',

},

    aNewBItem: {
    width: width/2-50,
        height:width/2,
    marginTop: 10,
    marginLeft: 21,
    marginRight: 21,
        marginBottom:70,
},

aNewBItemB:{
    marginLeft: 42,
},

aNewBImg: {
    width: 302,
    height: 302,
},
aNewBName: {
    textAlign: "center",
    width: "100%",
    height: 20,
    marginBottom: 14,
    overflow: "hidden",
    fontSize: 15,
    color: "#333",
},

aNewBPrice: {
    textAlign: "center",
    lineHeight: 15,
    fontSize: 15,
    color: "#b4282d",
},

})

module.exports=New;

