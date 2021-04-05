import React from 'react';
import { Body, Header, Left, Right, Title } from 'native-base';

export default function DefaultHeader({ routeName, leftContent, rightContent, }) {
    return (
        <Header>
            <Left>{leftContent}</Left>
            <Body>
                <Title>{routeName}</Title>
            </Body>
            <Right>{rightContent}</Right>
        </Header>
    );
}