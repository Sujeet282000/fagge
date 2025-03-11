import { useState } from "react";
import styles from "./ContactForm.module.css";
// import { FaEnvelope, FaPhone } from "react-icons/fa";
import contactbg from "../../Assests/Images/contantimage.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define email parameters
    const email = "recipient@example.com"; // Change this to your desired email
    const subject = encodeURIComponent("Inquiry from Website");
    const body = encodeURIComponent(
      "Hello, I would like to get in touch regarding..."
    );

    // Construct mailto link
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    // Redirect to email client
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.heading}>
        Let's talk on something great together
        </h2>
        
      </div>

      <div className={styles.card}>
        {/* Left Panel - Contact Details */}
        <div className={styles.leftPanel}>
          <div className={styles.imageLeft}>
            <img src={contactbg} alt="" />
          </div>

          <div className={styles.leftSectionPart2}>
            <div className={styles.contactItem}>
              <span className={styles.emailIcon}>
                <i className="fa fa-envelope" style={{ color: "#5B21FF" }}></i>
              </span>
              <a
                title="email"
                href="mailto:sales@hyproc-intl.com"
                className={styles.emailIcon}
              >
                sales@hyproc-intl.com
              </a>
            </div>

            <div className={styles.contactItem}>
              {/* <FaPhone className={styles.icon} /> */}
              <i class="fa fa-phone" style={{ color: "#5B21FF" }}></i>

              <span>+44 (0) 1895230686</span>
            </div>
            <div className={styles.contactItem}>
              {/* <FaPhone className={styles.icon} /> */}
              <i class="fa fa-map-marker" style={{ color: "#5B21FF" }}></i>

              <span>
                Hyproc International Limited Eagle Court 9 Vine Road Uxbridge
                UB8 1QE
              </span>
            </div>

            {/* Social Media Links */}
            <div className={styles.socialMedia}>
              {/* <a href="#" className={styles.socialIcon}><FaFacebook /></a>
            <a href="#" className={styles.socialIcon}><FaTwitter /></a>
            <a href="#" className={styles.socialIcon}><FaLinkedin /></a>
            <a href="#" className={styles.socialIcon}><FaInstagram /></a> */}
            </div>
          </div>
        </div>

        {/* Right Panel - Contact Form */}
        <div className={styles.rightPanel}>
          <h2 className={styles.formTitle}>We'd love to hear from you!</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className={styles.input}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  className={styles.input}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={styles.input}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className={styles.input}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                className={styles.input}
                onChange={handleChange}
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea
                name="message"
                id="message"
                className={styles.textarea}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
