import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList, TextInput, KeyboardAvoidingView } from "react-native";
import { HeaderComponent } from './HeaderComponent'
import { statusData } from '../data/todoData'
export const BaseComponent = (props) => {
    const { navigation, route, dataInit, setDataInit, currentRoute } = props
    // const {  } = route.params

    const [data, setData] = useState(dataInit)
    const [update, setUpdate] = useState(false)
    const getStatus = (status) => {
        return statusData.find(x => x.status === status)
    }
    const handleChangeStatus = (item, index) => {
        if (currentRoute === "all") {
            let findData = data.find((x, i) => i === index)
            getStatus(findData.status).status === 1 ? findData.status = 0 : findData.status = 1;
            data[index] = findData
            // setDataInit(data)
        } else if (currentRoute === "complete") {
            let dataComplete = data.filter(x => x.status === 1)
            let findData = dataComplete.find((x, i) => i === index)
            getStatus(findData.status).status === 1 ? findData.status = 0 : findData.status = 1;
            dataComplete[index] = findData
            // console.log(dataComplete)
        } else {
            let dataComplete = data.filter(x => x.status === 0)
            let findData = dataComplete.find((x, i) => i === index)
            getStatus(findData.status).status === 1 ? findData.status = 0 : findData.status = 1;
            dataComplete[index] = findData
        }
        setUpdate(!update)
        navigation.navigate("DetailTodoList", { dataDetail: item, index: index })
    }
    const handle = () => {

    }
    const handleDelete = (index) => {
        console.log(index)
    }
    return (
        <>
            <KeyboardAvoidingView style={styles.container}>
                <FlatList
                    data={currentRoute === "all" ? data : currentRoute === "complete" ? data.filter(x => x.status === 1) : data.filter(x => x.status === 0)}
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
                {
                    currentRoute === "all" &&
                    <View style={styles.containInput}>
                        <TextInput
                            placeholder="Input Your To Do"
                            style={styles.inputStyles}
                        />
                        <TouchableOpacity style={styles.buttonSubmit}>
                            <Text style={{ color: 'white' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                }
            </KeyboardAvoidingView>


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
        paddingBottom: 120,
    },
    inputStyles: {
        borderWidth: 0.6,
        borderRadius: 20,
        borderColor: 'grey',
        paddingHorizontal: 25,
        flex: 1
    },
    containInput: {
        flexDirection: 'row',
        // marginHorizontal: 20,
        marginBottom: 30,
        justifyContent: 'space-around'
    },
    buttonSubmit: {
        elevation: 20,
        backgroundColor: 'grey',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginLeft: 10
    }
})