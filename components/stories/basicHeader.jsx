import React, { Component } from 'react';
import {storiesOf, action} from '@kadira/storybook'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {AppBar} from 'material-ui'

storiesOf('Basic Header')
    .add('With Menu', () => (
        <MuiThemeProvider>
            <AppBar title="MdApp" />
        </MuiThemeProvider>
    ))
    .add('Without Menu', () => (
        <MuiThemeProvider>
            <AppBar title="MdApp" iconStyleLeft={{display: 'none'}} />
        </MuiThemeProvider>
    ));