import AsyncStorage from '@react-native-async-storage/async-storage'

const storeData = async (key: string, value: string) => { 
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e)
    }
}

const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return value
        }
    } catch (e) {
        console.log(e)
    }
}

const removeData = async (key: string) => { 
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        console.log(e)
    }
}
export { storeData, getData,removeData }