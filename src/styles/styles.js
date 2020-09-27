import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
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