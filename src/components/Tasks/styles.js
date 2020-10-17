import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '~/components/Button';

export const Container = styled.View`
  margin: 0 25px 16px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  /* background: #F5F5; */
`;

export const TaskIcon = styled(Icon)`
color: #222;
font-size: 20px;
`;

export const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  margin: 8px;
`;

export const NameText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #222;
  margin: auto 4px;
`;

export const DescriptionView = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 8px;

`;

export const DescriptionBorderView = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 2px;
  /* border-color: #bb9a39; */
  border-color: ${props => props.pastDueDate == true ? '#f64C75' : '#009966'};
  align-items: center;
  width: 90%;
  padding: 4px;
  background: #fff;
  border-radius: 4px;
`;

export const DescriptionSpan = styled.Text`
  color: #222;
  font-weight: normal;
  font-size: 14px;
  text-align: justify;
  line-height: 20px;
  margin: 4px;
`;

export const DatesAndButtonView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const TagView = styled.View`
  margin:auto;
  align-items: center;
`;

export const Label = styled.Text`
  font-weight: normal;
  font-size: 14px;
  color: #888;
  margin: 2px 4px;
`;

export const Time = styled.Text`
  color: ${props => props.pastDueDate == true ? '#f64C75' : '#009966'};
  border-radius: 16px;
  padding: 2px;
  font-weight: bold;
  font-size: 14px;
  margin: 2px auto;
`;
export const StartTime = styled.Text`
  background: #F5F5F5;
  border-radius: 16px;
  padding: 2px;
  font-weight: bold;
  font-size: 14px;
  margin: 2px auto;
`;
export const DueTime = styled.Text`
  background: ${props => props.pastDueDate == true ? '#f64C75' : '#009966'};
  border-radius: 16px;
  padding: 2px;
  font-weight: bold;
  font-size: 14px;
  margin: 2px auto;
`;

export const ButtonView = styled.View`
  text-align: center;
  width: 45%;
  margin: 0 auto 8px;
  /* background: #f4f; */
`;

export const HrLine = styled.View`
width: 90%;
border: 0.5px #dddcda;
margin: 14px auto;
`;

export const MessageButton = styled(Button)`
background: #58595B;
`;

export const ConfirmButton = styled(Button)`
background: ${props => props.pastDueDate == true ? '#f64C75' : '#009966'};
`;

export const FinishedButton = styled(Button)`
background: #999;
`;

export const UserView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4px auto;
`;
