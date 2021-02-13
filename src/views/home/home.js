import { Container, Content } from 'native-base';
import React from 'react';
import DefaultHeader from './../../components/header/header';

export default function Home() {
    return (
        <Container>
            <DefaultHeader routeName="Home"/>
            <Content>

            </Content>
        </Container>
    );
}