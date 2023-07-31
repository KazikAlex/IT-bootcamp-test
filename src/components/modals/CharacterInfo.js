const CharacterInfo = ({selectedItem, showModal, modalVisible}) => {

    return ( 
        <>
            {modalVisible &&         
                <div className="modal" onClick={() => showModal(false)} >
                    <div className="modal_inner">
                        <img className="modal_inner_img" src={selectedItem[0].image} alt="character" />
                        <div className="modal_inner_info">
                            <div className="modal_inner_info_wrapper">

                                <div className="modal_inner_info_wrapper_item">
                                    <div className="modal_inner_info_wrapper_item_title">
                                        Name:
                                    </div>
                                    <div className="modal_inner_info_wrapper_item_descr">
                                        {selectedItem[0].name}
                                    </div>
                                </div>

                                <div className="modal_inner_info_wrapper_item">
                                    <div className="modal_inner_info_wrapper_item_title">
                                        Origin:
                                    </div>
                                    <div className="modal_inner_info_wrapper_item_descr">
                                        {selectedItem[0].origin.name}
                                    </div>
                                </div>

                                <div className="modal_inner_info_wrapper_item">
                                    <div className="modal_inner_info_wrapper_item_title">
                                        Status:
                                    </div>
                                    <div className="modal_inner_info_wrapper_item_descr">
                                        {selectedItem[0].status}
                                    </div>
                                </div>

                                <div className="modal_inner_info_wrapper_item">
                                    <div className="modal_inner_info_wrapper_item_title">
                                        Location:
                                    </div>
                                    <div className="modal_inner_info_wrapper_item_descr">
                                        {selectedItem[0].location.name}
                                    </div>
                                </div>

                                <div className="modal_inner_info_wrapper_item">
                                    <div className="modal_inner_info_wrapper_item_title">
                                        Species:
                                    </div>
                                    <div className="modal_inner_info_wrapper_item_descr">
                                        {selectedItem[0].species}
                                    </div>
                                </div>

                                <div className="modal_inner_info_wrapper_item">
                                    <div className="modal_inner_info_wrapper_item_title">
                                        Gender:
                                    </div>
                                    <div className="modal_inner_info_wrapper_item_descr">
                                        {selectedItem[0].gender}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
     )
}
 
export default CharacterInfo;