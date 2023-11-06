import { useState, useEffect } from 'react';
import './left_side.css';
import Modal from './Modal';



const LeftSide = ({ setShow, setInd }) => {

    const [groupData, setGroupData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const data = JSON.parse(localStorage.getItem('data'));

    useEffect(() => {
        setGroupData(data);
    }, []);


    const makeShort = (item) => {
        if (item.length === 1) {
            return item.toUpperCase();
        }
        else {
            return item.slice(0, 2).toUpperCase();
        }
    }


    const handleFunction = (ind) => {
        setShow(false);
        setInd(ind);

        const groups = document.getElementsByClassName('groups');

        for (let i = 0; i < groups.length; i++) {
            groups[i].style.backgroundColor = 'white';
        }

        groups[ind].style.backgroundColor = '#F7ECDC';
        return;
    }


    return (
        <div className="left_side">
            <p className="heading">Pocket Notes</p>
            <div className="create_button" onClick={() => setShowModal(true)}>
                <span>+</span>
                <p>Create Notes Group</p>
            </div>
            <div>
                {
                    groupData?.map((item, ind) => (
                        <div style={{ display: 'flex', marginBottom: '10px', marginLeft: '37px', alignItems: 'center', cursor: 'pointer', width: '90.5%', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }} key={ind} className='groups' onClick={() => handleFunction(ind)}>
                            <div style={{ width: '55px', height: '55px', borderRadius: '50%', backgroundColor: `${item.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '22px', marginLeft: '50px', color: 'white', fontSize: '18px', letterSpacing: '1px' }}>
                                {makeShort(item.groupName)}
                            </div>
                            <div style={{ fontSize: '20px' }}>
                                {item.groupName}
                            </div>
                        </div>
                    ))
                }
            </div>
            {
                showModal ? (
                    <Modal setShowModal={setShowModal} setGroupData={setGroupData} />
                ) : <></>
            }
        </div>
    );
}


export default LeftSide;