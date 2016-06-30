import React, { Component } from 'react';
import {storiesOf, action} from '@kadira/storybook'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {AppBar} from 'material-ui'

storiesOf('Basic Header')
    .add('With Menu', () => (
        <MuiThemeProvider>
            <AppBar title="Medical App" />
        </MuiThemeProvider>
    ))
    .add('Without Menu', () => (
        <MuiThemeProvider>
            <AppBar title="Medical App" iconStyleLeft={{display: 'none'}} />
        </MuiThemeProvider>
    ));