import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';

const LoginOrSignUpForm = ({ navigation, route }) => {
    useEffect(() => {
        axios.defaults.baseURL = 'http://127.0.0.1:8000/';
        axios.defaults.timeout = 1500;
    }, []);
    const create = route.params?.create || false;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const handleUsernameChange = text => {
        setUsername(text);
    };
    
    const handlePasswordChange = text => {
        setPassword(text);
    };
    
    const handleFirstNameChange = text => {
        setFirstName(text);
    };
    
    const handleLastNameChange = text => {
        setLastName(text);
    };

    const handleRequest = () => {
        const navigation = useNavigation();
        const endpoint = props.create ? 'register' : 'login';
        const payload = {
            username: state.username,
            password: state.password,
        };

        if (props.create) {
            payload.first_name = state.firstName;
            payload.last_name = state.lastName;
        }

        axios
            .post(`/auth/${endpoint}/`, payload)
            .then(response => {
                const { token, user } = response.data;

                // We set the returned token as the default authorization header
                axios.defaults.headers.common.Authorization = `Token ${token}`;

                // Navigate to the home screen
                navigation.navigate('Main');
            })
            .catch(error => {
                console.log(error);
                // Handle error states, such as displaying an error message to the user
                if (error.response) {
                    console.log('Server responded with:', error.response.data);
                } else if (error.request) {
                    console.log('No response received:', error.request);
                } else {
                    console.log('Error setting up request:', error.message);
                }
            });
    }
    
    const renderCreateForm = () => {
        const { fieldStyle, textInputStyle } = styles;
        if (create) {
            return (
                <View style={fieldStyle}>
                    <TextInput
                        placeholder="First name"
                        autoCorrect={false}
                        onChangeText={handleFirstNameChange}
                        style={textInputStyle}
                        />
                    <TextInput
                        placeholder="Last name"
                        autoCorrect={false}
                        onChangeText={handleLastNameChange}
                        style={textInputStyle}
                    />
                </View>
            );
        }
    };

    const renderButton = () => {
        const buttonText = create ? 'Create' : 'Login';

        return (
            <Button title={buttonText} onPress={handleRequest} />
        );
    };

    const renderCreateLink = () => {
        if (!create) {
            const { accountCreateTextStyle } = styles;
            return (
                <Text style={accountCreateTextStyle}>
                Or
                    <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Register')}>
                        {' Sign-up'}
                    </Text>
                </Text>
            );
        }
    };



    const {
        formContainerStyle,
        fieldStyle,
        textInputStyle,
        buttonContainerStyle,
        accountCreateContainerStyle,
    } = styles;

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={formContainerStyle}>
                <View style={fieldStyle}>
                    <TextInput
                        placeholder="username"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={handleUsernameChange}
                        style={textInputStyle}
                    />
                </View>
                <View style={fieldStyle}>
                    <TextInput
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="password"
                        onChangeText={handlePasswordChange}
                        style={textInputStyle}
                    />
                </View>
                {renderCreateForm()}
            </View>
            <View style={buttonContainerStyle}>
                {renderButton()}
                <View style={accountCreateContainerStyle}>
                    {renderCreateLink()}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    formContainerStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInputStyle: {
        flex: 1,
        padding: 15,
    },
    fieldStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        padding: 25,
    },
    accountCreateTextStyle: {
        color: 'black',
    },
    accountCreateContainerStyle: {
        padding: 25,
        alignItems: 'center',
    },
});

export default LoginOrSignUpForm;
