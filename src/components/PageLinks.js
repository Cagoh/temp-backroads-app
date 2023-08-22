import logo from '../images/logo.svg';
import { socialLinks } from '../data';
import { pageLinks } from '../data';


const PageLinks = ({parentClass, itemClass}) => {
    return (
        <ul className={parentClass} id={itemClass}>
        {pageLinks.map((link)=>{
          return (
            <li key={link.id}>
              <a href={link.href} className="nav-link">
                {link.text}
              </a>
            </li>
          )
        })}
        

        
      </ul>
    );
}
export default PageLinks