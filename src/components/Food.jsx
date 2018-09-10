import React from 'react';
import PropTypes from 'prop-types';


function Food(props){

  return(
    <div>
      <h3>Month: {props.month}</h3>


      {props.selection.map((availableProduce, index) =>
        <li key={index}>
          {availableProduce}
        </li>

      )}


    </div>

  );
}

Food.propTypes={

  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired,
};


export default Food;
