import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ValentinesApp() {
  const [accepted, setAccepted] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

  const handleNo = () => {
    setYesSize((prev) => prev + 0.2);

    const randomX = Math.floor(Math.random() * 200 - 100);
    const randomY = Math.floor(Math.random() * 200 - 100);

    setNoPosition({ x: randomX, y: randomY });
  };

  if (accepted) {
    return (
      <div style={styles.containerPink}>
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <div style={styles.card}>
            <h1 style={styles.title}>💖 ¡Felicidades! 💖</h1>
            <p>
              Nos vemos en 8 norte con 3 poniente a las 16:00 pm el 14 de febrero
              <br />
              <br />
              Te amo ❤️
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>¿Quieres ser mi San Valentín? ❤️</h1>

        <div style={styles.buttons}>
          <motion.button
            animate={{ scale: yesSize }}
            style={styles.yesButton}
            onClick={() => setAccepted(true)}
          >
            Sí 💘
          </motion.button>

          <motion.button
            animate={{ x: noPosition.x, y: noPosition.y }}
            onMouseEnter={handleNo}
            onClick={handleNo}
            style={styles.noButton}
          >
            No 😢
          </motion.button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(pink, #ff9aa2)",
  },
  containerPink: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#ffd1dc",
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    color: "#ff4d6d",
  },
  buttons: {
    marginTop: "20px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
  yesButton: {
    padding: "15px 25px",
    fontSize: "18px",
    background: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
  noButton: {
    padding: "15px 25px",
    fontSize: "18px",
    background: "#444",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },
};
