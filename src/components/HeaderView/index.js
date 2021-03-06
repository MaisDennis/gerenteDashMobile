import React from 'react'
import { View, Text, Image } from 'react-native'
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { HeaderContainer, HeaderText, HeaderImage } from './styles';
import godtaskerFont from '~/assets/detective/godtaskerFontPlainGreySmall.png';

export default function HeaderView() {

  const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(fdate, "dd 'de' MMMM',' yyyy", { locale: pt });
  const todayDate = formattedDate(new Date())

  return (
    <HeaderContainer>
      <HeaderImage
        source={godtaskerFont}
      />
      <HeaderText>{todayDate}</HeaderText>
    </HeaderContainer>
  )
}
