import { useNavigate } from "react-router"; // Import useNavigate
import styles from "../css/Menudetails.module.css";
import second from "../photo/second.jpg"; // Ensure this path is correct

export default function Menudetails() {
  const navigate = useNavigate();

  return (
    <>
      <section className={styles.container}>
        <div className={styles.imageSection}>
          <img src={second} alt="Afghan Cuisine" />
        </div>

        <div className={styles.textSection}>
          <div className={styles.textBox}>
            <h1>Bites & Sips</h1>
            <p>
              Where tradition meets sophistication. Experience the perfect blend
              of authentic Afghan cuisine and modern elegance in an ambiance
              designed for comfort and charm. Where tradition meets
              sophistication. Experience the perfect blend of authentic Afghan
              cuisine and modern elegance in an ambiance designed for comfort
              and charm. Where tradition meets sophistication. Experience the
              perfect blend of authentic Afghan cuisine and modern elegance in
              an ambiance designed for comfort and charm. Where tradition meets
              sophistication. Experience the perfect blend of authentic Afghan
              cuisine and modern elegance in an ambiance designed for comfort
              and charm. Where tradition meets sophistication. Experience the
              perfect blend of authentic Afghan cuisine and modern elegance in
              an ambiance designed for comfort and charm.
            </p>
            <button
              className={styles.menuButton}
              onClick={() => navigate("/menu")}
            >
              View Menu 🍽️
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
