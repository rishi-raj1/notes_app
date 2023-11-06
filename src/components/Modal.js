import React, { useState } from 'react'

const Modal = ({ setShowModal, setGroupData }) => {


    const [groupName, setGroupName] = useState('');
    let color = 'gold';

    const data = JSON.parse(localStorage.getItem('data'));


    const createGroup = () => {

        if (groupName.trim().length == 0) {
            setShowModal(false);
            return;
        }

        data.push({ groupName, color });
        setGroupData(data);
        localStorage.setItem('data', JSON.stringify(data));

        setShowModal(false);
    }


    const setColor = (e) => {
        color = e.target.getAttribute('data-value');
    }


    return (

        <div style={{ width: '450px', height: '200px', backgroundColor: 'white', position: 'absolute', top: '200px', left: '600px', borderRadius: '10px' }} >
            <p style={{ marginTop: '20px', marginLeft: '20px', fontSize: '20px' }}>Create New Notes group</p>

            <div style={{ display: 'flex', marginTop: '18px', marginLeft: '28px', fontSize: '18px' }}>
                <p style={{ marginRight: '20px', marginTop: '9px' }}>Group Name</p>

                <input placeholder='Enter your group name....' onChange={(e) => setGroupName(e.target.value)} value={groupName} style={{ borderRadius: '18px', border: '1px solid gray', outline: 'none', width: '270px', height: '40px', fontSize: '17px', padding: '5px 13px' }} />
            </div>

            <div style={{ display: 'flex', marginLeft: '28px', marginTop: '20px' }}>
                <p style={{ marginRight: '20px', fontSize: '18px' }}>Choose colour</p>

                <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#B38BFA', marginRight: '10px', cursor: 'pointer' }} data-value='#B38BFA' onClick={(e) => setColor(e)}></div>
                <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#FF79F2', marginRight: '10px', cursor: 'pointer' }} data-value='#FF79F2' onClick={(e) => setColor(e)}></div>
                <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#43E6FC', marginRight: '10px', cursor: 'pointer' }} data-value='#43E6FC' onClick={(e) => setColor(e)}></div>
                <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#F19576', marginRight: '10px', cursor: 'pointer' }} data-value='#F19576' onClick={(e) => setColor(e)}></div>
                <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#0047FF', marginRight: '10px', cursor: 'pointer' }} data-value='#0047FF' onClick={(e) => setColor(e)}></div>
                <div style={{ width: '25px', height: '25px', borderRadius: '50%', backgroundColor: '#6691FF', marginRight: '10px', cursor: 'pointer' }} data-value='#6691FF' onClick={(e) => setColor(e)}></div>
            </div>

            <div
                style={{ width: '90px', height: '24px', backgroundColor: 'black', color: 'white', marginTop: '22px', position: 'absolute', right: '13px', borderRadius: '5px', textAlign: 'center', cursor: 'pointer' }}
                onClick={() => createGroup()}>
                Create
            </div>
        </div >


    )

}

export default Modal;