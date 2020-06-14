import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
// -----------------------------------------------------------------------------
export default styled(LinearGradient).attrs({
  colors: ['#444', '#009966'],
})`
  flex: 1;
`;
