import React from "react";
import { 
    Image, 
    Text, 
    View,
    TouchableOpacity, 
    TouchableOpacityProps
} from "react-native";

import {PlayImg} from '../../assets/Play.png';
import { Styles } from "./styles";

// type Props = TouchableOpacityProps & {
//     //propriedades que podem ser alteradas do componente
//     description: string;
// } 

export function ButtonRandon ({description, TouchableOpacityProps}) {
    return (
        <TouchableOpacity style={Styles.container}>
            <View>
                <Image source={PlayImg} style={Styles.image} />
            </View>
            <Text style={Styles.description}>
                {description}
            </Text>
        </TouchableOpacity>
    )
}