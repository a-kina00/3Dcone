import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { shallowEqual } from 'react-redux';
import windowStyles from './window.module.css'
import { setValue } from '../../services/actions/values';

function Window() {
    const dispatch = useDispatch();
    const valList = useSelector((state) => (state.values), shallowEqual);

    const [height, setHeight] = React.useState(valList.height);
    const [radius, setRadius] = React.useState(valList.radius);
    const [segments, setSegments] = React.useState(valList.segments);
    const [isChecked, setIsChecked] = React.useState(valList.smooth);

    function changeParams(type, event) {

        switch (type) {
            case 'height':
                {
                    dispatch(setValue({ category: 'height', value: event.target.value }))
                    setHeight(event.target.value)
                    return;
                }

            case 'radius':
                {
                    dispatch(setValue({ category: 'radius', value: event.target.value }))
                    setRadius(event.target.value)
                    return;
                }

            case 'segments':
                {
                    dispatch(setValue({ category: 'segments', value: event.target.value }))
                    setSegments(event.target.value)
                    return;
                }

            case 'smooth':
                {
                    dispatch(setValue({ category: 'smooth', value: !isChecked }))
                    setIsChecked(!isChecked)
                    return;
                }

            default: return;
        }
    }

    return (
        <div className={windowStyles.box}>
            <h1 className={windowStyles.text + ' ' + windowStyles.header_text}>Controls</h1>
            <form className={windowStyles.form}>
                <label className={windowStyles.text}>Cone height</label>
                <input className={windowStyles.input} type='number'
                    value={height} onChange={event => changeParams('height', event)} />

                <label className={windowStyles.text}>Radius</label>
                <input className={windowStyles.input} type='number'
                    value={radius} onChange={event => changeParams('radius', event)} />

                <label className={windowStyles.text}>Number of segments</label>
                <input className={windowStyles.input} type='number'
                    value={segments} onChange={event => changeParams('segments', event)} />

                <div className={windowStyles.check}>
                    <input className={windowStyles.checkbox} type='checkbox'
                        checked={isChecked} onChange={() => changeParams('smooth')} />
                    <label className={windowStyles.text}>Smooth</label>
                </div>
            </form>
        </div>
    );
}

export default Window;