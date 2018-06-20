import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import styled from 'styled-components/native';
import Question from '../components/Question';
import Answer from '../components/Answer';
import { dataEmber as data } from '../components/Data';

const Container = styled.View`
  justifyContent: center;
  alignItems: center;
  margin: 10px;
`;

const TextStyled = styled.Text`
  fontSize: 20;
  textAlign: center;
  margin: 10px;
`

const ContainerQuestion = styled.View`
  margin: 10px;
`;

export default class Ember extends Component {
  render() {
    return (
      <Container>
        <TextStyled>
          <Image source={require('../img/jeopardy-ember.png')}/>
        </TextStyled>
        <ScrollView>
          {data.map(trivia =>
          <ContainerQuestion>
            <Question q={trivia.Q}/>
            <Answer a={trivia.A}/>
          </ContainerQuestion>
          )}
      </ScrollView>
      </Container>
    );
  }
}


Ember.navigationOptions = {
  tabBarIcon: () => (
    <Image source={require('../img/ember.png')}/>
  )
}
