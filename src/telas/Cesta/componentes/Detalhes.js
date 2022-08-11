import React from "react";
import { Image, StyleSheet, View } from "react-native";

import Texto from "../../../componentes/Texto";
import logo from "../../../../assets/logo.png";

export default function Detalhes() {
    return <>
    
    <Texto style={estilos.nome}>Cesta de Verduras</Texto>
        <View style={estilos.fazenda}>
          <Image source={logo} style={estilos.imagemFazenda} />
          <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
        </View>
        <Texto style={estilos.descricao}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500.
        </Texto>
        <Texto style={estilos.preco}>R$ 40,00</Texto>

    </>
}

const estilos = StyleSheet.create({

    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
      },
    
      fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
      },
    
      imagemFazenda: {
        width: 32,
        height: 32,
      },
    
      nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
      },
    
      descricao: {
        color: "#a3a3a3",
        fontSize: 16,
        lineHeight: 26,
      }, 

      preco: {
        color: "#2a9f85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
      },
})