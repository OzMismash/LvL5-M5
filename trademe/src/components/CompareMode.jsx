import React, { useState } from "react";
import styles from "./CompareMode.module.css";

function CompareMode({ dummyData }) {
  // Function to handle item click
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleWishlistItemClick = (product) => {
    setSelectedProduct(product);
  };

  // Function to handle adding product to compare list
  const [compareList, setCompareList] = useState(new Array(5).fill(null));

  const handleAddToCompareList = () => {
    if (selectedProduct) {
      const firstAvailableSlotIndex = compareList.findIndex((item) => !item);
      if (firstAvailableSlotIndex !== -1) {
        const updatedCompareList = [...compareList];
        updatedCompareList[firstAvailableSlotIndex] = selectedProduct;
        setCompareList(updatedCompareList);
        // setSelectedProduct(null); // used to reset 'selectedProduct' after adding to compare list
      } else {
        console.log("All compare slots are full");
      }
    }
  };

  // Function to handle removing item from compare list
  const handleRemoveFromCompareList = (index) => {
    const updatedCompareList = [...compareList];
    updatedCompareList[index] = null;
    setCompareList(updatedCompareList);
  };

  return (
    <div className={styles.compareContainer}>
      {/* ====== Title ====== */}
      <div className={styles.titleContanier}>
        <div className={styles.title}>Compare Mode</div>
        <div className={styles.titleNew}>NEW</div>
      </div>
      <div className={styles.titleHow}>How do I compare?</div>
      {/* ====== Compare Boxes ====== */}
      <div className={styles.compareBoxContainer}>
        <p className={styles.compareListTitle}>Compare List:</p>
        {compareList.map((product, index) => (
          <div
            key={index}
            className={styles.compareBoxList}
            onClick={() => handleRemoveFromCompareList(index)}
          >
            {product ? <img src={product.image} alt={product.title} /> : "+"}
          </div>
        ))}
        <button className={styles.boxCompareBtn}>Compare</button>
      </div>

      {/* ====== Wishlist Box ====== */}
      <div className={styles.wishlistContainer}>
        {/* === Wishlist Display === */}
        <div className={styles.wishlistDisplay}>
          {selectedProduct && (
            <>
              <img
                src={selectedProduct.image}
                alt="image not found"
                className={styles.wishlistDisplayItemImg}
              />
              <div className={styles.displayItemDetails}>
                <p className={styles.displayProductTitle}>
                  {selectedProduct.title}
                </p>
                <p className={styles.displayCloseTime}>
                  {selectedProduct.closeDate
                    ? selectedProduct.closeDate.toLocaleString()
                    : ""}
                </p>
                <p className={styles.displayTimeLeft}>placeholder</p>
                <p className={styles.displayShipping}>Free shipping</p>
                <p className={styles.displayProductInfo}>
                  Product info <span>More...</span>
                </p>
                <button
                  className={styles.compBtn}
                  onClick={handleAddToCompareList}
                >
                  + Compare List
                </button>
                <button className={styles.wishBtn}>+ Wishlist</button>
              </div>
            </>
          )}
        </div>

        {/* === Wishlist array === */}
        <div className={styles.wishlistRightSide}>
          <p className={styles.wishlistItemList}>Recently Viewed:</p>
          <div className={styles.overflow}>
            {dummyData.map((product, index) => (
              <div
                key={index}
                className={styles.wishlistItem}
                onClick={() => handleWishlistItemClick(product)}
              >
                <img
                  src={product.image}
                  alt="image not found"
                  className={styles.wishlistItemImg}
                />
                <div className={styles.wishlistItemDetails}>
                  <p className={styles.productTitle}>{product.title}</p>
                  <p className={styles.price}>${product.price}</p>
                  <p className={styles.shipping}>Free shipping</p>
                  <p className={styles.productInfo}>
                    Product info{" "}
                    <span className={styles.productInfoSpan}>More...</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* ====== Compare Table ====== */}
      <div className={styles.compareTableContainer}>
        {/* === Title === */}
        <div className={styles.tableTitle}>Product Info</div>
        {/* === Compare === */}
        <div className={styles.compareTable}>
          {/* left side */}
          <div className={styles.tableLeft}>
            <div className={styles.tableHeader}>Condition</div>
            <div className={styles.tableHeader}>Description</div>
            <div className={styles.tableHeader}>Shipping & Pick Up Options</div>
            <div className={styles.tableHeader}>Payment Options</div>
            <div className={styles.tableHeader}>Q&A</div>
            <div className={styles.tableHeader}>Seller Profile</div>
          </div>
          {/* right side */}
          <div className={styles.tableRight}>
            {selectedProduct && (
              <>
                <div className={styles.tableContent} id={styles.tableOdd}>
                  {selectedProduct.condition}
                </div>
                <div className={styles.tableContent}>
                  {selectedProduct.description}
                </div>
                <div className={styles.tableContent} id={styles.tableOdd}>Buyer must pick-up</div>
                <div className={styles.tableContent}>
                  {selectedProduct.paymentOptions}
                </div>
                <div className={styles.tableContent} id={styles.tableOdd}>
                  <button className={styles.qaBtn}>Ask a Question</button>
                </div>
                <div className={styles.tableContent} id={styles.tableProfile}>
                  <p className={styles.userName}>{selectedProduct.username}</p>
                  <p className={styles.userReviews}>
                    {selectedProduct.reviews}% Positive Reviews
                  </p>
                  <p className={styles.listingLocation}>
                    {selectedProduct.location}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareMode;
