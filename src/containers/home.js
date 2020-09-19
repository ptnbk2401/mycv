import React from 'react';
import * as PropTypes from "prop-types";

HomeList.propTypes = {
    listData: PropTypes.array
};

HomeList.defaultProps = {
    listData: []
};

function HomeList(props) {
    const {listData} = props;
    return (
      <ul>
          {listData.map((item, index) => (
              <li key={index}>{item.name}</li>
          ))}
      </ul>
    );
}

export default HomeList