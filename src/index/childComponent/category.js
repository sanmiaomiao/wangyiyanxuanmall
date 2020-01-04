import React from 'react';

import {
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
}from 'react-native';

var categoryList= [];
//获取屏幕的宽度
var {height, width} = Dimensions.get('window');


    class Category extends React.Component{


     render() {
         categoryList=this.props.categoryinfo;
         return (
             <View style={{ width:width,minHeight:200}}>

                 <View style={{width:width,flex:1,flexDirection: 'row',alignItems: 'flex-start',justifyContent: 'space-between',flexWrap: 'wrap',}}>
                     {
                         categoryList.map((item,index)=>{
                             return(

                                     <View  key={item.id} style={{width:'20%',}}>
                                         <View>
                                             <Image source={{uri:item.picUrl}} style={{ width: '50%',height:40,marginLeft:'25%',marginTop:30,
                                             }} key={index}/>
                                             <Text  style={{textAlign: 'center',width:width/5,}}>{item.text}</Text>
                                         </View>

                                     </View>

                                 )
                         })


                     }


                 </View>

             </View>
         );




}
}

const  styles= StyleSheet.create({

category:{
    paddingTop:100,
    width:width,
    backgroundColor: "#fff",

},
categoryItem: {
    width:'50%',
    paddingTop:20,
    paddingBottom:20,
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap:'wrap',


},

categoryImage: {
    width: 100,
    height: 100,
},

categoryText: {
    paddingTop:20,
    fontSize: 15,
    textAlign: "center",
    lineHeight: 20,
    color: "#333",
},
})



module.exports=Category;
