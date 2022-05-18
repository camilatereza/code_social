import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function Checkpoint() {

  return (

    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.text}>
          Racismo {'\n'}
          {'\n'}
          Uma das maiores pressões estéticas da sociedade, em mulheres,
          tem relação com o cabelo liso e cacheado. Desde muito cedo as crianças
          escutam críticas e piadas sobre seus cabelos e no mais tardar, durante a adolescência,
          é comum que utilizem de químicas para o alisar.{'\n'}
          {'\n'}
          Muitos são os comentários feitos sobre pessoas de pele preta nas redes sociais,
          mas um dos movimentos que vem ganhando um maior destaque é a aceitação capilar,
          além de penteados com trança afro e transição o que auxilia. A divulgação destes
          movimentos cria não só um sentimento de apoio como traz também um conforto para as
          mulheres o que aumenta sua autoestima e aceitação, sendo assim: {'\n'}
          {'\n'}
          Se você adivinhar o filme “💛😄💚🤢💙😭💜😱💔😡” então: {'\n'}
          Você ganhará um laço de repetição {'\n'}
          Senão: {'\n'}
          Ganhará uma Lista com 4 comandos, sendo eles: {'\n'}
          Girar para à direita {'\n'}
          Descer {'\n'}
        </Text>
      </View>

      
    </View>

  );
}