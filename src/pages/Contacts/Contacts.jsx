import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './Contacts.module.css';
import ContactForm from '../../components/ContactForm/ContactForm.jsx';
import ContactList from '../../components/ContactList/ContactList.jsx';
import SearchBox from '../../components/SearchBox/SearchBox.jsx';
import { fetchContacts } from '../../redux/contacts/operations.js';
import { selectError, selectLoading } from '../../redux/contacts/selectors.js';

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.div}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <p className={css.error}>Something went wrong. Please reload the page!</p>}
      <Suspense fallback={<div>Loading...</div>}>
        {loading ? <p>Loading...</p> : <ContactList />}
      </Suspense>
    </div>
  );
}
