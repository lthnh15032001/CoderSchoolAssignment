import React, { Component, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet, Image, TouchableOpacity
} from "react-native";

export const ImageArticle = (props) => {
    const { img,
        index,
        aspectRatio,
        width,
        styles,
        resizeMode,
    } = props
    // console.log(img)
    return (
        <>
            <View
                onPress={() => { }}
                style={[styles, { width: width, aspectRatio: aspectRatio }]}>
                <Image source={{
                    uri: img.urlToImage
                }}
                    resizeMode={resizeMode}
                    style={{
                        flex: 1,
                        width: undefined,
                        height: undefined,
                        borderRadius: 20,
                        marginBottom: 10,
                        // marginRight: 10,
                    }}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    containerImg: {
        flexDirection: 'row',
    }
});