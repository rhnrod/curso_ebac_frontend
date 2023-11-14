import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }

  input,
  select {
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    color: ${colors.black};
    height: 32px;
    padding: 0 8px;
    width: 100%;

    &:focus {
      outline: none;
    }

    &.error {
      border: 1px solid red;
    }
  }

  option {
    color: ${colors.black};
  }
`

export const TabButton = styled.button<TabButtonProps>`
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${(props) =>
    props.isActive ? `${colors.green}` : `${colors.black}`};
  height: 32px;
  border: none;
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 8px;
    width: 100%;
  }
`
