"use client";

import React from "react";
import { motion } from "framer-motion";

const offices = [
  {
    city: "Hyderabad",
    address: "Hyderabad",
    phone: "+91 7893800757",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.186118357271!2d78.42800247504466!3d17.406498083457985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1716302000000!5m2!1sen!2sin",
  },
];

export default function ContactSection() {
  return (
    <div style={styles.container}>
      
      <motion.div
        style={styles.left}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.title}>Collaborate with Hefty</h2>
        <form style={styles.form}>
          <label style={styles.label}>Name *</label>
          <input type="text" style={styles.input} />

          <div style={styles.flexRow}>
            <div style={styles.flexHalf}>
              <label style={styles.label}>Email *</label>
              <input type="email" style={styles.input} />
            </div>
            <div style={styles.flexHalf}>
              <label style={styles.label}>Phone Number *</label>
              <input type="text" style={styles.input} />
            </div>
          </div>

          <label style={styles.label}>Subject *</label>
          <select style={styles.input}>
            <option>--- Select Choice ---</option>
            <option>Crushers</option>
            <option>Mobile Series</option>
            <option>Semi Mobile Series</option>
            <option>Feeders</option>
            <option>Impactors</option>
            <option>Screens</option>
            <option>Washing System</option>
            <option>Classifier</option>
          </select>

          <label style={styles.label}>Comment or Message</label>
          <textarea rows={4} style={styles.textarea} />

          <button style={styles.button}>Submit</button>
        </form>
      </motion.div>

      
      <motion.div
        style={styles.right}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 style={styles.titleRight}>
          <span style={{ color: "#fff" }}>Our </span>
          <span style={styles.gray}>Offices</span>
        </h2>
        <div style={styles.officeList}>
          {offices.map((office, index) => (
            <motion.div
              key={index}
              style={styles.office}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 style={styles.officeCity}>{office.city}</h3>
              <p style={styles.officeText}>{office.address}</p>
              {office.phone && <p style={styles.officeText}>{office.phone}</p>}
              {office.map && (
                <div style={styles.mapContainer}>
                  <iframe
                    src={office.map}
                    style={styles.mapIframe}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap", 
    backgroundColor: "#ec6b24",
    color: "#fff",
    padding: "30px 15px",
    fontFamily: "'Segoe UI', sans-serif",
    gap: "20px",
  },
  left: {
    flex: "1 1 500px",
    minWidth: "300px", 
    backgroundColor: "#ec6b24",
    padding: "20px",
    borderRadius: "10px",
  },
  right: {
    flex: "1 1 500px",
    minWidth: "300px",
    padding: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "15px",
  },
  titleRight: {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "20px",
  },
  gray: {
    color: "white",
  },
  label: {
    display: "block",
    marginTop: "10px",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#ec6b24",
    color: "white",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    backgroundColor: "#ec6b24",
    color: "white",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "white",
    color: "#ec6b24",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "4px",
  },
  flexRow: {
    display: "flex",
    flexWrap: "wrap", 
    gap: "10px",
  },
  flexHalf: {
    flex: "1 1 200px", 
  },
  officeList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  office: {
    flex: "1 1 100%", 
    border: "1px solid white",
    borderRadius: "8px",
    padding: "15px",
  },
  officeCity: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "5px",
  },
  officeText: {
    fontSize: "14px",
    lineHeight: "1.4",
  },
  mapContainer: {
    marginTop: "15px",
    width: "100%",
    height: "200px", 
  },
  mapIframe: {
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "8px",
  },
};
