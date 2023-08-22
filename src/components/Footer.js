import { pageLinks, socialLinks } from "../data";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass='footer-links' itemClass='footer-link'/>
      {/* <ul className="footer-links">
        {pageLinks.map((link)=>{
          const {id, href, text} = link
          return (
            <a href={href} className='footer-link'>
              {text}
            </a>
          );
        })}
        <li>
          <a href="#home" className="footer-link">home</a>
        </li>
        <li>
          <a href="#about" className="footer-link">about</a>
        </li>
        <li>
          <a href="#services" className="footer-link">services</a>
        </li>
        <li>
          <a href="#featured" className="footer-link">featured</a>
        </li>
      </ul> */}
      <ul className="footer-icons">
        {socialLinks.map((link)=> {
          const {id, href, icon} = link
          return (
            <li key={id}>
              <a 
                href={href}
                target="_blank" 
                className="footer-icon"
                rel='noreferrer'
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}

      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer
