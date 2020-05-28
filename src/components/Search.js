import React, { useState } from 'react';



function Search(props) {
    const [keywordSearch, setkeywordSearch] = useState('')
    const handlerEvent = (event) => {
        let val = event.target.value
        setkeywordSearch(val)
        // console.log(keywordSearch)
    }
    const searching = () => {
        props.searching(keywordSearch)
        // console.log(keywordSearch)
    }
    return (
        <div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                <div className="input-group">
                    <input
                        onChange={handlerEvent}
                        type="text"
                        name="txtSearch"
                        id="input"
                        className="form-control"
                        pattern=""
                        placeholder="Nhập từ khóa" />
                    <span className="input-group-btn">
                        <button
                            type="button"
                            className="btn btn-default"
                            onClick={searching}
                        >Tìm</button>
                    </span>
                </div>
            </div>
        </div>

    );
}
export default Search;