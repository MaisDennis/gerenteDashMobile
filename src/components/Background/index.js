import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { View, Text } from 'react-native';
// -----------------------------------------------------------------------------
export default styled(LinearGradient).attrs({
  colors: ['#7159c1', '#ab59c1'],
})`
  flex: 1;
`;

// export default function Background() {
//   return (
//     <View style={{backgroundcolor: '#4c669f'}}></View>
//   )
// }

// export default styled.View`
//   color: #4c669f;
// `;
