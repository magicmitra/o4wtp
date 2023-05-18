import styles from '../App.module.css'

// possibly use the MenuDrawer component to handle hamburger clicks
const NavBar = () => {
    const handleLogoClick = () => {
        alert("Logo Clicked")
    }

    const handleCartClick = () => {
        alert("Cart Clicked")
    }

    const handleMenuClick =() => {
        alert("Hamburger Menu Clicked")
    }

    return (
        <div className={styles["Nav-bar"]}>
            <div className={styles["Logo-container"]}>
                <img src={'images/icons/logoPlaceHolder.svg'}
                    onClick={handleLogoClick}
                />
            </div>
            <div className={styles["Right-side-container"]}>
                <img src={'images/icons/shoppingCart.png'}
                    onClick={handleCartClick}
                />
                <img src={'images/icons/hamburgerIcon.png'}
                    onClick={handleMenuClick}
                />
            </div>
        </div>
    )
}

export default NavBar