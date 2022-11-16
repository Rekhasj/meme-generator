import styled from 'styled-components'

export const Heading = styled.h1`
  font-family: 'Open Sans';
  color: #35469c;
`
export const CustomParagraph = styled.h1`
  font-family: 'Open Sans';
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
`

export const MainContainer = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
`

export const GeneratorCard = styled.form`
  font-family: 'Open Sans';
  display: flex;
  flex-direction: column;
`

export const InputCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`
export const Label = styled.label`
  font-family: 'Open Sans';
  color: #7e858e;
  margin-bottom: 5px;
  font-size: 12px;
`
export const Input = styled.input`
  color: #5a7184;
  font-family: 'Open Sans';
  padding-left: 2px;
  padding-right: 100px;
  padding-top: 4px;
  padding-bottom: 4px;
`

export const Select = styled.select`
  color: #5a7184;
  font-family: 'Open Sans';
  padding-left: 2px;
  padding-right: 100px;
  padding-top: 4px;
  padding-bottom: 4px;
`

export const Option = styled.option``

export const CustomButton = styled.button`
  background-color: #0b69ff;
  color: #ffffff;
  border: none;
  padding: 8px 25px;
  border-radius: 5px;
  margin-top: 5px;
  font-size: 15px;
  font-weight: 400;
  font-family: 'Open Sans';
`
export const ImageCard = styled.div`
  background-image: url(${props => props.backgroundImage});

  background-size: cover;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  max-height: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
