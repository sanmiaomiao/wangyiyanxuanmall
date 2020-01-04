import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
}from 'react-native';
var  brandList=[ ];

var {height, width} = Dimensions.get('window');
class Brand extends React.Component{

    render() {
       // brandList=this.props.brandinfo;
        brandList=this.props.brandinfo;
        return(

            <View >
                <View style={{flex:1,alignItems: "center",flexDirection:'row', justifyContent: "center",height: 50,backgroundColor: "#fff"}}>
                        <Text>品牌制造商直供</Text>
                </View>
                <View style={styles.aBrandB}>
                    {brandList.map((item)=>{
                        return(
                                <View style={styles.aBrandItem1} key={item.id}>
                                    <View style={{position: 'relative',width:"100%",height:"100%"}}>
                                        <Image style={{width:"100%",height:"100%"}} source={{uri:item.picUrl}}/>
                                        <View style={{width:'100%',height:'100%',position: 'absolute',left: 3,top: 3}}>
                                            <Text style={styles.aBrandBMtBrand}>{item.name}</Text>
                                            <Text style={styles.aBrandBMtPrice}>{item.floorPrice}</Text>
                                            <Text style={styles.aBrandBMtUnit}>元起</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                    })
                    }

                </View>
            </View>
        )
    }
}
var styles=StyleSheet.create({
    aBrandB: {
    width: width,
    height: "auto",
    overflow: "hidden",
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',

},


aBrandBMtBrand: {
    fontSize: 18,
    height: 25,
    color: "#333",
},
aBrandBMtPrice:{
    fontSize: 15,
        color: "#999",
},
aBrandBMtUnit: {
    fontSize: 15,
    color: "#999",
},

aBrandItem1: {
    width: width/2-2,
    height: width/3,
    overflow: "hidden",
    marginLeft: 1,
    backgroundColor: 'pink',

},
aBrandItem1img: {
    width: '100%',
    height: "85%",
}

})

module.exports=Brand;
