import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import Loader from './components/Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {selectContacts, selectVisibleContacts} from './redux/selectors'
import './App.css'
import { fetchContact } from './redux/contactsOps'

function App() {
const contacts = useSelector(selectVisibleContacts)
const {loading, error} = useSelector(selectContacts);
const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchContact())
}, [dispatch])

  return(
    <div>
        <h1 className='title'>Phonebook</h1>
        <ContactForm/>
        <SearchBox/>
        {loading && <Loader/>}
        {error && <p>Can`t load more contact.Please try again</p>}
        {!loading && !error && <ContactList contacts={contacts}/>}
    </div>
  )
}

export default App
