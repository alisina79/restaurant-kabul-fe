import { useState, useEffect } from "react";
import styles from "../css/reservations.module.css";

type ReservationType = "table" | "private" | "celebration";

const Reservations = () => {
  const [reservationType, setReservationType] = useState<ReservationType>("table");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: 1,
    date: new Date().toISOString().split("T")[0],
    timeSlot: "",
    specialRequests: "",
    // Private dining specific fields
    companyName: "",
    eventType: "",
    // Celebration specific fields
    celebrationType: "",
    needCake: false,
    cakeMessage: "",
    // Form state
    loading: false,
    confirmed: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeTimeSlot, setActiveTimeSlot] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [animateConfirmation, setAnimateConfirmation] = useState(false);

  const timeSlots = [
    { time: "18:00", label: "6:00 PM", available: true },
    { time: "19:00", label: "7:00 PM", available: true },
    { time: "20:00", label: "8:00 PM", available: true },
    { time: "21:00", label: "9:00 PM", available: true },
  ];

  const celebrationTypes = [
    "Birthday", 
    "Anniversary", 
    "Graduation",
    "Promotion",
    "Wedding",
    "Other"
  ];

  const eventTypes = [
    "Business Meeting",
    "Corporate Event",
    "Product Launch",
    "Dinner Party",
    "Family Gathering",
    "Other"
  ];

  // Restaurant opening hours data
  const openingHours = {
    lunch: [
      { day: "Monday to Saturday", hours: "11:45am – 2:15pm" },
      { day: "Sunday", hours: "11:45am – 3:00pm" }
    ],
    dinner: [
      { day: "Monday", hours: "5:30pm – 9:00pm" },
      { day: "Tuesday to Friday", hours: "5:30pm – 9:30pm" },
      { day: "Saturday", hours: "6:00pm – 9:30pm" },
      { day: "Sunday", hours: "6:00pm – 9:00pm" }
    ]
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    // Basic validation for phone number
    const re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    return re.test(phone);
  };

  const handleChange = (e: { target: { name: any; value: any; type?: string; checked?: boolean } }) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    
    setFormData({ ...formData, [name]: fieldValue });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleTypeChange = (type: ReservationType) => {
    setReservationType(type);
    // Clear type-specific errors when changing reservation type
    const newErrors = { ...errors };
    if (type !== 'private') {
      delete newErrors.companyName;
      delete newErrors.eventType;
    }
    if (type !== 'celebration') {
      delete newErrors.celebrationType;
    }
    setErrors(newErrors);
  };

  const selectTimeSlot = (time: string) => {
    setActiveTimeSlot(time);
    setFormData({ ...formData, timeSlot: time });
    if (errors.timeSlot) {
      setErrors({ ...errors, timeSlot: "" });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    // Common validations for all reservation types
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your name";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.timeSlot) {
      newErrors.timeSlot = "Please select a time slot";
    }
    
    // Specific validations based on reservation type
    if (reservationType === 'private') {
      if (!formData.companyName.trim()) {
        newErrors.companyName = "Please enter your company or group name";
      }
      if (!formData.eventType) {
        newErrors.eventType = "Please select an event type";
      }
    }
    
    if (reservationType === 'celebration') {
      if (!formData.celebrationType) {
        newErrors.celebrationType = "Please select a celebration type";
      }
      if (formData.needCake && !formData.cakeMessage.trim()) {
        newErrors.cakeMessage = "Please enter text for the cake";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Scroll to the first error
      const firstErrorField = document.querySelector(`.${styles.errorField}`);
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    setFormData({ ...formData, loading: true });
    setFormSubmitted(true);

    // Simulate API call
    setTimeout(() => {
      setFormData({ ...formData, loading: false, confirmed: true });
      setAnimateConfirmation(true);
    }, 2000);
  };

  // Reset form on successful submission
  useEffect(() => {
    if (formData.confirmed) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    }
  }, [formData.confirmed]);

  // Get appropriate form title based on reservation type
  const getFormTitle = () => {
    switch(reservationType) {
      case 'table':
        return 'Reserve Your Table';
      case 'private':
        return 'Book Private Dining';
      case 'celebration':
        return 'Plan Your Celebration';
      default:
        return 'Make a Reservation';
    }
  };

  // Get appropriate form description based on reservation type
  const getFormDescription = () => {
    switch(reservationType) {
      case 'table':
        return 'Experience fine dining at Kaboul Gourmet. Reserve your table now for an unforgettable culinary journey.';
      case 'private':
        return 'Elevate your event with our exclusive private dining spaces. Perfect for business meetings or special gatherings.';
      case 'celebration':
        return 'Make your special moments memorable with a celebration at Kaboul Gourmet. We cater to birthdays, anniversaries, and more.';
      default:
        return 'Book your experience at Kaboul Gourmet.';
    }
  };

  // Opening Hours Section Component
  const OpeningHoursSection = () => (
    <div className={styles.openingHoursContainer}>
      <h2 className={styles.hoursTitle}>Opening Hours</h2>
      
      <div className={styles.hoursSection}>
        <h3 className={styles.hoursSubtitle}>Lunch Hours</h3>
        <div className={styles.hoursList}>
          {openingHours.lunch.map((item, index) => (
            <div key={`lunch-${index}`} className={styles.hoursItem}>
              <span className={styles.hoursDay}>{item.day}</span>
              <span className={styles.hoursTime}>{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.hoursSection}>
        <h3 className={styles.hoursSubtitle}>Dinner Hours</h3>
        <div className={styles.hoursList}>
          {openingHours.dinner.map((item, index) => (
            <div key={`dinner-${index}`} className={styles.hoursItem}>
              <span className={styles.hoursDay}>{item.day}</span>
              <span className={styles.hoursTime}>{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <span className={styles.headingAccent}>Kaboul</span> Reservations
      </h1>
      
      {/* Opening Hours Section */}
      <OpeningHoursSection />
      
      <div className={styles.card}>
        {!formData.confirmed ? (
          <>
            {/* Reservation Type Selector */}
            <div className={styles.typeSelector}>
              <button 
                className={`${styles.typeButton} ${reservationType === 'table' ? styles.activeType : ''}`}
                onClick={() => handleTypeChange('table')}
              >
                <span className={styles.typeIcon}>🍽️</span>
                Table Reservation
              </button>
              <button 
                className={`${styles.typeButton} ${reservationType === 'private' ? styles.activeType : ''}`}
                onClick={() => handleTypeChange('private')}
              >
                <span className={styles.typeIcon}>🏢</span>
                Private Dining
              </button>
              <button 
                className={`${styles.typeButton} ${reservationType === 'celebration' ? styles.activeType : ''}`}
                onClick={() => handleTypeChange('celebration')}
              >
                <span className={styles.typeIcon}>🎉</span>
                Celebration
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formIntro}>
                <h2 className={styles.formTitle}>{getFormTitle()}</h2>
                <p>{getFormDescription()}</p>
              </div>
              
              <div className={styles.inputGroup}>
                <div className={`${styles.inputWrapper} ${errors.fullName ? styles.errorField : ""}`}>
                  <label className={styles.label} htmlFor="fullName">
                    Full Name
                    <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    className={`${styles.inputField} ${errors.fullName ? styles.errorInput : ""}`}
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && <span className={styles.errorMessage}>{errors.fullName}</span>}
                </div>

                <div className={`${styles.inputWrapper} ${errors.email ? styles.errorField : ""}`}>
                  <label className={styles.label} htmlFor="email">
                    Email
                    <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className={`${styles.inputField} ${errors.email ? styles.errorInput : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
                </div>
                
                <div className={`${styles.inputWrapper} ${errors.phone ? styles.errorField : ""}`}>
                  <label className={styles.label} htmlFor="phone">
                    Phone Number
                    <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    className={`${styles.inputField} ${errors.phone ? styles.errorInput : ""}`}
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
                </div>
                
                <div className={styles.inputWrapper}>
                  <label className={styles.label} htmlFor="guests">
                    Number of Guests
                    {reservationType === 'private' && <span className={styles.infoTag}>Max 30</span>}
                  </label>
                  <div className={styles.guestSelector}>
                    <button 
                      type="button" 
                      className={styles.guestBtn}
                      onClick={() => formData.guests > 1 && setFormData({ ...formData, guests: formData.guests - 1 })}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      className={styles.guestInput}
                      value={formData.guests}
                      onChange={handleChange}
                      min="1"
                      max={reservationType === 'private' ? "30" : reservationType === 'celebration' ? "50" : "20"}
                    />
                    <button 
                      type="button" 
                      className={styles.guestBtn}
                      onClick={() => {
                        const maxGuests = reservationType === 'private' ? 30 : reservationType === 'celebration' ? 50 : 20;
                        if (formData.guests < maxGuests) {
                          setFormData({ ...formData, guests: formData.guests + 1 })
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Private Dining specific fields */}
              {reservationType === 'private' && (
                <div className={styles.inputGroup}>
                  <div className={`${styles.inputWrapper} ${errors.companyName ? styles.errorField : ""}`}>
                    <label className={styles.label} htmlFor="companyName">
                      Company/Group Name
                      <span className={styles.required}>*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Enter company or group name"
                      className={`${styles.inputField} ${errors.companyName ? styles.errorInput : ""}`}
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                    {errors.companyName && <span className={styles.errorMessage}>{errors.companyName}</span>}
                  </div>
                  
                  <div className={`${styles.inputWrapper} ${errors.eventType ? styles.errorField : ""}`}>
                    <label className={styles.label} htmlFor="eventType">
                      Event Type
                      <span className={styles.required}>*</span>
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      className={`${styles.inputField} ${errors.eventType ? styles.errorInput : ""}`}
                      value={formData.eventType}
                      onChange={handleChange}
                    >
                      <option value="">Select Event Type</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.eventType && <span className={styles.errorMessage}>{errors.eventType}</span>}
                  </div>
                </div>
              )}
              
              {/* Celebration specific fields */}
              {reservationType === 'celebration' && (
                <div className={styles.inputGroup}>
                  <div className={`${styles.inputWrapper} ${errors.celebrationType ? styles.errorField : ""}`}>
                    <label className={styles.label} htmlFor="celebrationType">
                      Celebration Type
                      <span className={styles.required}>*</span>
                    </label>
                    <select
                      id="celebrationType"
                      name="celebrationType"
                      className={`${styles.inputField} ${errors.celebrationType ? styles.errorInput : ""}`}
                      value={formData.celebrationType}
                      onChange={handleChange}
                    >
                      <option value="">Select Celebration Type</option>
                      {celebrationTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.celebrationType && <span className={styles.errorMessage}>{errors.celebrationType}</span>}
                  </div>
                  
                  <div className={styles.inputWrapper}>
                    <label className={styles.label}>
                      Add a Special Cake?
                    </label>
                    <div className={styles.checkboxWrapper}>
                      <input
                        type="checkbox"
                        id="needCake"
                        name="needCake"
                        className={styles.checkbox}
                        checked={formData.needCake}
                        onChange={handleChange}
                      />
                      <label htmlFor="needCake" className={styles.checkboxLabel}>
                        Yes, I would like to order a celebration cake
                      </label>
                    </div>
                    
                    {formData.needCake && (
                      <div className={`${styles.cakeMessageWrapper} ${errors.cakeMessage ? styles.errorField : ""}`}>
                        <input
                          type="text"
                          id="cakeMessage"
                          name="cakeMessage"
                          placeholder="Enter text for cake (e.g., 'Happy Birthday John')"
                          className={`${styles.inputField} ${errors.cakeMessage ? styles.errorInput : ""}`}
                          value={formData.cakeMessage}
                          onChange={handleChange}
                        />
                        {errors.cakeMessage && <span className={styles.errorMessage}>{errors.cakeMessage}</span>}
                      </div>
                    )}
                  </div>
                </div>
              )}
              
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
                    min={new Date().toISOString().split("T")[0]}
                    required
                  />
                </div>
                
                <div className={`${styles.inputWrapper} ${errors.timeSlot ? styles.errorField : ""}`}>
                  <label className={styles.label}>
                    Select Time Slot
                    <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.timeSlotContainer}>
                    {timeSlots.map((slot) => (
                      <div
                        key={slot.time}
                        className={`${styles.timeSlot} ${
                          formData.timeSlot === slot.time ? styles.activeTimeSlot : ""
                        } ${!slot.available ? styles.unavailableTimeSlot : ""}`}
                        onClick={() => slot.available && selectTimeSlot(slot.time)}
                      >
                        {slot.label}
                        {slot.available ? (
                          <span className={styles.availabilityIndicator}>Available</span>
                        ) : (
                          <span className={styles.availabilityIndicator}>Booked</span>
                        )}
                      </div>
                    ))}
                  </div>
                  {errors.timeSlot && <span className={styles.errorMessage}>{errors.timeSlot}</span>}
                </div>
              </div>
              
              <div className={styles.inputWrapper}>
                <label className={styles.label} htmlFor="specialRequests">
                  Special Requests <span className={styles.optional}>(optional)</span>
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  placeholder={
                    reservationType === 'table' 
                      ? "Any dietary restrictions, allergies, or special occasions?" 
                      : reservationType === 'private'
                      ? "Any specific setup needs, equipment requirements, or dietary restrictions?"
                      : "Any special arrangements, decorations, or dietary restrictions?"
                  }
                  className={styles.textArea}
                  value={formData.specialRequests}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <div className={styles.policyNote}>
                <p>By making a reservation, you agree to our <a href="/terms-and-conditions" className={styles.policyLink}>Terms & Conditions</a>.</p>
              </div>
              
              <button type="submit" className={styles.button}>
                {formData.loading ? (
                  <span className={styles.loader}></span>
                ) : (
                  <>
                    <span className={styles.buttonText}>
                      {reservationType === 'table' 
                        ? 'Reserve Now' 
                        : reservationType === 'private' 
                        ? 'Book Private Dining' 
                        : 'Schedule Celebration'}
                    </span>
                    <span className={styles.buttonIcon}>→</span>
                  </>
                )}
              </button>
            </form>
          </>
        ) : (
          <div className={`${styles.confirmation} ${animateConfirmation ? styles.showConfirmation : ""}`}>
            <div className={styles.confirmationIcon}>
              {reservationType === 'table' ? '🍽️' : reservationType === 'private' ? '🏢' : '🎉'}
            </div>
            <h2 className={styles.confirmationTitle}>
              {reservationType === 'table' 
                ? 'Reservation Confirmed!' 
                : reservationType === 'private' 
                ? 'Private Dining Booked!' 
                : 'Celebration Scheduled!'}
            </h2>
            <div className={styles.confirmationDetails}>
              <p><strong>Name:</strong> {formData.fullName}</p>
              <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p><strong>Time:</strong> {formData.timeSlot}</p>
              <p><strong>Guests:</strong> {formData.guests}</p>
              
              {/* Private dining specific details */}
              {reservationType === 'private' && (
                <>
                  <p><strong>Company/Group:</strong> {formData.companyName}</p>
                  <p><strong>Event Type:</strong> {formData.eventType}</p>
                </>
              )}
              
              {/* Celebration specific details */}
              {reservationType === 'celebration' && (
                <>
                  <p><strong>Celebration:</strong> {formData.celebrationType}</p>
                  {formData.needCake && (
                    <p><strong>Cake Message:</strong> "{formData.cakeMessage}"</p>
                  )}
                </>
              )}
            </div>
            <p className={styles.confirmationMessage}>
              Thank you for choosing Kaboul Gourmet. A confirmation email has been sent to <strong>{formData.email}</strong>.
            </p>
            <p className={styles.confirmationNote}>
              {reservationType === 'table'
                ? 'We look forward to welcoming you and your guests for an extraordinary dining experience.'
                : reservationType === 'private'
                ? 'Our private dining coordinator will contact you shortly to discuss the details of your event.'
                : 'Our celebration specialist will contact you soon to finalize all the details for your special occasion.'}
            </p>
            <button 
              className={styles.newReservationButton}
              onClick={() => {
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  guests: 1,
                  date: new Date().toISOString().split("T")[0],
                  timeSlot: "",
                  specialRequests: "",
                  companyName: "",
                  eventType: "",
                  celebrationType: "",
                  needCake: false,
                  cakeMessage: "",
                  loading: false,
                  confirmed: false,
                });
                setAnimateConfirmation(false);
                setActiveTimeSlot("");
              }}
            >
              Make Another Reservation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservations;
