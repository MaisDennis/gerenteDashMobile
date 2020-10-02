import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: column;
  margin: 5px 30px 0px 30px;
`;

export const TopHeaderView = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0;
  /* background: #F5F; */
`;

export const TagView = styled.View`
  display: flex;
  flex-direction: column;
  /* background: #444; */
`;

export const Span1 = styled.Text`
  font-weight: bold;
  font-size: 14px;
  /* color: #888; */
`;

export const TitleWorkerName = styled.Text`
  font-size: 24px;
  color: #222;
  font-weight: bold;
  align-self: center;
`;

export const BottomHeaderView = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 12px;
`;

export const TitleTask = styled.Text`
  font-size: 21px;
  color: #222;
  font-weight: bold;
`;

export const Div4 = styled.View`
  display: flex;
  flex-direction: row;
  margin: auto ;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  height: 100%;
`;
