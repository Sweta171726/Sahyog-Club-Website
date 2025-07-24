import React, { useState } from 'react';

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6', // gray-100
    padding: '1.5rem',
  },
  wrapper: {
    width: '100%',
    maxWidth: '64rem', // 4xl ~ 1024px
  },
  header: {
    fontSize: '2.5rem', // text-4xl
    fontWeight: '700',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  headerSpan1: {
    color: '#607B96',
  },
  headerSpan2: {
    color: '#000000',
  },
  subtext: {
    fontSize: '1rem',
    color: '#4B5563', // gray-700
    marginBottom: '2rem',
    maxWidth: '40rem', // max-w-2xl ~ 672px
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    lineHeight: '1.5',
  },
  form: {
    backgroundColor: '#ffffff',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  row: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    justifyContent: 'center',
  },
  rowMd: {
    flexDirection: 'row',
  },
  halfWidth: {
    flex: '1',
  },
  label: {
    display: 'block',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  input: {
    width: '100%',
    border: '1px solid #9CA3AF', // gray-400
    padding: '0.5rem',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    border: '1px solid #9CA3AF',
    padding: '0.5rem',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    boxSizing: 'border-box',
    resize: 'vertical',
  },
  buttonContainer: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#391E5A',
    color: '#ffffff',
    padding: '0.5rem 1.5rem',
    borderRadius: '0.375rem',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#4B1E7F',
  },
  successMsg: {
    color: '#16A34A', // green-600
    fontWeight: '500',
    marginTop: '0.5rem',
    textAlign: 'center',
  },
  errorMsg: {
    color: '#DC2626', // red-600
    fontWeight: '500',
    marginTop: '0.5rem',
    textAlign: 'center',
  },
};

const ContactUs = () => {
  const [status, setStatus] = useState('');
  const [buttonHover, setButtonHover] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch('https://formspree.io/f/xrbqvvkp', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      setStatus('SUCCESS');
      form.reset();
    } else {
      setStatus('ERROR');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <h1 style={styles.header}>
          <span style={styles.headerSpan1}>Contact </span>
          <span style={styles.headerSpan2}>Us</span>
        </h1>

        {/* Subtext */}
        <p style={styles.subtext}>
  Whether you want to share your ideas, ask questions, or simply connect, the Sahyog Club team is here to support you. <br />
  Have feedback or want to get involved? We’d love to hear from you!
</p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Row: Name + Email */}
          <div
            style={{
              ...styles.row,
              ...(window.innerWidth >= 768 ? styles.rowMd : {}),
            }}
          >
            <div style={styles.halfWidth}>
              <label style={styles.label} htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                style={styles.input}
              />
            </div>

            <div style={styles.halfWidth}>
              <label style={styles.label} htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
                style={styles.input}
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label style={styles.label} htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Message"
              required
              style={styles.textarea}
            />
          </div>

          {/* Submit Button */}
          <div style={styles.buttonContainer}>
            <button
              type="submit"
              style={{
                ...styles.button,
                ...(buttonHover ? styles.buttonHover : {}),
              }}
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
            >
              Send Message
            </button>
          </div>

          {/* Status Messages */}
          {status === 'SUCCESS' && (
            <p style={styles.successMsg}>Thanks! Your message has been sent.</p>
          )}
          {status === 'ERROR' && (
            <p style={styles.errorMsg}>Oops! There was a problem.</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactUs;




