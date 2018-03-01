import React from 'react';

const ContPrev=(contest)=>(
    <div className="ContPrev">
        <div className="categoryName">
            {contest.categoryName}
        </div>
        <div className="contestName">
            {contest.contestName}
        </div>
    </div>
);

export default ContPrev;