import React from 'react';

function Sort(props) {
    // const [sortBy, setsortby] = useState('')
    // const [sortValue, setsortValue] = useState('')
    const haha = (name, value) => {
        // setsortby(name)
        // setsortValue(value)
        props.sorting(name, value)
    }
    return (
        <div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Action
  </button>
                    <div className="dropdown-menu">
                        <div> <button  className="sort_selected" onClick={() => haha('name', 1)}>Tên A->Z</button></div>
                        <div> <button  className="sort_selected" onClick={() => haha('name', -1)}>Tên Z->A</button></div>
                        <div> <button  className="sort_selected" onClick={() => haha('stt', 1)}>Kích hoạt </button></div>
                        <div> <button  className="sort_selected" onClick={() => haha('stt', -1)}>Ẩn</button></div>
                    </div>
                </div>
                {/* <select name="" id="input" className="form-control">
                    <option value="">Sắp xếp</option>
                    <option value="0">A-Z</option>
                    <option value="1">Z-A</option>
                </select> */}
            </div>
        </div>
    );
}
export default Sort;