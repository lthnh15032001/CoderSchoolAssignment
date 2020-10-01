import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { HeaderComponent } from '../components/HeaderComponent'
import { statusData } from '../data/todoData'
export const AllTodo = (props) => {
    const { navigation, route } = props
    const { dataInit, setDataInit } = route.params

    const [data, setData] = useState(dataInit)
    const [update, setUpdate] = useState(false)
    const getStatus = (status) => {
        return statusData.find(x => x.status === status)
    }
    const handleChangeStatus = (item, index) => {
        let findData = data.find((x, i) => i === index)
        getStatus(findData.status).status === 1 ? findData.status = 0 : findData.status = 1;
        data[index] = findData
        setDataInit(data)
        setUpdate(!update)
        navigation.navigate("DetailTodoList", { dataDetail: item, index: index })
    }
    const handleDelete = (index) => {
        console.log(index)
    }
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
                            <TouchableOpacity style={styles.boxWrapper}
                                onPress={() => handleChangeStatus(item, index)}
                                onLongPress={() => handleDelete(index)}
                            >
                                <View style={[styles.status, { backgroundColor: getStatus(item.status).status === 0 ? "green" : "blue" }]}></View>
                                <Text style={styles.textDisplay}>{item.body}</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    horizontal={false}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={update}
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
        lineHeight: 20,
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