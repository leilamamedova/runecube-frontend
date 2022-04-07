import React from "react";
import useStore from "../../../../services/store";
import './index.scss';

const TotalGameCount = () => {
  const totalCount = useStore(({totalCount})=>totalCount);

   return (
     <p className="total-count">{totalCount}/3</p>
   )
}

export default TotalGameCount;