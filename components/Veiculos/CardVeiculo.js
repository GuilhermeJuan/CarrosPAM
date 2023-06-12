import { StyleSheet, ImageBackground, Text} from 'react-native';


export default function CardVeiculo({props, veiculo}) {
  const irParaDetalhes = () => { props.navigation.navigate("Detalhes",veiculo); };
  let img = veiculo.fotos[0];
  return (
      <ImageBackground 
        style={estilo.container}
        source={require(`../../assets/img_veiculos/${img}`)}
        resizeMode='repeat'
        imageStyle={{borderRadius: 10}}
        onTouchEnd={irParaDetalhes}
      >
        <Text style={estilo.titulo}>{veiculo.fabricante} {veiculo.modelo}</Text>
        <Text style={estilo.valor}>{`R$ ${veiculo.preco}`}</Text>
      </ImageBackground>
  );
}

const estilo = StyleSheet.create({
  container: {
    width: 380,
    height: 285,
    justifyContent: 'space-between',
    marginBottom: 15
    
  },
  titulo:{
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#0000009e',
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    borderTopLeftRadius: 10 ,
    borderTopRightRadius: 10 
  },
  valor:{
    padding: 5,
    backgroundColor: '#0000009e',
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
    borderBottomLeftRadius: 10 ,
    borderBottomRightRadius: 10 
  }
});
