import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: column;
  margin: 30px 30px 0px 30px;
`;

export const DivTopHeader = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5px 5px 0 5px;
`;

export const Div1 = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 15px;
`;

export const Div2 = styled.View`
  display: flex;
  flex-direction: column;
`;

export const Span1 = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #888;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #111;
  font-weight: bold;
  align-self: center;
`;

export const DivBottomheader = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 25px;
`;

export const Title2 = styled.Text`
  font-size: 24px;
  color: #111;
  font-weight: bold;
`;

export const Title3 = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #999;
  margin: auto;
`;

export const Div4 = styled.View`
  display: flex;
  flex-direction: row;
  margin: auto 5px;
`;

export const Span2 = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${props => (props.query === '' ? '#111' : '#999')};
  margin-left: 5px;
`;

export const Span3 = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${props => (props.query === 'delivered' ? '#111' : '#999')};
  margin-left: 5px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  height: 100%;
`;
