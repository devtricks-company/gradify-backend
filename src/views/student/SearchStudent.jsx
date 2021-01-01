import React, { useContext,useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai';
import StudentContext from '../../context/student/studentContext';

const SearchStudent = () => {
    const studentContext = useContext(StudentContext);
    const {searchStudent} = studentContext;

    const [search,setSearch] = useState('');
    const searchHandler = (e) => {
        setSearch(e.target.value);
        searchStudent(e.target.value);
    }


    return (
       <>
        <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search Student"
                  className="search_input"
                  value={search}
                  onChange={searchHandler}
                />
                <AiOutlineSearch style={{position:"relative",left:"-30px",top:"3px"}} />
       </>
    )
}

export default SearchStudent
