import React from 'react';
import Card from '../Card/Card';

const AIdataCard = ({ AIdatas, setPurchesType, purchesType, setCount , count , setPrice , price}) => {
    // console.log(AIdatas);
    return (
        <div>
            <div className=" mx-auto w-[80%]    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

            {
                    AIdatas.map((data, ind) => <Card price={price} setPrice={setPrice} count={count} setCount={setCount} setPurchesType={setPurchesType} purchesType={purchesType} data={data} key={ind}></Card>)     
            }
                
            </div>
        </div>
    );
};

export default AIdataCard;