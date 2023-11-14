import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import fechar from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  content: '';
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  position: relative;
  z-index: 1;

  background-color: ${colors.gray};
  max-width: 360px;
  width: 100%;
  padding: 40px 16px 0;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    text-align: center;
  }
`

export const Quantity = styled.p`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  margin: 32px 0 16px;
`

export const Prices = styled.p`
  color: ${colors.white};
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 24px;

  span {
    color: ${colors.lightGray};
    font-size: 12px;
    display: block;
  }
`

export const CartItem = styled.li`
  position: relative;

  display: flex;
  gap: 24px;
  border-bottom: 1px solid ${colors.lightGray};
  padding: 8px 0;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
  }

  span {
    display: block;
    font-size: 14px;
    font-weight: bold;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0px;
  }

  button {
    background-image: url(${fechar});
    cursor: pointer;
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: none;
    position: absolute;
    top: 8px;
    right: 0;
  }
`
