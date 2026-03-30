import React from 'react';
import Card from '../Card/Card';

const AIdataCard = ({ AIdatas, setPurchesType , purchesType}) => {
    // console.log(AIdatas);
    return (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

            {
                    AIdatas.map((data, ind) => <Card setPurchesType={setPurchesType} purchesType={purchesType} data={data} key={ind}></Card>)     
            }
                
            </div>
        </div>
    );
};

export default AIdataCard;