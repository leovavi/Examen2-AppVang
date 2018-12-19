import React from "react";
import { StyleSheet, Text, View, Platform, ScrollView, Image, Dimensions } from 'react-native';
import HTMLView from 'react-native-htmlview'; 

export default class Deatil extends React.Component {
    static navigationOptions = {
        title: 'Job Detail',
    };

    state = {
        job: this.props.navigation.getParam("job", "")
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{paddingVertical: 25, padding: 15}}>
                    <Text style={styles.jobTitle}>{this.state.job.title}</Text>
                    <Text style={styles.jobCompany}>{this.state.job.company}</Text>
                    <Text style={styles.jobType}>{this.state.job.type}</Text>
                    <Image 
                        style={{width: 250, height: 250, resizeMode: "contain"}}
                        source={{uri: this.state.job.company_logo}}
                    />
                    <HTMLView value={this.state.job.description} />
                    <Text/>
                    <HTMLView value={this.state.job.how_to_apply} />
                </ScrollView>
            </View>
        )
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
    },
    jobTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    jobType: {
        fontSize: 16,
        color: 'gray'
    },
    jobCompany: {
        fontSize: 16,
    },
    box: {
        height: 85,
        width: 300,
        alignSelf:'center',
        borderBottomWidth: 1,
        borderColor: 'black',
        paddingVertical: 20,
    },
  });
