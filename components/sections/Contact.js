"use client";

/**
 * Contact Form with Formspree Integration
 *
 * EASY SETUP INSTRUCTIONS:
 * 1. Go to https://formspree.io/ and sign up for a free account
 * 2. Create a new form and copy your form ID (it looks like "xrgpkzld")
 * 3. Replace "YOUR_FORMSPREE_ID" in the action URL below with your form ID
 * 4. That's it! Formspree will send emails to your registered email address
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { fadeIn } from "@/utils/motion";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Formspree form ID - Replace "YOUR_FORMSPREE_ID" with your actual ID
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xldnnzaj";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "Please fill in all required fields.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Using Formspree to send emails (much simpler than EmailJS!)
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Portfolio Contact Form",
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      setSubmitStatus({
        success: true,
        message: "Your message has been sent successfully!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);

      // Clear status message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "rohit9060755@gmail.com",
      link: "mailto:rohit9060755@gmail.com",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+91 7209087597",
      link: "tel:+917209087597",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Chennai, India",
    },
  ];

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className={styles.contactWrapper}>
          <motion.div
            className={styles.contactInfo}
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out to me for any inquiries, collaborations, or
              just to say hello! I&apos;m always open to discussing new projects
              or opportunities.
            </p>

            <div className={styles.infoItems}>
              {contactInfo.map((info, index) => (
                <div className={styles.infoItem} key={index}>
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <div className={styles.infoContent}>
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.content}</a>
                    ) : (
                      <p>{info.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className={styles.contactForm}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              action={FORMSPREE_ENDPOINT}
              method="POST"
            >
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {/* Hidden input for Formspree reply-to functionality */}
                <input type="hidden" name="_replyto" value={formData.email} />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {submitStatus && (
                <div
                  className={`${styles.formMessage} ${
                    submitStatus.success ? styles.success : styles.error
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <motion.button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className={styles.mapWrapper}
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.55224774143!2d80.04151552935477!3d12.990643644417654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d639e244213%3A0x6873d3699e46fab7!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1687027858352!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Chennai, India Map"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

/*
=== HOW TO SET UP FORMSPREE ===

1. Go to https://formspree.io/ and sign up for a free account
2. Click on "New Form" and give it a name (e.g., "Portfolio Contact")
3. You'll get a form endpoint like: https://formspree.io/f/xrgpkzld
4. Copy the ID (the part after "/f/") and replace "YOUR_FORMSPREE_ID" with it in the FORMSPREE_ENDPOINT variable
5. Formspree's free plan gives you 50 submissions per month
6. All emails will be sent to the email address you registered with Formspree
7. No JavaScript configuration needed - it's much simpler than EmailJS!
*/
