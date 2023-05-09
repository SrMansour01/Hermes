import React from "react";
import { StatusBar } from "react-native";

import { Theme } from "../service/Theme";

export function Status () {
    return(
        <StatusBar backgroundColor={Theme.colors.green} barStyle="dark-content"/>
    )
}