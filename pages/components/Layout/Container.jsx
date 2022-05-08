import React from 'react'
import styled from 'styled-components'

const ContainerStyle = styled.div`

    max-width:1150px;
    width: 90%;
    margin: 0 auto;

`

const Container = ({ children }) => {
  return (
    <ContainerStyle>
        { children }
    </ContainerStyle>
  )
}

export default Container