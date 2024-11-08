import React, {useState} from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome6";


const styles = StyleSheet.create({
    title: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'black',
        borderBottomWidth: 2,
        marginBottom: 5,
        alignSelf: 'center'

    },

    parent: {
        backgroundColor: "#41547f",
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
    },

    name: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginLeft: 8,
        color: "#2c2481",
    },

    question: {
        paddingLeft: 5,
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },

    image: {
        width: 400,
        height: 400,
    },

    button:{
        alignItems: 'center',
        backgroundColor: '#795ec5',
        alignSelf: 'center',
        justifyContent: 'space-around',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,

    },

});

const Questions = ({qn, picture, onValueChange, options}) => {
    return(
        <View style={[styles.parent]}>
            <Text style={[styles.question]}>{qn}</Text>
            <Image source={picture} style={[styles.image]}></Image>
            <RNPickerSelect
                onValueChange={(value) => onValueChange(value)}
                items = {options}
            />
        </View>
    );
};

const App = () => {
    const [ans1, setAns1] = useState();
    const [ans2, setAns2] = useState();
    const [ans3, setAns3] = useState();


    const correctAns = {
        qn1:'Greenpath',
        qn2:'Quirrel',
        qn3:'Grey Mourner',
    }

    const handleSubmit = () => {
        let points = 0;
        if (ans1 === correctAns.qn1) points += 1;
        if (ans2 === correctAns.qn2) points += 1;
        if (ans3 === correctAns.qn3) points += 1;

        Alert.alert(`you got ${points} out of 3 correct!`)
    }


    return (
        <ScrollView contentContainerStyle={{}}>
            <Text></Text>
            <Text></Text>
            <View style={styles.title}>
                <Icon name="gamepad" size={20} color="#2c2481"/>
                <Text style={[styles.name]}>Hollow Knight Quiz</Text>
            </View>


            <Questions qn="Where is this located?" picture={require("./img/Greenpath_bench.jpg")}
                       onValueChange={setAns1}
                       options={[
                           {label: "Greenpath", value: "Greenpath"},
                           {label: "Queen's Gardens", value: "Queen's Gardens"},
                           {label: "Coral Forest", value: "Coral Forest"},
                       ]}
            />

            <Questions qn="Who is in this image?" picture={require("./img/Quirrel_in_City_of_Tears.jpg")}
                       onValueChange={setAns2}
                       options={[
                           {label: "Cornifer", value: "Cornifer"},
                           {label: "Quirrel", value: "Quirrel"},
                           {label: "Tiso", value: "Tiso"},
                       ]}
            />

            <Questions qn="Who lives here?"  picture={require("./img/Grey_Mourner.jpg")}
                       onValueChange={setAns3}
                       options={[
                           {label: "Grey Mourner", value: "Grey Mourner"},
                           {label: "Confessor Jiji", value: "Confessor Jiji"},
                           {label: "Seer", value: "Seer"},
                       ]}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text>Submit Answers</Text>
            </TouchableOpacity>
            <Text></Text>
            <Text></Text>


        </ScrollView>


    )
}

export default App;


