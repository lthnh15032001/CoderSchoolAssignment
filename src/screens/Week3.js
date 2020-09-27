import React, { Component, useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet, FlatList, TouchableOpacity
} from "react-native";
import { HeaderComponent } from '../components/HeaderComponent'
import { ImageComponent } from '../components/ImageComponent'
let tempArray = []
export const Week3 = (props) => {
    const [currentChoice, setCurrentChoice] = useState()
    const [computerChoice, setComputerChoice] = useState()
    const [show, setShow] = useState(false)
    const imageProps = [
        {
            "name": "Rock",
            "url": require("../assets/rock.png")
        },
        {
            "name": "Paper",
            "url": require("../assets/paper.png")
        },
        {
            "name": "Scissors",
            "url": require("../assets/scissors.png")
        }
    ]
    const gameDefine = [
        { number: 0, name: "Tied Game", color: "yellow" },
        { number: 1, name: "You Lose", color: "red" },
        { number: 2, name: "You Win", color: "green" },
    ]
    const setChoice = (index) => {
        let random = Math.floor(Math.random() * 3)
        setComputerChoice(random);
        setCurrentChoice(index + 1);
        !show && setShow(true)
    }
    const getResult = () => {
        let result;
        switch (currentChoice - 1) {
            case 0:
                computerChoice === 0 ? result = 0 : computerChoice === 1 ? result = 1 : result = 2;
                setResultArrayFunc(0, computerChoice, result)
                break;
            case 1:
                computerChoice === 0 ? result = 2 : computerChoice === 1 ? result = 0 : result = 1;
                setResultArrayFunc(1, computerChoice, result)
                break;
            case 2:
                computerChoice === 0 ? result = 1 : computerChoice === 1 ? result = 2 : result = 0;
                setResultArrayFunc(2, computerChoice, result)
                break;
            default:
                result = "Fire !!!"
                break;
        }
        // setUpdate(!update)
        return result;
    }
    // console.log(resultArray)
    const setResultArrayFunc = (currentChoice, computerChoice, result) => {
        tempArray.push({
            "currentChoice": currentChoice,
            "computerChoice": computerChoice,
            "result": result
        })
    }
    // console.log(tempArray)
    const getGameResult = (result) => {
        return gameDefine.find(x => x.number == result)
    }
    const getRateResult = () => {
        var countWin = 0;
        tempArray.forEach((x, i) => {
            getGameResult(x.result).number === 2 ? countWin += 1 : undefined
        })
        return countWin
    }
    const playAgain = () => {
        tempArray = []
        setCurrentChoice()
        setComputerChoice()
        setShow(false)
    }
    return (
        <>
            <HeaderComponent navigation={props.navigation} title="Week3" />
            <View style={styles.title}>
                <Text style={styles.titleText}>{show ? getGameResult(getResult()).name : getResult()}</Text>
                <TouchableOpacity onPress={() => playAgain()} style={styles.buttonPlayAgain}>
                    <Text>Play Again</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <View style={styles.userChoice}>
                        <Text style={styles.textName}>You</Text>
                        {currentChoice ?
                            <ImageComponent
                                img={imageProps[currentChoice - 1]}
                                aspectRatio={1}
                                width="60%"
                                resizeMode="contain"
                            /> : undefined

                        }
                    </View>
                    <Text>vs</Text>
                    <View style={styles.computerChoice}>
                        <Text style={styles.textName}>Computer</Text>
                        {currentChoice ?
                            <ImageComponent
                                img={imageProps[computerChoice]}
                                aspectRatio={1}
                                width="60%"
                                resizeMode="contain"
                            /> : undefined
                        }
                    </View>
                </View>
                <View>
                    <FlatList
                        data={imageProps}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) =>
                            <ImageComponent
                                img={item}
                                index={index}
                                aspectRatio={1}
                                width="33.81%"
                                resizeMode="contain"
                                setChoice={setChoice}
                            />
                        }
                        horizontal={false}
                        numColumns={3}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={styles.wrapImg}
                    />
                </View>
                <View style={styles.wrapTitleResult}>
                    <Text style={styles.textBottom}>History</Text>
                    <Text style={styles.textBottom}>Total : {tempArray.length}</Text>
                    <Text style={styles.textBottom}>Win Percent: {Math.round((getRateResult() / tempArray.length) * 100)}%</Text>
                </View>
                {
                    show ?
                        <FlatList
                            data={tempArray}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity onPress={() => alert(getGameResult(item.result).name)} style={[styles.wrapResultElement, { backgroundColor: getGameResult(item.result).color }]}>
                                    <Text>You</Text>
                                    <View style={styles.wrapResultShow}>
                                        <Text>{imageProps[item.currentChoice].name}</Text>
                                        <Text> -- </Text>
                                        <Text>{imageProps[item.computerChoice].name}</Text>
                                    </View>
                                    <Text>Computer</Text>
                                </TouchableOpacity>
                            }
                            horizontal={false}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={styles.wrapResult}
                        // extraData={update}
                        />
                        :
                        <Text style={styles.notPlay}>PLay game to get result</Text>
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    buttonPlayAgain: {
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 10,
        marginLeft: 10
    },
    textBottom: {
        fontWeight: 'bold'
    },
    wrapResultShow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    notPlay: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 10,
        color: 'red',
        borderWidth: 0.5,
        borderRadius: 20,
        padding: 10,
        textAlign: 'center'
    },
    textName: {
        paddingBottom: 10,
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 10
    },
    wrapResultElement: {
        borderWidth: 0.4,
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    wrapTitleResult: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 10,

    },
    wrapResult: {
        marginHorizontal: 10,
        padding: 10,
        paddingBottom: 60
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    title: {
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    wrapImg: {
        marginHorizontal: 10,
        marginBottom: 15,
        flexDirection: 'row',

    },
    userChoice: {
        // backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    computerChoice: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        margin: 10,
        borderWidth: 2,
        shadowRadius: 5,
        borderColor: 'grey',
        shadowOpacity: 0.90,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOffset: { height: 5, width: 5 },
        elevation: 24,
        paddingVertical: 30
    }
});