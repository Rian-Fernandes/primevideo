import { Image, StyleSheet, TouchableOpacity } from "react-native"

export const MoviesCard = () =>{
    return(
        <TouchableOpacity>
            <Image styles={styles.img}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img:{

    }
})