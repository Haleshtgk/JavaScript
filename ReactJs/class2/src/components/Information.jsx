import React from 'react'

// function Information(props) {
    // const {productName, price, rating} = props;

function Information(props){ //destructuring props or object
    console.log(props);
    const {productName, price, rating} = props;
    
    const ratingGenerate = () =>{
        let result = "";
        for(let i=0; i<rating; i++){
            result += "⭐"
        }

        return result;
    }
  return ( 
    <div>
        <h1 className="fs-2">Default props for functional component</h1>
        <div className="alert alert-secondary">
            <h1 className="fs-4 alert-title">Product name is {productName}</h1>
            <p className="fs-4 alert-subtitle">Product Discount %  Price is {price} </p>
            <p className='alert-subtitle fs-6'>product Rating is {rating}+{ratingGenerate()}</p>
        </div>
    </div>
  )
}
//defaut props for functional compoenent
Information.defaultProps = {
    productName:"Mobile",
    price:"69999/-",
    rating:4
}

export default Information