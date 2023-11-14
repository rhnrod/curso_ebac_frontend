import styled from 'styled-components'
import { colors } from '../../styles'
import { Card } from '../Product/styles'
import { Props } from '.'

type Background = Omit<Props, 'title'>

export const Container = styled.section<Background>`
  background-color: ${(props) =>
    props.background === 'black' ? colors.black : colors.gray};
  padding: 32px 0;

  ${Card} {
    background-color: ${(props) =>
      props.background === 'black' ? colors.gray : colors.black};
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
`
