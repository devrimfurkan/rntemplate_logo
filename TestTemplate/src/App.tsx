import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@logo-rn/shared-utils/utils/logo-ui/components';
import { LogoLabel } from '@logo-rn/logo-label';
import { StyleSheet } from 'react-native';
import {LogoButton} from '@logo-rn/logo-button';
import {LogoAlert} from '@logo-rn/logo-alert';
import {LogoDivider} from '@logo-rn/logo-divider';
import DatePickerScreenComp from './logoComponents/datePickerComp';


const App =() => {


  return(
    
    <ApplicationProvider {...eva} theme={eva.light}>
     
     <DatePickerScreenComp/>

     </ApplicationProvider>
        )
        
      }

export default App;


const styles = StyleSheet.create({
  
  dividerLogo:{
    margin:5,
    height:5,
    backgroundColor:'red',
    
  }

})