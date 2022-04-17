import React from 'react'
import PropTypes from 'prop-types'
import Star from './Star' 
import {nanoid} from 'nanoid'

function Stars(props) {
    const {count} = props;
    let arr = [];
       for(let i = count; i>0; i-- ){
           arr.push(<Star key={nanoid()} />);
       }
       console.log(arr);
  return (
     <ul className="card-body-stars u-clearfix">{(count>0) && (count<6) && arr.map(el => el)}</ul>
  )
}

Stars.propTypes = {
    count: PropTypes.number.isRequired,
}

export default Stars
