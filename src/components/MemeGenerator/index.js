import {Component} from 'react'
import {
  Heading,
  MainContainer,
  GeneratorCard,
  InputCard,
  Label,
  Input,
  Select,
  Option,
  CustomButton,
  ImageCard,
  CustomParagraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    fontSizeActiveId: '',
    fontSizeInputId: fontSizesOptionsList[0].optionId,
    topTextInput: '',
    bottomTextInput: '',
    imageUrlInput: '',
    topText: '',
    bottomText: '',
    imageUrl: '',
  }

  onGenerate = event => {
    event.preventDefault()
    const {
      topTextInput,
      bottomTextInput,
      imageUrlInput,
      fontSizeInputId,
    } = this.state

    this.setState({
      topText: topTextInput,
      bottomText: bottomTextInput,
      imageUrl: imageUrlInput,
      fontSizeActiveId: fontSizeInputId,
    })
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({fontSizeInputId: event.target.value})
  }

  render() {
    const {
      topText,
      bottomText,
      imageUrl,
      topTextInput,
      bottomTextInput,
      imageUrlInput,
      fontSizeActiveId,
      fontSizeInputId,
    } = this.state
    return (
      <MainContainer>
        <InputCard>
          <Heading>Meme Generator</Heading>
          <GeneratorCard onSubmit={this.onGenerate}>
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input
              type="text"
              id="imageUrl"
              value={imageUrlInput}
              placeholder="Enter the image URL"
              onChange={this.onChangeImageUrl}
            />

            <Label htmlFor="topText">Top Text</Label>
            <Input
              type="text"
              id="topText"
              value={topTextInput}
              placeholder="Enter the Top Text"
              onChange={this.onChangeTopText}
            />

            <Label htmlFor="bottomText">Bottom Text</Label>
            <Input
              id="bottomText"
              type="text"
              value={bottomTextInput}
              placeholder="Enter the Bottom Text"
              onChange={this.onChangeBottomText}
            />

            <Label htmlFor="select">Font Size</Label>
            <Select
              id="select"
              onChange={this.onChangeOptionId}
              value={fontSizeInputId}
            >
              {fontSizesOptionsList.map(eachFont => (
                <Option value={eachFont.optionId} key={eachFont.optionId}>
                  {eachFont.displayText}
                </Option>
              ))}
            </Select>

            <CustomButton type="submit">Generate</CustomButton>
          </GeneratorCard>
        </InputCard>
        <ImageCard backgroundImage={imageUrl} data-testid="meme">
          <CustomParagraph fontSize={fontSizeActiveId}>
            {topText}
          </CustomParagraph>
          <CustomParagraph fontSize={fontSizeActiveId}>
            {bottomText}
          </CustomParagraph>
        </ImageCard>
      </MainContainer>
    )
  }
}
export default MemeGenerator
