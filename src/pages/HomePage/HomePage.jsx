import css from './HomePage.module.css';
import postImg from '../../../public/phone.jpg';

export default function HomePage() {
  return (
    <div className={css.container}>
      <h1>Welcome to the contact book!</h1>
      <img src={postImg} alt='phone' width='300' height='300' />
    </div>
  );
}
