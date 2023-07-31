import leftArrow from "../assets/leftArrow.png"
import rightArrow from "../assets/rightArrow.png"

const Pagination = ({pagination, switchBtn, currentPage, setCurrentPage, totalPages}) => {

    return ( 
        <div className="pagination">
            <div className={pagination ? "pagination_switch-btn switch-on" : "pagination_switch-btn"} onClick={() => switchBtn(!pagination)}></div>
            {pagination ? 
                    <div className="pagination_item">
                        {currentPage > 1 ? 
                            <img className="pagination_item_arrow" src={leftArrow} alt="leftArrow" onClick={() => { setCurrentPage(currentPage-1)}}  />
                        : null
                        }
                        <div className="pagination_item_current-page">{currentPage}</div>
                        {currentPage < totalPages ?
                            <img className="pagination_item_arrow" src={rightArrow} alt="rightArrow" onClick={() =>  setCurrentPage(currentPage+1)} />
                            : null
                        }

                    </div>
                : null
            }
        </div>
     )
}
 
export default Pagination;
    


