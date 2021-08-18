// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const darkHomeImg =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
const lightHomeImg =
  'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBackground = isDarkTheme
        ? 'dark-background'
        : 'light-background'
      const homeImg = isDarkTheme ? lightHomeImg : darkHomeImg
      const homeText = isDarkTheme ? 'home-light-text' : 'home-dark-text'
      return (
        <>
          <Navbar />
          <div className={`home-container ${homeBackground}`}>
            <img className="home-img" src={homeImg} alt="home" />
            <h1 className={homeText}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
