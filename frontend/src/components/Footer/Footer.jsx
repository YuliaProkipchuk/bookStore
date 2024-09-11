import classes from './Footer.module.css';
export default function Footer() {
  return (
    <footer>
      <div className={classes["footer-section"]}>
        <div className={classes["footer-info"]}>
          <h4 className={classes["footer-heading"]}>
            <a href="/src/app/app.component.html">
              <i className="bi bi-book-half"></i> BOOKHOME
            </a>
          </h4>
          <ul className={classes["footer-links"]}>
            <li className={classes["footer-links-item"]}>
              <a href="#" className={classes["footer-link"]}>
                Contact
              </a>
            </li>
            <li className={classes["footer-links-item"]}>
              <a href="#" className={classes["footer-link"]}>
                Find Us
              </a>
            </li>
            <li className={classes["footer-links-item"]}>
              <a href="#" className={classes["footer-link"]}>
                Store Policy
              </a>
            </li>
            <li className={classes["footer-links-item"]}>
              <a href="#" className={classes["footer-link"]}>
                FAQ
              </a>
            </li>
            <li className={classes["footer-links-item"]}>
              <a href="#" className={classes["footer-link"]}>
                Payment Methods
              </a>
            </li>
          </ul>
        </div>
        <div className={classes["section-comunicate"]}>
          <h4 className={classes["comunicate-header"]}>
            Sign up for our newsletter
          </h4>
          <input
            type="email"
            placeholder="Write your email here!"
            className={classes["comunicate-input"]}
          />
          <button className={classes["comunicate-btn"]}>Subscribe</button>
          <h4 className={classes["comunicate-header"]}>Our Socials:</h4>
          <a
            href="https://www.instagram.com/yulyaska__/"
            className={classes["comunicate-links"]}
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a href="youtube.com" className={classes["comunicate-links"]}>
            <i className="bi bi-youtube"></i>
          </a>
          <a href="facebook.com" className={classes["comunicate-links"]}>
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://web.telegram.org/k/"
            className={classes["comunicate-links"]}
          >
            <i className="bi bi-telegram"></i>
          </a>
        </div>
      </div>
      <p className={classes["copyright"]}>@2024 Yuliia Prokipchuk</p>
    </footer>
  );
}
