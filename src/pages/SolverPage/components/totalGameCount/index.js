import React from "react";
import useStore from "../../../../services/store";
import './index.scss';

const TotalGameCount = () => {
  const totalCount = useStore(({totalCount})=>totalCount);
  const gameData = useStore(({gameData})=>gameData);


  console.log(totalCount);

   return (
     <p className="total-count">{totalCount}/{gameData.eachSideCount}</p>
   )
}

export default TotalGameCount;