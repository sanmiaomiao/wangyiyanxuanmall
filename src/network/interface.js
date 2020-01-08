

export function  getindexdata() {

    return new Promise((resolve, reject) => {
        fetch("http://192.168.43.196:4001/indexdata",{
            method: 'GET',
            credentials:'included',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }})
            .then((response) =>{
                return   response.json()
            } )
            .then((responseJson) => {
                console.log('1')
                console.log(responseJson)
                resolve(responseJson)
            })
            .catch((error) => {
                console.log('2')
                reject(error)
            });


    })

}
export function  getsearchinitdata() {

    return new Promise((resolve, reject) => {
        fetch("http://192.168.43.196:4001/searchinitdata",{
            method: 'GET',
            credentials:'included',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }})
            .then((response) =>{
                return   response.json()
            } )
            .then((responseJson) => {
                console.log('1')
                resolve(responseJson)
            })
            .catch((error) => {
                console.log('2')
                reject(error)
            });


    })

}

export function  getsearchresult(params) {
    var url="http://192.168.43.196:4001/searchresult";
    if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }
        

    return new Promise((resolve, reject) => {
        fetch(url,{
            method: 'GET',
            credentials:'included',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }})
            .then((response) =>{
                return   response.json()
            } )
            .then((responseJson) => {
                console.log('1')
                resolve(responseJson)
            })
            .catch((error) => {
                console.log('2')
                reject(error)
            });


    })

}

export function  getfenelidata() {

    return new Promise((resolve, reject) => {
        fetch("http://192.168.43.196:4001/fenleidata",{
            method: 'GET',
            credentials:'included',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }})
            .then((response) =>{
                return   response.json()
            } )
            .then((responseJson) => {
                console.log('1')
                console.log(responseJson)
                resolve(responseJson)
            })
            .catch((error) => {
                console.log('2')
                reject(error)
            });


    })

}


export function  getnavlist() {

    return new Promise((resolve, reject) => {
        fetch("http://192.168.43.196:4001/navlist",{
            method: 'GET',
            credentials:'included',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }})
            .then((response) =>{
                return   response.json()
            } )
            .then((responseJson) => {
                console.log('1')
                console.log(responseJson)
                resolve(responseJson)
            })
            .catch((error) => {
                console.log('2')
                reject(error)
            });


    })

}


export function  gettopics(num) {
    var url="http://192.168.43.196:4001/topics"+'?num='+num;

    return new Promise((resolve, reject) => {
        fetch(url,{
            method: 'GET',
            credentials:'included',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }})
            .then((response) =>{
                return   response.json()
            } )
            .then((responseJson) => {
                console.log('1')
                console.log(responseJson)
                resolve(responseJson)
            })
            .catch((error) => {
                console.log('2')
                reject(error)
            });


    })

}







