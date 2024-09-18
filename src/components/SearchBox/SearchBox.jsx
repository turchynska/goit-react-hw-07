import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice'
import css from './SearchBox.module.css'


const SearchBox = () => {
    const filterValue = useSelector(state => state.filters.filter);
    
}
