import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Banner from './components/Banner';

export default function App() {
  //DEFINIR LAS VARIABLES DE ESTADO DEL COMPONENTE....
  const[valor1,setValor] = useState('');
  const[valor2,setValor2] = useState('');
  const[resultado,setResultado] = useState('');
  return (
    <View style={styles.container}>
      <View style={[styles.container,{flex:1,backgroundColor:'white'}]}>
        <Banner name="Calculadora2"/>
      </View>
      <View style={[styles.container,{flex:5, backgroundColor:'yellow'}]}>
        <Text style={{fontWeight:'bold'}}>Calculadora de BASIC</Text>
        <Text>Valor 1</Text>
        <TextInput
          placeholder='Ingrese el valor1'
          style={styles.inputs}
          onChange={valor1 => setValor(valor1)}
          value={valor1}
        />
        <Text>Valor 2</Text>
        <TextInput
          placeholder='Ingrese el valor2'
          style={styles.inputs}
          onChange={valor2 => setValor2(valor2)}
          value={valor2}
        />
        <Text>Resultado</Text>
        <TextInput
          style={styles.inputs}
          value={resultado}
        />
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
  }
});
