import React from 'react';

const ContPrev=(contest)=>(
    <div className="ContPrev">
        <div>
            {contest.categoryName}
        </div>
        <div>
            {contest.contestName}
        </div>
    </div>
);

export default ContPrev;