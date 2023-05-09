import { Link } from 'react-router-dom';
import './landing.css'

export default function Landing() {

  return (
    <div className='backGr'>
    <div className="MyImage">
        <img className="theImage" src="" alt="" />
        <Link to="/videogames">
          <button className="myButton">Start</button>
        </Link>
    </div>
    </div>
  );
}