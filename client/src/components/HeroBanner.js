import React from 'react'
import styles from './HeroBanner.module.css'

function HeroBanner() {

  return (
    <>
        <div className={styles.Hero}>
                
            {/* === TradeMe Logo === */}
            <img src="/TradeMeLogo.png" alt="TradeMe Logo" className={styles.logo}/>
                
            {/* === NavBar === */}
            <div className={styles.navBar}>
                <button className={styles.navBrowse}><img src="/hamburger.png" alt="menu" className={styles.hamMenuImg}></img>Browse Marketplace</button>
                <button className={styles.navBtn}>Jobs</button>
                <button className={styles.navBtn}>Motors</button>
                <button className={styles.navBtn}>Property</button>
                <button className={styles.navBtn}>Services</button>
            </div>
                
            {/* === Listings === */}
            <div className={styles.listings}>
                <div className={styles.startList}>
                    <img src="/Listing.png" alt="Start Listing" className={styles.listingsImage}/>
                    Start Listing
                </div>
                <div className={styles.manageList}>
                    <img src="/Manage.png" alt="Manage Listings" className={styles.listingsImage}/>
                    Manage Listings
                </div>
            </div>

            {/* === grey border dude === */}
            <div className={styles.border}/>

            {/* === Search Bar === */}
            <div className={styles.searchBar}>
                <input className={styles.searchFeild} />
                <button className={styles.dropDown}>All categories</button>
                <button className={styles.searchBtn}>Search</button>
            </div>
                
            {/* === Profile stuff I guess? I dunno what to call this section :D === */}
            <div className={styles.profileStuff}>
                <div className={styles.wishlist}>
                    <img src="/Star.png" alt="Wishlist" className={styles.wishlistImg}/>
                    <p className={styles.profileTag}>Wishlist</p>
                </div>
                <div className={styles.cart}>
                    <img src="/ShoppingCart.png" alt="Cart" className={styles.cartImg}/>
                    <p className={styles.profileTag}>Cart</p>
                </div>
                <div className={styles.profile}>
                    <img src="/Customer.png" alt="Profile" className={styles.profileImg}/>
                   <p className={styles.profileTag}>Profile</p>
                </div>
            </div>

            {/* === grey border dude === */}
            <div className={styles.border}/>
        </div>
    </>
  )
}

export default HeroBanner