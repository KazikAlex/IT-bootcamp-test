import scroll from '../assets/ScrollUp.png'

const CharactersList = ({characters, selectItem, scrollUpVisible, scrollBtn }) => {

    return ( 
        <div className="characters-list"> 
            <img className="scrollUp" src={scroll} alt="scrollUp"  style={scrollUpVisible ? {"display": "block"} : {"display": "none"} } onClick={() => scrollBtn()}   />
            {characters.map(item => 
                <div className="characters-list_item" key={item.id} onClick={() => selectItem(item.id)}>
                    <div className="characters-list_item_wrapper">
                        <img className="characters-list_item_wrapper_img" src={item.image} alt="charcter" />
                        <div className="characters-list_item_wrapper_name">
                            {item.name}
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
}
 
export default CharactersList;