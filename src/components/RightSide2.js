import React, { useEffect, useState } from 'react'
import './right_side2.css';
import arrow from '../assets/arrow.png';

const RightSide2 = ({ ind }) => {

    const [textareaValue, setTextareaValue] = useState('');
    const [data, setData] = useState([]);

    const arr = JSON.parse(localStorage.getItem('data'));

    useEffect(() => {
        setData(arr);
    }, []);


    const item = arr[ind];
    const grpName = item.groupName;
    const bgColor = item.color;

    const makeShort = () => {
        if (grpName.length === 1) {
            return grpName.toUpperCase();
        }
        else {
            return grpName.slice(0, 2).toUpperCase();
        }
    }

    const shortName = makeShort();

    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    const handleNotes = () => {

        if (textareaValue.trim().length === 0) {
            setTextareaValue('');
            return;
        }

        const date = new Date();

        const mainDate = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        let hours = date.getHours();
        let minutes = date.getMinutes();


        // code for AM and PM

        let ampm;
        if (hours < 12) {
            ampm = 'AM';
        }
        else {
            ampm = 'PM';
        }

        // convert hours into range of 1 to 12

        if (hours === 0) {
            hours = 12;
        }
        else if (hours > 12) {
            hours = hours % 12;
        }

        // code for adding zero if hours and minutes is less than 10

        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        const time = `${hours}:${minutes} ${ampm}`;
        const styledDate = `${mainDate} ${monthList[month]} ${year}`;

        const obj = {
            time, styledDate, detail: textareaValue
        }


        if (!arr[ind].notes) {
            arr[ind].notes = [];
        }

        arr[ind].notes.push(obj);

        localStorage.setItem('data', JSON.stringify(arr));

        setData(arr);

        setTextareaValue('');

        return;
    }

    const handleKey = (e) => {

        if (e.key === 'Enter') {
            e.preventDefault();
            handleNotes();
        }

        return;
    }


    return (
        <div className='right2'>
            <div className='first-div'>
                <div style={{ width: "50px", height: "50px", backgroundColor: bgColor, borderRadius: "50%", display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '20px', color: 'white', fontSize: '18px', letterSpacing: '1px' }}>
                    {shortName}
                </div>
                <p style={{ marginLeft: '30px', fontSize: '25px' }}>{grpName}</p>
            </div>
            <div className='second-div'>
                {
                    data[ind]?.notes?.map((currVal, index) => (
                        <div key={index} style={{ display: 'flex', marginBottom: '45px', width: '100%' }}>
                            <div style={{ marginRight: '20px', width: '15%' }}>
                                <p style={{ marginBottom: '5px' }}>
                                    {
                                        currVal.time
                                    }
                                </p>
                                <p>
                                    {
                                        currVal.styledDate
                                    }
                                </p>
                            </div>
                            <div style={{ width: '82%' }}>
                                {
                                    currVal.detail
                                }
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='third-div'>
                <textarea placeholder='Enter your text here..................' style={{ width: '93%', minHeight: '200px', fontSize: '25px', margin: '20px', padding: '10px 10px 10px 20px', borderRadius: '10px', outline: 'none' }} onChange={(e) => setTextareaValue(e.target.value)} value={textareaValue} onKeyDown={(e) => handleKey(e)}>
                </textarea>
                <img src={arrow} alt='arrow image' style={{ width: '25px', height: '20px', position: 'relative', right: '60px', bottom: '35px', cursor: 'pointer' }} onClick={() => handleNotes()} />
            </div>
        </div>
    )
}

export default RightSide2