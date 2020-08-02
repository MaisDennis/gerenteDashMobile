import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: column;
  margin: 30px 30px 0px 30px;
`;

export const TopHeaderView = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5px 5px 0 5px;
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
  color: #888;
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
  margin-top: 25px;
`;

export const TitleTask = styled.Text`
  font-size: 24px;
  color: #222;
  font-weight: bold;
`;

export const Div4 = styled.View`
  display: flex;
  flex-direction: row;
  margin: auto 5px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  height: 100%;
`;
