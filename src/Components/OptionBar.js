import {useState} from "react";

const OptionBar = (props)=> {
    const {generateUrlParams} = props;

    const [limit, setLimit] = useState(0);
    const [page, setPage] = useState(1);
    console.log("page", page);
    const [sortBy, setSortBy] = useState("");
    console.log("sort by",sortBy);
    const [order, setOrder] = useState("");
    return (
        <div>
            <label htmlFor="">Limit:</label>
            <input type="number" onChange={(e)=> setLimit(parseInt(e.target.value))}/>
            <label htmlFor="">Page:</label>
            <input type="number" onChange={(e)=>setPage(parseInt(e.target.value))}/>
            <label htmlFor="">Sort By:</label>
            <select name="sortBy" id="" onChange={(e)=>setSortBy(e.target.value)}>
                <option value=""></option>
                <option value="id">id</option>
                <option value="title">title</option>
                <option value="createdAt">createdAt</option>
            </select>
            <label htmlFor="">Order:</label>
            <select name="order" id="" onChange={(e)=>setOrder(e.target.value)}>
                <option value=""></option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
            <button onClick={()=>generateUrlParams(limit, page, sortBy, order)}>Submit</button>
        </div>
    )
}

export default OptionBar;