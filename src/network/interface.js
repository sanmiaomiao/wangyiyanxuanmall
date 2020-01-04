

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








