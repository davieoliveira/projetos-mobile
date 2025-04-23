import { Text, StyleSheet, Dimensions } from 'react-native'

const Cat = ( props: any ) => {
	return( <Text style={styles.txt}>
		Sou {props.nome} e tenho {props.idade} Anos </Text>
	)
}

const styles = StyleSheet.create({
    txt: {
        color: '#70f',
        fontSize: 18,
        borderWidth: 2,
        borderStyle: 'dashed',
        padding: 10,
        margin: 5,
        textAlign: 'center',
        minWidth: Dimensions.get('screen').width * 0.9,
    }
})

export default Cat