import React from "react";
import { StyleSheet, Text, View, Platform, TouchableOpacity, ScrollView } from 'react-native';
import axios from "axios";

export default class JobList extends React.Component {
    static navigationOptions = {
        title: 'Job List',
    };

    state = {
        keyWords: this.props.navigation.getParam("keyWord", ""),
        jobs: []
    }

    handleOnPress = (job) => {
        this.props.navigation.navigate("Detail", {job: job});
    }

    componentDidMount(){
        axios
            .get(`https://jobs.github.com/positions.json?search=${this.state.keyWords}`)
            .then(resp => {
                this.setState({jobs: resp.data});
            })
            .catch(err => {console.warn(err.message);} );
    }

    render(){
        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={{paddingVertical: 20}}>
                    {
                        this.state.jobs.map((job) =>
                            <TouchableOpacity
                                style={styles.box}
                                key={job.id}
                                onPress={() => this.handleOnPress(job)}
                            >
                                <Text style={styles.jobTitle}>{job.title}</Text>
                                <Text style={styles.jobCompany}>{job.company}</Text>
                                <Text style={styles.jobType}>{job.type}</Text>
                            </TouchableOpacity>
                        )
                    }
                </ScrollView>
            </View>
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
    },
    jobTitle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    jobType: {
        fontSize: 10,
        color: 'gray'
    },
    jobCompany: {
        fontSize: 13,
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
