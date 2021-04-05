import React from 'react';
import { Container, Content, Button, Icon } from 'native-base';
import DefaultHeader from './../../components/header/header';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function ItemManagement({ navigation }) {
    return (
        <Container>
            <DefaultHeader 
                routeName="Novo Item"
                leftContent={
                    <Button transparent>
                        <Icon name="arrow-back" onPress={() => navigation.goBack()}/>
                    </Button>
                }
            />
            <Content>

            </Content>
        </Container>
    );
}