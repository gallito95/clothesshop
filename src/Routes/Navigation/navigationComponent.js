import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './navigationStyles.scss';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'


const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logoContainer' to="/">
        <CrwnLogo className='logo'/>
        </Link>   
        <div className='navLinksContainer'>
          <Link className='navLink' to="/shop">
            Shop
          </Link>
          <Link className='navLink' to="/sign-in">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;