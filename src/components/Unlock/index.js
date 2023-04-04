// Write your code here
import {useState} from 'react'
import {AppContainer, Image, AppHeading, AppButton} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)
  const imageUrl = lock
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = lock ? 'lock' : 'unlock'
  const onClickButton = () => {
    setLock(prevState => !prevState)
  }
  const lockMessage = lock ? 'Locked' : 'Unlocked'
  const buttonText = lock ? 'unlock' : 'Lock'
  return (
    <AppContainer>
      <Image src={imageUrl} alt={altText} />
      <AppHeading>Your Device is {lockMessage}</AppHeading>
      <AppButton onClick={onClickButton}>{buttonText}</AppButton>
    </AppContainer>
  )
}

export default Unlock
