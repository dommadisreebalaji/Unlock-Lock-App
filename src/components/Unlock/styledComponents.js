// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(to top, #3c2940, #0b0c1e);
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  width: 120px;
  height: 120px;
`

export const AppHeading = styled.p`
  font-family: Roboto;
  color: #e2e8f0;
  font-size: 36px;
  font-weight: 400;
`

export const AppButton = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  font-size: 15px;
  font-family: Roboto;
  padding: 7px;
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin-top: 100px;
  cursor: pointer;
`
