import { useDispatch, useSelector } from 'react-redux';

import css from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations.js';
import { selectUser } from '../../redux/auth/selectors.js';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.btn} type='button' onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
