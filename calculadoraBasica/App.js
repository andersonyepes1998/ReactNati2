import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Banner from './components/Banner';

export default function App() {
  //DEFINIR LAS VARIABLES DE ESTADO DEL COMPONENTE....
  const[valor1,setValor1] = useState('');
  const[valor2,setValor2] = useState('');
  const[resultado,setResultado] = useState(0);
  const[esvalido, setEsvalido] = useState(false);
  const[mensaje, setMensaje] = useState('');

  //Metodos y funciones

  let calcular = (operador)=>{
    if(valor1 != '' && valor2 != ''){
      setEsvalido(true)
      let resulta = 0;
      switch(operador){
        case '+':
          resulta = parseFloat(valor1) + parseFloat(valor2);
          break;
          case '-':
            resulta = parseFloat(valor1) - parseFloat(valor2);
            break;
            case '*':
              resulta = parseFloat(valor1) * parseFloat(valor2);
              break;
              case '/':
                resulta = parseFloat(valor1) / parseFloat(valor2);
                break;
      }
      //cambiar el contenido de la variable de estado resultado 
      setResultado(resulta);
      setMensaje('Calculo realizado correctamente...')
    }else{
      setEsvalido(false);
      setMensaje('Debe ingresar los dos valores....')
    }
  }


  return (
    <View style={styles.container}>
      <View style={[styles.container,{flex:1,backgroundColor:'white'}]}>
        <Banner name="Calculadora2"/>
      </View>
      <View style={[styles.container,{flex:5, backgroundColor:'blue'}]}>
        <Text style={{fontWeight:'bold'}}>Calculadora de JavaScript</Text>
        <Text>Valor 1</Text>
        <TextInput
          placeholder='Ingrese el valor1'
          style={styles.inputs}
          onChangeText={valor1 => setValor1(valor1)}
          value={valor1}
        />
        <Text>Valor 2</Text>
        <TextInput
          placeholder='Ingrese el valor2'
          style={styles.inputs}
          onChangeText={valor2 => setValor2(valor2)}
          value={valor2}
        />
        <Text>Resultado</Text>
        <Text style={[styles.inputs,{width:200,height:40,alignItems:'center',justifyContent:'center'}]}>{resultado.toFixed(1)}</Text>

          <View style={[styles.container,{marginTop:20,flexDirection:'row'}]}>

              <TouchableOpacity style={[{backgroundColor:'red'},styles.buttons]} onPress={()=>calcular('+')}>
                  <Text style={styles.textButton}>+</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[{backgroundColor:'black'},styles.buttons]} onPress={()=>calcular('-')}>
                  <Text style={styles.textButton}>-</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[{backgroundColor:'yellow'},styles.buttons]} onPress={()=>calcular('*')}>
                  <Text style={styles.textButton}>*</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[{backgroundColor:'black'},styles.buttons]} onPress={()=>calcular('/')}>
                  <Text style={styles.textButton}>/</Text>
              </TouchableOpacity>

              
          </View>
              <TouchableOpacity style={[{backgroundColor:'black',marginTop:20},styles.buttons]}>
                  <Text style={styles.textButton}>Limpiar</Text>
              </TouchableOpacity>

              <Text style={{color: esvalido ? 'green': 'red'}}>{mensaje}</Text>
      </View>
      
      <View style={[styles.container,{flex:1, backgroundColor:'gray'}]}>
        <Text>Pie</Text>
      </View>
    </View>
  );
}

// function Banner(props){
//   return(
//     <Image source={require(`./assets/images/${props.name}.png`)} style={{width:'100%',height:'100%',resizeMode:'stretch'}}></Image>
//   )
// }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  inputs: {
    color:'orange', 
    borderRadius:5, 
    padding:10, 
    borderWidth:2, 
    borderColor:'blue', 
    textAlign:'center'
  },
  buttons:{
    borderRadius:10,
    width:50,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5
  },
  textButton:{
    color:'white',
    fontWeight:'bold'
  }
});
