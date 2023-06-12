import estilo from './estilo';
import {View, Text, Image, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Detalhes(props) {
  let veiculo  = props.route.params;
  console.log(veiculo);
  const voltar = () => { props.navigation.goBack(); };
  return (
    <View style={estilo.container}>
      <View style={estilo.head}>
        <Ionicons name="arrow-back-outline" size={24} color="#555" onPress={voltar} />
        <Text style={estilo.head_title}>
          Detalhes
        </Text>
      </View>
      <View style={estilo.body}>
          <View style={estilo.slides}>
            <ScrollView horizontal={true}>
              {              
                veiculo.fotos.map(foto=>(
                  <Image style={estilo.foto} source={require(`../../assets/img_veiculos/${foto}`)} />)
                )
              }
            </ScrollView>
          </View>
          <View style={estilo.info}>
            <Text style={estilo.titulo}>{veiculo.fabricante} {veiculo.modelo}</Text>
            <Text style={estilo.valor}>{`R$ ${veiculo.preco}`}</Text>
            <Text style={estilo.valor}>{`motorizacao ${veiculo.motorizacao}`}</Text>
            <Text style={estilo.valor}>{`ano ${veiculo.ano}`}</Text>
            <Text style={estilo.valor}>{`km ${veiculo.km}`}</Text>
            <Text style={estilo.valor}>{`cor ${veiculo.cor}`}</Text>
            <Text style={estilo.valor}>{`cambio ${veiculo.cambio}`}</Text>
            <Text style={estilo.valor}>{`postas ${veiculo.postas}`}</Text>
            <Text style={estilo.valor}>{`preco ${veiculo.preco}`}</Text>
          </View>
      </View>
    </View>
  );
}
