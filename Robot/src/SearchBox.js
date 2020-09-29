import React from 'react';
import 'tachyons';



function SearchBox({searchChange}) {

  
    return (
        <div  className='pa3 ba b--green bg-lightest-blue tc'>
            <input type='search' placeholder='searchbox' onChange={searchChange}></input>
        </div>
    );
}

export default SearchBox;
