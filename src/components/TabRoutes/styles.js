import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  height: 100%;
`;

export const Header = styled.View`
  margin: 10px 30px 0px 30px;
  /* background: #F5F; */
`;

export const TopHeaderView = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 10px;
  /* background: #F5F; */
`;

export const ExitButton = styled(Button)`
background: #58595B;
color: #fff;
width: 44px;
height: 44px;
border-radius: 44px;
margin-top: 4px;
`;

export const ExitButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

export const TagView = styled.View`
  display: flex;
  flex-direction: column;
  /* background: #444; */
`;

export const Span1 = styled.Text`
  font-weight: bold;
  font-size: 14px;
  /* margin-bottom: 5px; */
  /* color: #888; */
`;

export const Span2 = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 5px;
  /* color: #888; */
`;

export const TitleWorkerName = styled.Text`
  font-size: 21px;
  color: #222;
  font-weight: bold;
  align-self: center;
`;

export const BottomHeaderView = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
`;

export const TitleTask = styled.Text`
  font-size: 21px;
  color: #222;
  font-weight: bold;
`;

// export const Div4 = styled.View`
//   display: flex;
//   flex-direction: row;
//   margin: auto ;
// `;

// export const List = styled.FlatList.attrs({
//   showsVerticalScrollIndicator: false,
//   contentContainerStyle: { padding: 30 },
// })`
//   height: 100%;
// `;
