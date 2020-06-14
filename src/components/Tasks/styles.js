import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '~/components/Button';

export const TaskIcon = styled(Icon)`
color: ${props => props.pastDueDate == true ? 'red' : '#009966'};
font-size: 20px;
`;

export const Container = styled.View`
  margin-bottom: 14px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

export const High = styled.View`
  display: flex;
  flex-direction: row;
  margin: 8px;
`;

export const Middle = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 14px;

`;

export const Div1 = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 1px;
border-color: ${props => props.pastDueDate == true ? 'red' : '#009966'};
  align-items: center;
  width: 90%;
  padding: 4px;
  background: #fff;
  border-radius: 8px;
`;

export const Span1 = styled.Text`
  color: #111;
  font-weight: normal;
  font-size: 14px;
  margin: 2px;
  text-align: justify;
  line-height: 20px;
  margin: 4px;
`;

export const Low = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Info = styled.View`
  margin:auto;
  align-items: center;
`;

export const Tag = styled.Text`
  font-weight: normal;
  font-size: 13px;
  color: #888;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${props => props.pastDueDate == true ? 'red' : '#009966'};
  margin: auto 4px;
`;

export const Time = styled.Text`
  color: ${props => props.pastDueDate == true ? 'red' : '#009966'};
  font-weight: bold;
  font-size: 14px;
  margin-top: 2px;
`;

export const DetailDiv = styled.View`
  text-align: center;
  margin: auto;
`;

export const HrLine = styled.View`
width: 90%;
border: 0.5px #dddcda;
margin: 14px auto;
`;

export const FinishedButton = styled(Button)`
background: #999;
`;
