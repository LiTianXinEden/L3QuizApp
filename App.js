import React, {useState} from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity, ToastAndroid, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome6";


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 5,
        gap: 10
    }

});

const Questions = ({qn, picture, onValueChange, options}) => {
    return(
        <View style={{backgroundColor: "#41547f"}}>
            <Text style={{color: "#ffffff", fontSize: 20, paddingBottom: 5}}>{qn}</Text>
            <Image source={picture} style={{width: 500, height: 400}}></Image>
            <RNPickerSelect
                onValueChange={onValueChange}
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

        Alert.alert(`you got ${points} out of 4 correct!`)
    }




    return (
        <ScrollView contentContainerStyle={{}}>
            <Text></Text>
            <Text></Text>
            <View style={styles.row}>
                <Icon name="gamepad" size={20} color="#2c2481" />
                <Text style={{ fontSize: 24, fontWeight: 'bold', fontStyle: 'italic', marginBottom: 20, color:"#2c2481" }}>
                    Hollow Knight Quiz
                </Text>
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

            <Button title="Submit Answers" color="#c5a9f8" onPress={handleSubmit}/>
            <Text></Text>
            <Text></Text>


        </ScrollView>


    )
}

export default App;


