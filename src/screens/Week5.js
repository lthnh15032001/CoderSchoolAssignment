import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, FlatList, Linking } from 'react-native'
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
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [lastPageReached, setLastPageReached] = useState(false);
    const [hasErrored, setHasApiError] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const flatListRef = React.useRef()
    const toTop = () => {
        flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
    }
    useEffect(() => {
        getPosts()
    }, [data])
    const getPosts = async () => {
        try {
            let response = await fetch(configApiUrl + `&page=${pageNumber}`);
            let service = await response.json();
            let { status, totalResults, articles } = service
            if (!status) return;

            const hasMoreArticles = service.articles.length > 0;
            if (hasMoreArticles) {
                const newArticles = filterForUniqueArticles(
                    data.concat(service.articles)
                )
                setData(newArticles)
                setPageNumber(pageNumber + 1);
            } else {
                setLastPageReached(true);
            }
            setLoading(false);
        } catch (err) {
            setHasApiError(true)
        }
    }
    const filterForUniqueArticles = arr => {
        const cleaned = [];
        arr.forEach(itm => {
            let unique = true;
            cleaned.forEach(itm2 => {
                const isEqual = JSON.stringify(itm) === JSON.stringify(itm2);
                if (isEqual) unique = false;
            });
            if (unique) cleaned.push(itm);
        });
        return cleaned;
    };
    console.log(data)
    return (
        <>

            { hasErrored ?
                <View style={styles.container}>
                    <Text>Sorry, something wrong, Try Again</Text>
                </View>
                :
                loading ?
                    <View style={styles.container}>
                        <ActivityIndicator size="large" color="gray" />
                    </View>
                    :
                    <>
                        <HeaderComponent navigation={navigation} title={"Total Posts: " + data.length} />
                        <FlatList
                            keyboardShouldPersistTaps="always"
                            data={data}
                            ref={flatListRef}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) =>
                                <View style={styles.wrapArticle}>
                                    <ImageArticle
                                        img={item}
                                        index={index}
                                        resizeMode="cover"
                                        width="100%"
                                        aspectRatio={1.4}
                                    />
                                    <View style={styles.wrapDes}>
                                        <View style={styles.wrapPublish}>
                                            <Text style={styles.title}>Source: </Text>
                                            <Text style={styles.publish}>{item.source.name}</Text>
                                        </View>
                                        <View style={styles.wrapPublish}>
                                            <Text style={styles.title}>Published: </Text>
                                            <Text style={styles.source}>{moment(item.publishedAt).startOf('hour').fromNow()}</Text>
                                        </View>
                                    </View>
                                    <View style={{ padding: 15, paddingTop: 10 }}>
                                        <Text style={styles.mainTitle}>{item.title}</Text>
                                        <Text style={styles.description}>{item.content}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.arrow} onPress={() => Linking.openURL(item.url)}>
                                        <Text style={{ marginRight: 10, color: 'white' }}>Read More</Text>
                                        <Icon AntDesign size={26} name="arrowright" color="white" />
                                    </TouchableOpacity>
                                </View>
                            }
                            ListFooterComponent={<ListFooter lastPageReached={lastPageReached} toTop={toTop} />}
                            horizontal={false}
                            keyExtractor={(item, index) => index.toString()}
                            contentContainerStyle={styles.wrapImg}
                            onEndReached={getPosts}
                            onEndReachedThreshold={0}
                        />
                    </>
            }

        </>
    )
}
const ListFooter = ({ lastPageReached, toTop }) => {
    return (
        <View style={styles.containFooter}>
            {lastPageReached ?
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.noMore}>No more articles</Text>
                    <TouchableOpacity onPress={toTop} style={{ backgroundColor: 'white', borderRadius: 50, padding: 15 }}>
                        {/* <Text style={{ color: 'white' }}>
                        </Text> */}
                        <Icon AntDesign color="black" name="arrowup" size={21} />
                    </TouchableOpacity>
                </View> :
                <ActivityIndicator
                    size="large"
                    color="gray"
                />}
        </View>
    )
}
const styles = StyleSheet.create({
    noMore: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginRight: 15,
        marginTop:15
    },
    containFooter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrow: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 10,
        backgroundColor: '#53703C'

    },
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