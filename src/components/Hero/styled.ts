import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  position: relative;
  height: 480px;
  display: block;
  width: 100%;
  padding-top: 16px;

  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: #000;
    top: 0;
    left: 0;
    opacity: 0.56;
  }

  .container {
    position: relative;
    padding: 0px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    background-size: cover;
  }
`

export const Infos = styled.div`
  padding: 16px;
  width: fit-content;
  background-color: ${colors.black};
  font-weight: bold;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
    margin: 16px 0;

    span {
      display: block;
      text-decoration: line-through;
    }
  }
`
