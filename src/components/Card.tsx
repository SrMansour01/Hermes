import { 
    View, 
    StyleSheet,
    Image, 
    Text,
} from "react-native";
import { Theme } from "../service/Theme";
    
export function CardPac ({type, name, id}) {
    return (
        <View style={Style.Card}>
            <View style={{
                backgroundColor: type === "PAC" ? Theme.colors.green : Theme.colors.white,
                height: 100,
                width: 15,
                borderRadius: 10,
                marginRight: 10,
                borderColor: "#000",
                borderLeftWidth:0.5,
                borderBottomWidth:0.5,
                borderTopWidth:0.5,
            }}/>
            <View style={{
                flex:1,
            }}>
                <View style={{
                    flex: 0.5,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 10,
                    borderBottomColor: "#000",
                    borderBottomWidth: 1,
                }}>
                    <Image source={Theme.icon.pacient}/>
                    <Text style={{marginLeft: 10}}>{name}</Text>
                </View>
                <View style={{
                    flex: 0.5,
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Text style={{opacity: 0.8}} >Robô</Text>
                    <Text style={{marginLeft: 5}}>{id == 0 ? "A caminho" : "Na fila"}</Text>
                </View>
            </View>
        </View>
    )
}

export function CardMED ({type, name}) {
    return (
        <View style={Style.Card}>
            <View style={{
                backgroundColor: type === "MED" ? Theme.colors.orange : Theme.colors.white,
                height: 100,
                width: 15,
                borderRadius: 10,
                marginRight: 10,
                borderColor: "#000",
                borderLeftWidth:0.5,
                borderBottomWidth:0.5,
                borderTopWidth:0.5,
            }}/>
            <View style={{
                flex:1,
            }}>
                <View style={{
                    flex: 0.5,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 10,
                    borderBottomColor: "#000",
                    borderBottomWidth: 1,
                }}>
                    <Image source={Theme.icon.medic}/>
                    <Text style={{marginLeft: 10}}>{name}</Text>
                </View>
                <View style={{
                    flex: 0.5,
                    justifyContent: "center"
                }}>
                    <Text style={{opacity: 0.8}} >Pedido</Text>
                    <Text style={{color: "#000"}} >termômetros         2 un</Text>
                </View>
            </View>
        </View>
    )
}

export function CardBVS ({type, name}) {
    return (
        <View style={Style.Card}>
            <View style={{
                backgroundColor: type === "BVS" ? Theme.colors.blue : Theme.colors.white,
                height: 100,
                width: 15,
                borderRadius: 10,
                marginRight: 10,
                borderColor: "#000",
                borderLeftWidth:0.5,
                borderBottomWidth:0.5,
                borderTopWidth:0.5,
            }}/>
            <View style={{
                flex:1,
            }}>
                <View style={{
                    flex: 0.5,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 10,
                    borderBottomColor: "#000",
                    borderBottomWidth: 1,
                }}>
                    <Image source={Theme.icon.pacient}/>
                    <Text style={{marginLeft: 10}}>{name}</Text>
                </View>
                <View style={{
                    flex: 0.5,
                    justifyContent: "center"
                }}>
                    <Text style={{opacity: 0.8}} >Pedido</Text>
                    <Text style={{color: "#000"}} >Kit Boas-Vindas     1 un</Text>
                </View>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    Card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        borderColor: "#000",
        borderWidth: 0.5,
        height: 100,
        width: "100%",
        marginVertical: 5,
        flexDirection: "row",
    }
})