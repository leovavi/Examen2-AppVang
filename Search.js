import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, Button, KeyboardAvoidingView } from 'react-native';

export default class Search extends React.Component {
    static navigationOptions = {
        title: 'Search Job',
    };
    
    state = {
        keyWord: ""
    }

    handleOnPress = () => {
        this.props.navigation.navigate("Jobs", {keyWord: this.state.keyWord});
    }

    render(){
        const { keyWord } = this.state;
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.container}>
                    <Text>Job Search</Text>
                    <TextInput
                        autoCorrect={false}
                        placeholder="Search a job ..."
                        placeholderTextColor="black"
                        style={styles.textInput}
                        value = {keyWord}
                        clearButtonMode="always"
                        onChangeText = {(newKey) => this.setState({keyWord: newKey})}
                    />
                    <Button
                        title = "Search"
                        color = "blue"
                        onPress = {this.handleOnPress}
                        style = {{width: 50}}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
        textAlign: "center",
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
    },
    largeText: {
        fontSize: 44
    },
    smallText: {
        fontSize: 18
    },
    textInput: {
        borderColor: "#667",
        color: "black",
        width: 300,
        borderWidth: 1,
        paddingHorizontal: 10
    },
    detailsContainer: {
        justifyContent: 'center',
        paddingHorizontal: 20,
        fontSize: 20
    }
  });