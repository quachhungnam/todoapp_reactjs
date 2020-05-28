import React from 'react';
import Sort from './Sort'
import Search from './Search';

function Control(props) {
    return (
        <div>
            <Search
                searching={props.searching}
            />
            <Sort
                sorting={props.sorting} />
        </div>
    );
}

export default Control;
