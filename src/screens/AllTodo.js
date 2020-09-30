import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { HeaderComponent } from '../components/HeaderComponent'
export const AllTodo = (props) => {
    const { navigation, route } = props
    const { data } = route.params
    // console.log(data)
    return (
        <>
            <HeaderComponent navigation={navigation} title="All Todo List" />
            <View style={styles.container}>
                <FlatList
                    data={data} 
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                        <View style={styles.wrapElement} >
                            <View style={styles.wrapStt}>
                                <Text style={styles.stt}>{index + 1}. </Text>
                            </View>
                            <TouchableOpacity style={styles.boxWrapper}>
                                <View style={[styles.status, { backgroundColor: item.status === 0 ? "green" : "blue" }]}></View>
                                <Text style={styles.textDisplay}>{item.body}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    horizontal={false}
                    keyExtractor={(item, index) => index.toString()}
                />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapFlat: {
        marginBottom: 100
    },
    textDisplay: {
        flexWrap: 'wrap',
        paddingRight: 30,
        lineHeight: 20
    },
    wrapElement: {
        flexDirection: 'row',
        marginRight: 20,
    },
    wrapStt: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    stt: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    status: {
        width: 10,
        height: "100%",
        borderRadius: 20,
        marginRight: 15
    },
    boxWrapper: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        elevation: 20,
        flexDirection: 'row',
        marginBottom: 15,
        marginRight: 20
    },
    container: {
        padding: 15,
        marginBottom: 60
    }
})