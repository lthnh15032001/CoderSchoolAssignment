import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, FlatList } from 'react-native'
import { HeaderComponent } from '../components/HeaderComponent'
import { ImageArticle } from '../components/ImageArticles'
import { myApiKey } from '../data/apiData'
import moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from '../components/Icon'
const configApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=" + myApiKey
export const Week5 = (props) => {
    const { navigation } = props
    // console.log(configApiUrl)
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getPosts()
    }, [])
    const getPosts = async () => {
        try {
            let response = await fetch(configApiUrl);
            let service = await response.json();
            let { status, totalResults, articles } = service
            if (!status) return;
            setData({ totalResults: totalResults, articles: articles })
            setLoading(false);
        } catch (err) {
            console.log("err")
        }
    }
    return (
        <>

            {
                loading ?
                    <View style={styles.container}>
                        <ActivityIndicator size="large" color="gray" />
                    </View>
                    :
                    <>
                        <HeaderComponent navigation={navigation} title="Week 5" />
                        <FlatList
                            keyboardShouldPersistTaps="always"
                            data={data.articles}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                <TouchableOpacity style={styles.wrapArticle}>
                                    <ImageArticle
                                        img={item}
                                        index={index}
                                        resizeMode="cover"
                                        width="100%"
                                        aspectRatio={1.4}
                                    // styles={{ marginTop: 10 }}
                                    />
                                    <View style={styles.wrapDes}>
                                        <View style={styles.wrapPublish}>
                                            <Text style={styles.title}>Source: </Text>
                                            <Text style={styles.publish}>{item.source.name}</Text>
                                        </View>
                                        <View style={styles.wrapPublish}>
                                            <Text style={styles.title}>Published: </Text>
                                            <Text style={styles.source}>{moment(item.publishedAt).format('LLL')}</Text>
                                        </View>
                                    </View>
                                    <View style={{ padding: 15, paddingTop: 10 }}>
                                        <Text style={styles.mainTitle}>{item.title}</Text>
                                        <Text style={styles.description}>{item.content}</Text>
                                    </View>
                                    <View>
                                        <TouchableOpacity>
                                            <Icon AntDesign size={26} name="arrowright" />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            }
                            horizontal={false}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={styles.wrapImg}
                        // extraData={update}
                        />
                    </>
            }

        </>
    )
}

const styles = StyleSheet.create({
    wrapPublish: {
        flexDirection: 'row',
        paddingLeft: 12
    },
    publish: {
        fontSize: 11,
        color: '#595867',

    },
    source: {
        fontSize: 11,
        color: '#595867',

    },
    wrapDes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 17,
        marginVertical: 3,
    },
    description: {
        color: '#595867',
        fontSize: 13,
        lineHeight: 15,
        marginTop: 5,
        // padding: 10

    },
    title: {
        fontWeight: 'bold',
        color: '#811f20',
        fontSize: 11
    },
    mainTitle: {
        fontWeight: 'bold',
        color: '#811f20',
        fontSize: 20,
        // padding: 10
    },
    wrapArticle: {
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        elevation: 20
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapImg: {
        // marginHorizontal: 20,
        paddingBottom: 100,
        backgroundColor: '#9fa5aa',
        padding: 10
    },
})

const baseApi = {
    get: async url => await call(url, "GET"),
}


const call = async (url, method, contentType = "application/json") => {
    try {
        let headers = {
            Accept: contentType,
            "Content-Type": contentType,
        }
        let request = {
            method: method,
            headers: headers
        }

        let response = await fetch(url, request);
        return response
    } catch (err) {
        console.error(err)
    }
}