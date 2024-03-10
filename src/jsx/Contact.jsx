import React from 'react';

function Contact() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '3.5vw' }}>Contact Me</h1>

      <address style={{ fontSize: '2vw' }}>
        <p>
          Feel free to reach out to me through the following contact details:
        </p>

        <p>Email: <a href='mailto:kunaalgupta@hotmail.com'>kunaalgupta@hotmail.com</a></p>
        <p>LinkedIn: <a href='https://www.linkedin.com/in/kunaalgupta/' target='_blank' rel='noopener noreferrer'>Kunaal Gupta</a></p>
        <p>Twitter: <a href='https://twitter.com/KunaalGupta_' target='_blank' rel='noopener noreferrer'>@KunaalGupta_</a></p>
        {/* Add any other contact details you'd like */}
      </address>
    </div>
  );
}

export default Contact;
