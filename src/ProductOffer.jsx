import React from "react";
import img from "./assets/productq-hero-2.webp"
import img2 from "./assets/order-now-100mbg.webp"
import img3 from "./assets/Screenshot from 2024-09-08 21-53-55.png"

const ProductOffer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <h1 style={styles.header}>
          Unlock Your Copy Of <br />
          Pocket Sized ATM Machine
        </h1>

        {/* Image Section (You can replace src with actual images) */}
        <div style={styles.imageContainer}>
          <img
            src={img}
            alt="Product"
            style={styles.image}
          />
        </div>

        {/* Purple Info Boxes */}
        <div style={styles.infoBoxContainer}>
          <div style={styles.infoBox}>Special Discount</div>
          <div style={styles.infoBox1}>Instant Access</div>
          <div style={styles.infoBox2}>Quick Start Bonuses</div>
        </div>

        {/* Pricing Section */}
        <img src={img3} alt="" />

        {/* Order Button */}
        <img
            src={img2}
            alt="Product"
            style={styles.image}
          />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, rgb(35, 131, 78) 50%, white 50%)'
  },
  card: {
    width: '400px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
    border: '2px solid #34D399',
  },
  header: {
    fontSize: '27px',
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: '30px',
    position: 'relative',
    top: '-120px'
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  image: {
    borderRadius: '8px',
    width: '400px',
    height: 'auto',
  },
  infoBoxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  infoBox: {
    backgroundColor: '#6B21A8',
    color: '#fff',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '15px',
    flex: 1,
    textAlign: 'center',
    margin: '0 5px',
  },
  infoBox1: {
    backgroundColor: '#5590d8',
    color: '#fff',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '18px',
    flex: 1,
    textAlign: 'center',
    margin: '0 5px',
  },
  infoBox2: {
    backgroundColor: '#249e24',
    color: '#fff',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '15px',
    flex: 1,
    textAlign: 'center',
    margin: '0 5px',
  },
  subHeader: {
    fontSize: '22px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '-20px'
  },
  price: {
    fontSize: '60px',
    fontWeight: 'bold',
    color: '#9333EA',
    margin: '10px 0',
  },
  button: {
    backgroundColor: '#F59E0B',
    color: '#fff',
    fontWeight: 'bold',
    padding: '19px 30px',
    borderRadius: '8px',
    fontSize: '20px',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    marginTop: '10px',
  },
  guaranteeSection: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  guaranteeImage: {
    marginRight: '10px',
    width: '50px',
  },
  guaranteeText: {
    fontSize: '14px',
    color: '#10B981',
    fontWeight: '600',
  },
};

export default ProductOffer;
