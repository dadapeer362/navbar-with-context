// Write your code here
// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const darkAboutImg =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
const lightAboutImg =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBackground = isDarkTheme
        ? 'dark-background'
        : 'light-background'
      const aboutImg = isDarkTheme ? lightAboutImg : darkAboutImg
      const aboutText = isDarkTheme ? 'about-light-text' : 'about-dark-text'
      return (
        <>
          <Navbar />
          <div className={`about-container ${aboutBackground}`}>
            <img className="about-img" src={aboutImg} alt="about" />
            <h1 className={aboutText}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
