import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import css from './Navigation.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors.js';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.header}>
      <nav>
        <NavLink className={buildLinkClass} to='/'>
          Home
        </NavLink>

        {isLoggedIn && (
          <NavLink className={buildLinkClass} to='/contacts'>
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
}
