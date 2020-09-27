import React, { Component, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet, Image, TouchableOpacity
} from "react-native";

export const ImageComponent = (props) => {
    const { img,
        index,
        aspectRatio,
        width,
        styles,
        resizeMode,
        setChoice
    } = props
    const generateRandomInteger = (min, max) => {
        return min + Math.random() * (max - min)
    }
    const randomNumber = generateRandomInteger(0.65, 0.5)
    
    return (
        <>
            <TouchableOpacity
                onPress = { () => setChoice ? setChoice(index) : undefined }
                style={[styles, { width: width ? width : "50%", aspectRatio: aspectRatio ? aspectRatio : randomNumber }]}>
                <Image source={img.url}
                    resizeMode={resizeMode}
                    style={{
                        flex: 1,
                        width: undefined,
                        height: undefined,
                        borderRadius: 20,
                        marginBottom: 10,
                        marginRight: 10,
                    }}
                />
                <Text style={{ textAlign: 'center', marginRight: 10 }}>{img.name}</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    containerImg: {
        flexDirection: 'row'
    }
});