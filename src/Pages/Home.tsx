import React from "react";
import { 
    SafeAreaView, 
    StyleSheet, 
    View,
    Image,
    Text,
    ScrollView,
} from "react-native";

import { Theme } from "../service/Theme";
import { CardBVS, CardMED, CardPac } from "../components/Card";

import { ref, onValue, set } from "firebase/database";
import { Firebase } from "../service/firebase";

export default function Home() {

    const [Data, setData] = React.useState([
        {
            id: 0,
            type: "PAC",
            name: "Murilo Mansour Xerfan Silva",
            pass: "1234",
        },
        {
            id: 1,
            type: "MED",
            name: "Murilo Mansour Xerfan Silva",
            pass: "null",
        },
        {
            id: 2,
            type: "BVS",
            name: "Murilo Mansour Xerfan Silva",
            pass: "null",
        }
    ])

    const [Robo, setRobo] = React.useState("")
    
    React.useEffect(() => {
        onValue(ref(Firebase.db, "Test/"), (snap) => {
            const robo = snap.val().Robo
            setRobo(robo)
        })

        const Fun_Type = () => {
            if (Robo == "hold") {
                alert("emargencia dp paciente 'Murilo Mansour Xerfan Silva'")
                set(ref(Firebase.db, "/Test/"), {Robo:"null"})
            } else if (Robo == "click") {
                alert("Murilo Mansour Xerfan Silva chamando o robo")
                const Item = {
                    id: Data.length,
                    type: "PAC",
                    name: "Murilo Mansour Xerfan Silva",
                    pass: "null",
                }
                setData([...Data, Item])
                set(ref(Firebase.db, "/Test/"), {Robo:"null"})
            }
        }
        Fun_Type()
    })


    return (
        <SafeAreaView style={Style.View}>
            <View style={Style.header}>
                <View style={Style.bar}>
                    <Image source={Theme.icon.Menu}/>
                    <Image source={Theme.icon.config}/>
                </View>
                <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
                    <Image source={Theme.icon.hermes}/>
                    <Text>HERMES</Text>
                </View>
            </View>
            <View style={Style.Carp} >
                <ScrollView showsVerticalScrollIndicator={false} >
                    {Data.reverse().map((item => {
                        if (item.type == "PAC"){
                            return (<CardPac type={item.type} name={item.name} id={item.id}/>)
                        } else if (item.type == "MED") {
                            return (<CardMED type={item.type} name={item.name}/>)
                        } else if  (item.type == "BVS") {
                            return (<CardBVS type={item.type} name={item.name}/>)
                        }
                    }))}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const Style = StyleSheet.create({
    View : {
        flex: 1,
        backgroundColor: Theme.colors.white,
    },
    bar:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        backgroundColor: Theme.colors.green,
    },
    header: {
        width: "100%",
        height: "25%",
        backgroundColor: Theme.colors.green,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    menu:{
        marginHorizontal: 20,
        flexDirection: "row",
        marginTop: 20,
        paddingBottom: 10,
        borderBottomColor: Theme.colors.black,
        borderBottomWidth: 1,
        alignItems: "center",
        justifyContent: "space-around",
    },
    item:{
        marginBottom: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    Carp:{
        marginHorizontal: 20,
        flex: 1,
        marginTop: 10,
    },
    model:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn:{
        height: '70%',
        width: "80%",
        backgroundColor: Theme.colors.white,
        borderColor: "#000",
        borderWidth: 1,
    }
})