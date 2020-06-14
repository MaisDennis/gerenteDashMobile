/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';
// -----------------------------------------------------------------------------
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/Feather';
import Button from '~/components/Button';
import {
  Container, High, Middle, Div1, Span1, Low,
  Info, Tag, Name, Time, DetailDiv, HrLine, FinishedButton,
  TaskIcon
} from './styles';
// -----------------------------------------------------------------------------
const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(parseISO(fdate), "dd '/' MMM '/' yyyy", { locale: pt });

export default function Task({ data, navigation }) {
  const today = new Date();
  const dueDate = parseISO(data.due_date);

  useEffect (() => {
    pastDueDate()
  }, [])

  function handleFeed() {
    navigation.navigate('Feed', { task_id: data.id });
  }

  function handleConfirm() {
    navigation.navigate('Confirm', { task_id: data.id });
  }

  function pastDueDate() {
    let flag = false;
    if (today > dueDate) {
      flag = true;
    }
    return flag;
  }
  // -----------------------------------------------------------------------------
  return (
    <Container>
      {
        data.end_date
          ? <>
              <High>
                <TaskIcon name="clipboard" size={20} style={{ color: '#999'}}/>
                <Name style={{ color: '#999'}}>{data.name} </Name>
              </High>
              <Middle>
                <Div1 style={{ borderColor: '#999'}}>
                  <Span1>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Span1>
                </Div1>
              </Middle>
              <Low>
                <Info>
                  <Tag>Início</Tag>
                    <Time style={{ color: '#999'}}>{formattedDate(data.start_date)}</Time>
                </Info>
                <Info>
                  <Tag>Entrega</Tag>
                    <Time style={{ color: '#999'}}>{formattedDate(data.due_date)}</Time>
                </Info>
              </Low>
              <HrLine/>
              <Low>
                <DetailDiv>
                    <FinishedButton><Icon name="message-square" size={20} color="#fff"/></FinishedButton>
                </DetailDiv>
                <DetailDiv>
                    <FinishedButton><Icon name="check" size={20} color="#fff" /></FinishedButton>
                </DetailDiv>
              </Low>
            </>
          : <>
              <High>
                <TaskIcon name="clipboard" pastDueDate={pastDueDate()}/>
                <Name pastDueDate={pastDueDate()}>{data.name} </Name>
              </High>
              <Middle>
                <Div1 pastDueDate={pastDueDate()}>
                  <Span1>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Span1>
                </Div1>
              </Middle>
              <Low>
                <Info>
                  <Tag>Início</Tag>
                    <Time pastDueDate={pastDueDate()}>{formattedDate(data.start_date)}</Time>
                </Info>
                <Info>
                  <Tag>Entrega</Tag>
                    <Time pastDueDate={pastDueDate()}>{formattedDate(data.due_date)}</Time>
                </Info>
              </Low>
              <HrLine/>
              <Low>
                <DetailDiv>
                  <TouchableOpacity onPress={handleFeed}>
                    <Button><Icon name="message-square" size={20} color="#fff" /></Button>
                  </TouchableOpacity>
                </DetailDiv>
                <DetailDiv>
                  <TouchableOpacity onPress={handleConfirm}>
                    <Button><Icon name="check" size={20} color="#fff" /></Button>
                  </TouchableOpacity>
                </DetailDiv>
              </Low>
            </>
      }
    </Container>
  );
}
