import { useState } from "react";
import styles from "../css/reservations.module.css";

const Reservations = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: 1,
    date: new Date().toISOString().split("T")[0],
    timeSlot: "",
    specialRequests: "",
    loading: false,
    confirmed: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.timeSlot
    ) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setFormData({ ...formData, loading: true });

    setTimeout(() => {
      setFormData({ ...formData, loading: false, confirmed: true });
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Reserve Your Table</h1>
      <div className={styles.card}>
        {!formData.confirmed ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.inputGroup}>
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="fullName">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter your full name"
                  className={styles.inputField}
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className={styles.inputField}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="phone">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  className={styles.inputField}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="guests">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  placeholder="Number of Guests"
                  className={styles.inputField}
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
            </div>
            <div className={styles.dateTimeGroup}>
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="date">
                  Select Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className={styles.inputField}
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="timeSlot">
                  Select Time Slot
                </label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  className={styles.inputField}
                  value={formData.timeSlot}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Time Slot</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                </select>
              </div>
            </div>
            <label className={styles.label} htmlFor="specialRequests">
              Special Requests (optional)
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              placeholder="Enter any special requests..."
              className={styles.textArea}
              value={formData.specialRequests}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className={styles.button}>
              {formData.loading ? (
                <span className={styles.loader}></span>
              ) : (
                "Reserve Now"
              )}
            </button>
          </form>
        ) : (
          <div className={styles.confirmation}>
            <h2>Reservation Confirmed!</h2>
            <p>
              Thank you for reserving your table at Kaboul Gourmet. We look
              forward to welcoming you soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservations;
