import React , {useState,useEffect} from 'react'
import ReactDOM from 'react-dom'
import 'regenerator-runtime/runtime'

const Web3 = require('web3');
const App = () => { 

    useEffect(async ()=>{
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
            // console.log('version is',web3.eth.getBalance('0xB44b9522eb4c5cFeD4d8364f9816571C818Cd4FC',function(error,result){
            //     if(error){
            //         console.log('报错了',error)
            //     }else{
            //         console.log('打印下结果',result)
            //     }
            // }))
            await window.ethereum.enable();
            
            // // console.log('当前所有钱包',web3.eth)
            // const res = await  web3.eth.getAccounts()
            // console.log(res)
            web3.eth.requestAccounts().then(console.log)

          } else {
            // set the provider you want from Web3.providers
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
            console.log('wu')
          }
    },[])

    return(
        <div>
            测试鲜蘑菇
        </div>
    )
}

const root = document.getElementById('root')

ReactDOM.render(<App/>,root)