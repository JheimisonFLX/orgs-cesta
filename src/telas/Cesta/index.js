import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";

export default function Cesta() {
  return (
    <>
      <Topo></Topo>
      <View style={estilos.cesta}>
        <Detalhes></Detalhes>
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
 
});
