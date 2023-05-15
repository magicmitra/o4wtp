import { Button, ThemeProvider } from '@mui/material'
import styles from  '../App.module.css'

const LandingPage = () => {

    return (
        <div className={styles['Hero-image']}>
            <img src='/images/wine/hero.jpg'/>
        </div>
    )
}

export default LandingPage