import React, { useState } from 'react';

function RangeSlider(props) {
  const [rangeValue, setRangeValue] = useState(0);
  return (
    <div className='range-slider diplayalign'>
      <div className='cog_chat_title'>Budget - {props.range.min}</div>
      <div className='range-wrapper'>
        <div className='minmax-wrapper'>
          <div>{props.range.min}</div>
          <div>{props.range.max}</div>
        </div>
        <input
          type='range'
          min={props.range.min}
          max={props.range.max}
          onChange={(e) => {
            setRangeValue(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          onClick={() => {
            props.rangeOnSubmit(props.range.min);
          }}
          className='btn_trans_block '
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default RangeSlider;
