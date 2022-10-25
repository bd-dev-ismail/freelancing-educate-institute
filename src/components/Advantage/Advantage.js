import React from 'react';

const Advantage = ({about}) => {
    const { name, img, desc } = about;
    return (
      <div>
        <div className="card w-96 h-[20rem] bg-base-200 hover:bg-base-300 shadow-xl border-2 border-secondary-focus hover:border-primary-focus">
          <figure>
            <img src={img} alt="data" style={{width: '90px', height: '90px'}} className="p-5 rounded "/>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    );
};

export default Advantage;