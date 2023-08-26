import React, { useState, useRef } from 'react'
import '../App.css'
import { Button, Modal } from 'antd';
import { useDraggable } from "react-use-draggable-scroll";
import GiftCard from './GiftCard';
import GiftData from './../Config/Json/Gift.json'
import CustomForm from './CustomForm';

function HomePage() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showGifts, setshowGifts] = useState(false)
    const ref = useRef(); 
    const { events } = useDraggable(ref);

    const showModal = () => {
        setIsModalOpen(true);
        setshowGifts(false)
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <header>
                <div>
                    <h1>AI Curated Gift Ideas</h1>
                    <p>Find the perfect gift for your loved ones</p>
                    
                    <Button type="primary" onClick={showModal}>
                        Get Gift Suggestions
                    </Button>
                    <div className='modal-parent'>
                        <Modal title={<h3 style={{ color: "#fff" }}>Gift Suggestion</h3>} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} width={800}>
                            <CustomForm setshowGifts={setshowGifts} handleOk={handleOk} />
                        </Modal>
                    </div>
                </div>


            </header>
            <div class="container">
                <div class="recommendation" {...events} ref={ref}>


                    {
                        showGifts &&
                        GiftData.gifts.map(e => {
                            return (
                                <div className='cardsParent'>
                                    <GiftCard gift={e} />
                                </div>)


                        })
                    }


                </div>
            </div>


        </div>
    )
}

export default HomePage