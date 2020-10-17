/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { format, parseISO } from 'date-fns';
// -----------------------------------------------------------------------------
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/Feather';
import Button from '~/components/Button';
import {
  Container, TitleView, TaskIcon, NameText, DescriptionView, DescriptionBorderView, DescriptionSpan,
  DatesAndButtonView, TagView, Label, Time, StartTime, DueTime,  ButtonView, HrLine, MessageButton,
  FinishedButton, ConfirmButton, UserView
} from './styles';
// -----------------------------------------------------------------------------
const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(parseISO(fdate), "dd'-'MMM'-'yyyy", { locale: pt });

export default function Task({ data, navigation }) {
  const today = new Date();
  const dueDate = parseISO(data.due_date);

  useEffect (() => {
    pastDueDate()
  }, [])

  function handleMessage() {
    navigation.navigate('Message', {
      task_id: data.id, user_id: data.user_id, taskName: data.name, taskDescription: data.description, taskUserPhonenumber: data.userphonenumber
    });
  }

  function handleConfirm() {
    navigation.navigate('Confirm', { task_id: data.id, taskName: data.name });
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
          // Finished tasks
          ? <>
              <TitleView>
                <TaskIcon name="clipboard" size={20} style={{ color: '#999'}}/>
                <NameText style={{ color: '#999'}}>{data.name} </NameText>
              </TitleView>
              <DescriptionView>
                <DescriptionBorderView style={{ borderColor: '#999'}}>
                  <DescriptionSpan>{data.description}</DescriptionSpan>
                </DescriptionBorderView>
              </DescriptionView>
              <DatesAndButtonView>
              <UserView>
                  <Label>Delegado por:</Label>
                  <Time style={{ color: '#999'}}>{data.user.name}</Time>
                </UserView>
              </DatesAndButtonView>

              <DatesAndButtonView>
                <TagView>
                  <Label>Início</Label>
                    <Time style={{ color: '#999'}}>{formattedDate(data.start_date)}</Time>
                </TagView>
                <TagView>
                  <Label>Prazo</Label>
                    <Time style={{ color: '#999'}}>{formattedDate(data.due_date)}</Time>
                </TagView>
                <TagView>
                  <Label>Entregue</Label>
                    <Time style={{ color: '#999'}}>{formattedDate(data.end_date)}</Time>
                </TagView>
              </DatesAndButtonView>
              <HrLine/>
              <DatesAndButtonView>
                <ButtonView>
                    <FinishedButton><Icon name="message-square" size={20} color="#fff"/></FinishedButton>
                </ButtonView>
                <ButtonView>
                    <FinishedButton><Icon name="check-circle" size={20} color="#fff" /></FinishedButton>
                </ButtonView>
              </DatesAndButtonView>
            </>

          // Unfinished tasks
          : <>
              <TitleView>
                <TaskIcon name="clipboard" pastDueDate={pastDueDate()}/>
                <NameText pastDueDate={pastDueDate()}>{data.name} </NameText>
              </TitleView>
              <DescriptionView>
                <DescriptionBorderView pastDueDate={pastDueDate()}>
                  <DescriptionSpan>{data.description}</DescriptionSpan>
                </DescriptionBorderView>
              </DescriptionView>
              <DatesAndButtonView>
              <UserView>
                  <Label>Delegado por:</Label>
                  <StartTime>{data.user.name}</StartTime>
                </UserView>
              </DatesAndButtonView>
              <DatesAndButtonView>
                <TagView>
                  <Label>Início</Label>
                    <StartTime pastDueDate={pastDueDate()}>{formattedDate(data.start_date)}</StartTime>
                </TagView>
                <TagView>
                  <Label>Prazo</Label>
                    <DueTime pastDueDate={pastDueDate()}>{formattedDate(data.due_date)}</DueTime>
                </TagView>
              </DatesAndButtonView>
              <HrLine/>
              <DatesAndButtonView>
                <ButtonView>
                  <TouchableOpacity onPress={handleMessage}>
                    <MessageButton><Icon name="message-square" size={20} color="#fff" /></MessageButton>
                  </TouchableOpacity>
                </ButtonView>
                <ButtonView>
                  <TouchableOpacity onPress={handleConfirm}>
                    <ConfirmButton pastDueDate={pastDueDate()}><Icon name="check-circle" size={20} color="#fff" /></ConfirmButton>
                  </TouchableOpacity>
                </ButtonView>
              </DatesAndButtonView>
            </>
      }
    </Container>
  );
}
