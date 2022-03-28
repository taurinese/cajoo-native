/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Container from './src/navigation';
import {name as appName} from './app.json';

import Amplify from 'aws-amplify'
import awsconfig from './src/config/aws-exports'
Amplify.configure(awsconfig)

AppRegistry.registerComponent(appName, () => Container);
