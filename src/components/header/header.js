import React from 'react';
import { Body, Header, Left, Right, Title } from 'native-base';

export default function DefaultHeader({ routeName }) {
    return (
        <Header>
            <Left />
            <Body>
                <Title>{routeName}</Title>
            </Body>
            <Right />
        </Header>
    );
}