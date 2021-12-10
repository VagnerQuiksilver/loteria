import React from 'react'
import {View,Text} from 'react-native'
import Estilos from '../estilos/Estilos'
import Globais from '../globais/Globais'
import AsyncStorage from '@react-native-async-storage/async-storage';

//função retorna para o painel de numeros os numeros e os numeros sorteados
export function percorrerNumeros(setLoading,setTodosOsnumerosDoPainel,setModalVisivel,numerosSorteados,tipoJogo){  
    let nmrs=[]  
    let exist=false; 
    let sortear
    if(tipoJogo=='duplasena'){
        sortear=50
    }else if(tipoJogo=='lotofacil'){
        sortear=25
    }else if(tipoJogo=='megasena'){
        sortear=60
    }else if(tipoJogo=='quina'){
        sortear=80
    }
    
        for(let i=0;i<sortear;i++){
            for(let ns=0;ns<numerosSorteados.length;ns++){
                if(Globais.numerosDoPainel[i]==numerosSorteados[ns]){
                    nmrs[i]=<View 
                                style={tipoJogo=='lotofacil'?
                                    [Estilos.numerosLotofacil,{backgroundColor:"#00d"}]
                                :
                                    [Estilos.numeros,{backgroundColor:"#00d"}]
                            }
                                key={Globais.numerosDoPainel[i]}
                            >
                                <Text style={Estilos.txtNumerosDoPainel}>{Globais.numerosDoPainel[i]}</Text>
                            </View>
                    exist=true;
                }
            }
            if(exist==false){
                nmrs[i]=<View style={tipoJogo=='lotofacil'?Estilos.numerosLotofacil:Estilos.numeros} key={Globais.numerosDoPainel[i]}>
                            <Text style={[Estilos.txtNumerosDoPainel,{color:"#800"}]}>{Globais.numerosDoPainel[i]}</Text>
                        </View>                            
            }              
            exist=false;
        }
        setTodosOsnumerosDoPainel(nmrs)   
        if(numerosSorteados!=""){
            setModalVisivel(true)
        }  
        if(setLoading){
            setTimeout(()=>{setLoading(false)},500) 
        }
           
}

//função que retorno o resultado da api
export async function ObterApi(tipoJogo,signal){

    console.log({signal})
    
    const retApi= await fetch('https://apiloterias.com.br/app/resultado?loteria='+tipoJogo+'&token=sASYBV5xvE1R882',{signal})
    const resApi= await retApi.json()

    return resApi
}

//função que seleciona a qtde de numeros a sortear e limpa os numeros marcados do painel
export function quantidade(num,setQtdNumerosASortear,setNumerosSorteados){
    setQtdNumerosASortear(num)
    setNumerosSorteados([])
}

//função sorteia os números
export function sortear(tipoJogo,qtdNumerosASortear,setQtdNumerosASortear,setNumerosSorteados,setVerificar){
    setVerificar(true)
    let numeroSorteado;
    let sorteados=[];
    let verificaNumSorteado
    let tamanho
    if(tipoJogo=='duplasena'){
        tamanho=50
    }else if(tipoJogo=='lotofacil'){
        tamanho=25
    }else if(tipoJogo=='megasena'){
        tamanho=60
    }else if(tipoJogo=='quina'){
        tamanho=80
    }
    if(qtdNumerosASortear!=null){
        for(var i=0;i<qtdNumerosASortear;i++){
            numeroSorteado=String(Math.round(Math.random()*tamanho));
            if(numeroSorteado<10){
                verificaNumSorteado=sorteados.indexOf(("0"+numeroSorteado))
            }else{
                verificaNumSorteado=sorteados.indexOf(numeroSorteado)
            }               
            
            if(verificaNumSorteado<0 && numeroSorteado!="0"){
                numeroSorteado <10 ? sorteados[i]="0"+numeroSorteado:sorteados[i]=numeroSorteado        
            }else{
                i--
            }  
        }        
    }else{
        alert("Selecione a quantidade de números a sortear.")
    }    
    setNumerosSorteados(sorteados.sort())  
    setQtdNumerosASortear(null)
}

//função decha janela ModalBtnSalvarAposta
export function cancelarAposta(setModalVisivel,setNumerosSorteados,setVerificar){
    setNumerosSorteados([])
    setModalVisivel(false)
    
    setTimeout(()=>{setVerificar(false)},1000)
}

//função q retorna os valores do AsyncStorage
export async function getAsync(chave){
    
    const retornoAsync=await AsyncStorage.getItem(chave)
    let retJson=JSON.parse(retornoAsync) || []

    return retJson
}

//função q salva as apostas
export async function salvarAposta(tipoJogo,setNumerosSorteados,setModalVisivel,numerosSorteados,setVerificar){
    let id=0
    let retId=0

    if(numerosSorteados!=[]){

        let retornoApi=await ObterApi(tipoJogo)
        let concurso=retornoApi.concurso_proximo

        let hora=new Date().toLocaleTimeString()
        let data=new Date().toLocaleDateString()

        let resJson=await getAsync(tipoJogo)
        
        if(resJson.length>=20){                      
            resJson.pop()           
        }
        if(resJson.length>0){
            retId=resJson[0].id
            id=retId+1
        }

        resJson.unshift({"id":id,"conc":concurso,"hr":hora,"dt":data,"num":numerosSorteados})           
        await AsyncStorage.setItem(tipoJogo , JSON.stringify(resJson))
    }    
    setModalVisivel(false)
    setNumerosSorteados([])
    setVerificar(false)
    
}

// função para exluir aposta
export async function exluirAposta(id,jogo,setApostas,conc){
    if(id!==undefined){
        let excJson=await getAsync(jogo)
        
        let gravar=excJson.filter((e)=>{
            if(e.id!=id ){
                return e
            }
        })
        setApostas(gravar)       
        await AsyncStorage.setItem(jogo,JSON.stringify(gravar))       
    }
}

//função da página ResultadoDuplaSena (retorna as dezena)
export function RetDez(dezena,cor){   
    if(dezena!=undefined){
        let dez=dezena.map((e,c)=> <Text style={[Estilos.dezenas,{backgroundColor:cor}]} key={c}>{e}</Text>)
        return dez
    }
}

//função da página ResultadoDuplaSena (retorna as dezena2)
export function RetDez2(dezena,cor){ 
    if(dezena!=undefined){
        let dez2=dezena.map((e,c)=> <Text style={[Estilos.dezenas,{backgroundColor:cor}]} key={c}>{e}</Text>)
        return dez2
    }
}

//função da página resultadosDuplaSena (retorna se os concursos são iguais)
export function concursoIguais(setApostasSelecionadas,apo,numConc,setLoading){
    let selecionados=[]
    if(apo){
        selecionados=apo.filter((e)=>{
            if(e.conc==numConc){
                return e
            }
        })
    }
    if(selecionados){
        setApostasSelecionadas(selecionados)
    }
    //setTimeout(()=>{setLoading(false)},500)
    setLoading(false)
}


