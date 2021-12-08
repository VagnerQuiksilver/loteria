[1mdiff --git a/src/componentes/Funcoes.js b/src/componentes/Funcoes.js[m
[1mindex bd8c35e..7631a3d 100644[m
[1m--- a/src/componentes/Funcoes.js[m
[1m+++ b/src/componentes/Funcoes.js[m
[36m@@ -195,7 +195,6 @@[m [mexport function concursoIguais(setApostasSelecionadas,apo,numConc,setLoading){[m
     if(selecionados){[m
         setApostasSelecionadas(selecionados)[m
     }[m
[31m-    console.log(selecionados.length)[m
     //setTimeout(()=>{setLoading(false)},500)[m
     setLoading(false)[m
 }[m
[1mdiff --git a/src/componentes/ModalResultadosDuplaSena1.js b/src/componentes/ModalResultadosDuplaSena1.js[m
[1mindex 24248c4..78b8fee 100644[m
[1m--- a/src/componentes/ModalResultadosDuplaSena1.js[m
[1m+++ b/src/componentes/ModalResultadosDuplaSena1.js[m
[36m@@ -37,7 +37,7 @@[m [mexport default function ModalResultadosDuplaSena1(props){[m
                             <AntDesign name="arrowleft" size={24} color="#fff" />[m
                         </TouchableOpacity>[m
 [m
[31m-                        <Text style={[Estilos.txtBtnConcursosDupla,{fontWeight:"bold",fontSize:24,color:"#fff"}]}>Dupla Sena concurso 01</Text>[m
[32m+[m[32m                        <Text style={[Estilos.txtBtnConcursosDupla,{fontWeight:"bold",fontSize:24,color:"#fff"}]}>Sorteio 01</Text>[m
                     </View>[m
 [m
                     {props.dezena.acumulou &&                      [m
[1mdiff --git a/src/componentes/ModalResultadosDuplaSena2.js b/src/componentes/ModalResultadosDuplaSena2.js[m
[1mindex c0bbaf3..2073d8c 100644[m
[1m--- a/src/componentes/ModalResultadosDuplaSena2.js[m
[1m+++ b/src/componentes/ModalResultadosDuplaSena2.js[m
[36m@@ -38,7 +38,7 @@[m [mexport default function ModalResultadosDuplaSena2(props){[m
                             [m
                         </TouchableOpacity>[m
 [m
[31m-                        <Text style={[Estilos.txtBtnConcursosDupla,{fontWeight:"bold",fontSize:24,color:"#fff"}]}>Dupla Sena concurso 02</Text>[m
[32m+[m[32m                        <Text style={[Estilos.txtBtnConcursosDupla,{fontWeight:"bold",fontSize:24,color:"#fff"}]}>Sorteio 02</Text>[m
 [m
                     </View>[m
 [m
