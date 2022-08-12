import React from "react";
import Texto from "../../../componentes/Texto";
import { View, Image, StyleSheet, FLatList } from "react-native";

export default function Itens({ titulo, lista }) {
  // const renderItem = ({ item: { nome, imagem } }) => (
  //   <View key={nome} style={estilos.item}>
  //     <Image source={imagem} style={estilos.imagem}></Image>
  //     <Texto style={estilos.nome}>{nome}</Texto>
  //   </View>
  // );
  return (
    <>
      <Texto style={estilos.titulo}>{titulo}</Texto>
      {/* <FLatList
        data={lista}
        renderItem={renderItem}
        KeyExtractor={({ nome }) => nome}
      ></FLatList> */}
      {lista.map(({ nome, imagem }) => {
        return (
          <View key={nome} style={estilos.item}>
            <Image source={imagem} style={estilos.imagem}></Image>
            <Texto style={estilos.nome}>{nome}</Texto>
          </View>
        );
      })}
    </>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
