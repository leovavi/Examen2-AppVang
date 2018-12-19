import React from "react";
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';

export default class Deatil extends React.Component {
    static navigationOptions = {
        title: 'Job Detail',
    };

    state = {
        job: this.props.navigation.getParam("job", "")
    }

    componentDidMount(){
        const regex = /<\/?[^>]+(>|$)/g;
        let tempJob = this.state.job;
        let desc = tempJob.description.replace(regex, "");
        tempJob.description = desc;

        this.setState({
            job: tempJob
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    <Text style={styles.jobTitle}>{this.state.job.title}</Text>
                    <Text style={styles.jobCompany}>{this.state.job.company}</Text>
                    <Text style={styles.jobType}>{this.state.job.type}</Text>
                    <Text style={styles.description}>{this.state.job.description}</Text>
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
