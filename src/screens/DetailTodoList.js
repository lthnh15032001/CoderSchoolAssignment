import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { HeaderComponent } from '../components/HeaderComponent'
import { statusData } from '../data/todoData'
export const DetailTodoList = (props) => {
    const { navigation, route } = props
    const { dataDetail, index } = route.params
    const getStatus = (status) => {
        return statusData.find(x => x.status === status)
    }
    return (
        <>
            <HeaderComponent navigation={navigation} title={`Number: ` + index} />
            <View style={styles.conatiner}>
                <View style={[styles.wrapContent, { backgroundColor: getStatus(dataDetail.status).status === 0 ? "green" : "blue" }]}>
                    <Text style={styles.body}>{dataDetail.body}</Text>
                    <Text style={styles.status}>{getStatus(dataDetail.status).name} !!!</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapContent: {
        paddingHorizontal: 50,
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    conatiner: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    status: {
        fontSize: 25,
        marginTop: 20,
        color: 'white'
    },
    body: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'white'
    }

})
