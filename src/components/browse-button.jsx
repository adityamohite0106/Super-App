import React from 'react'
import { useNavigate } from "react-router-dom";
import '../components/browse-button.css'
function BrowseBtn() {
    const navigate = useNavigate();

    const handleBrowse = () => {
        navigate("/recommendation");
    };
  return (
    <div>
       <div className="wrapper-browse">
                <button   onClick={handleBrowse}
                 className="browse">Browse</button>
            </div>
    </div>
  )
}

export default BrowseBtn

 

