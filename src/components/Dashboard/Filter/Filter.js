import React from "react";

const Filter = props => {
    return(
       <div className="flex mr5 ml5 pa3 justify-between items-center bg-white ba b--black-10">
           <div className="flex flex-column b2">
                <h3 className="mt0">Shipments</h3>
                <input
                type="text"
                placeholder="Search for Sipment"
                value={props.filter}
                onChange={props.handleChange}
                />
            </div>
            <div className="flex items-center content-end justify-end ">
                <span className="mr2">View: </span>
                <button className="mr2 btn__icon"><img className="btn__icon--img" src="https://img.icons8.com/ios/50/000000/activity-grid.png" alt="Grid View Icon"/><span>Gird</span></button>
                <button className="btn__icon"><img className="btn__icon--img" src="https://img.icons8.com/ios/50/000000/list.png" alt="Grid List Icon" /><span>List</span></button>
                <span className="ml3 mr2 pl3 bl b--black-10">Sort By: </span>
                <select>
                    <option>Date</option>
                    <option>Status</option>
                    <option>Transportation Mode</option>
                    <option>A-Z Client</option>
                    <option>Z-A Client</option>
                </select>
            </div>
      </div> 
        )
    }
export default Filter;
