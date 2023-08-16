import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native'; 
// import ImageUpload from './ImageUpload';

const EvaluationForm = () => {
    const [evalData, setEvalData] = useState({
        route: "",
        description: "",
        date: "", 
        submitted: false,
    })
    // const [title, setTitle] = useState('');
    // const [description, setDescription] = useState('');

    const handleEvalDataChange = (field, value) => {
        setEvalData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    };
    
    const handleFormSubmit = () => {
        // Logic to submit the form data
        setEvalData(prevData => ({
            ...prevData,
            submitted: true,
        }));
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Route"
                style={styles.input}
                value={evalData.route}
                onChangeText={value => handleEvalDataChange('route', value)}
            />
            <TextInput
                placeholder="Description"
                style={styles.input}
                value={evalData.description}
                onChangeText={value => handleEvalDataChange('description', value)}
            />
            {/* <ImageUpload /> */}
            <Button title="Submit" onPress={handleFormSubmit} />
            {evalData.submitted && <Text>Form submitted successfully!</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        margin: 10,
        width: 200,
    },
    successMessage: {
        marginTop: 10,
        color: 'green',
    },
});  
    
export default EvaluationForm;
