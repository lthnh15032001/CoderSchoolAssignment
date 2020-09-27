import React, { Component, useEffect, useState } from "react";
import { StatusBar } from 'react-native'
import {
    View,
    Text,
    StyleSheet, TouchableOpacity, FlatList, Image
} from "react-native";
import { HeaderComponent, ImageComponent } from "../components";
import { Icon } from '../components'

export const Week2 = (props) => {
    const imageProps = [
        {
            "url": require("../assets/img1.jpg")
        },
        {
            "url": require("../assets/img2.jpg")
        },
        {
            "url": require("../assets/img3.jpg")
        },
        {
            "url": require("../assets/img4.jpg")
        },
        {
            "url": require("../assets/img5.jpg")
        },
        {
            "url": require("../assets/img6.jpg")
        },
        {
            "url": require("../assets/img7.jpg")
        },
        {
            "url": require("../assets/img8.jpg")
        },
        {
            "url": require("../assets/img9.jpg")
        },
        {
            "url": require("../assets/img10.jpg")
        },

    ]
    return (
        <>
            <HeaderComponent navigation={props.navigation} />
            <View style={{ flex: 1 }} >
                <View style={styles.container}>
                    <Image
                        source={require("../assets/ava.jpg")}
                        style={{ width: 100, height: 100, borderRadius: 200 }}
                        resizeMode="cover"
                    />
                    <View style={styles.wrapInfo}>
                        <Text style={styles.name}>Lê Thành Đạt</Text>
                        <Text style={styles.job}>Programmer</Text>
                        <View style={styles.wrapButton}>
                            <TouchableOpacity style={styles.followButton} onPress={() => alert("followed ")}>
                                <Text style={styles.followText}>Follow</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.sendButton} onPress={() => alert("message sended ")}>
                                <Icon Ionicons size={20} name="send-outline" color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.wrapBody}>
                    <View>
                        <Text style={styles.count}>{imageProps.length * 3}</Text>
                        <Text style={styles.descr}>Photos</Text>
                    </View>
                    <View style={styles.wrapCount}>
                        <Text style={styles.count}>15k</Text>
                        <Text style={styles.descr}>Followers</Text>
                    </View>
                    <View>
                        <Text style={styles.count}>210</Text>
                        <Text style={styles.descr}>Following</Text>
                    </View>
                </View>
                <FlatList
                    data={imageProps.concat(imageProps).concat(imageProps)} // = 3 times length of imageProps
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) =>
                        // <View style={styles.containerImg}>
                        <ImageComponent
                            img={item}
                            index={index}
                            resizeMode="cover"
                            />
                        // </View>
                    }
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.wrapImg}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    descr: {
        color: '#999',
        textAlign: 'center',
        fontSize: 16
    },
    count: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    job: {
        color: '#999'
    },
    name: {
        fontWeight: 'bold'
    },
    wrapImg: {
        marginHorizontal: 20,
    },
    containerImg: {
        backgroundColor: 'black'
        // flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'space-between'
    },
    scroll: {
        // flex: 1,
    },
    wrapCount: {
        marginHorizontal: 50
    },
    wrapBody: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-around'
    },
    followText: {
        color: 'white'
    },
    sendButton: {
        marginLeft: 15,
        backgroundColor: 'rgb(120,213,250)',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        // paddingVertical: 17,
        paddingVertical: 6,
        paddingHorizontal: 22,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    followButton: {
        backgroundColor: 'rgb(71,113,246)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingHorizontal: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    wrapButton: {
        flexDirection: 'row',
        marginTop: 15,
        // backgroundColor: 'yellow'
    },
    job: {
        color: 'grey'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 22
    },
    wrapInfo: {
        // marginRight: 20
        marginLeft: 25,
    },
    container: {
        flexDirection: 'row',
        marginVertical: 14,
        marginHorizontal: 20
    },
    headerContainer: {
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: "flex-end",
        backgroundColor: "white",
    },
    buttonClose: {
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    headerWraper: {
        height: 35,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    }
});