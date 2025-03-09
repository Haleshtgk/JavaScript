

//global variables
let number1 = 24;
const number2 = 124;
let title = "Welcome to string Data";
let isAdmin = false;
let percentage = 50;
const user = {
    //key:value => property
    name:"Arun",
    age:22,
    email:"arun@gmail.com"
}

const colors = ["red", "green", "blue", "orange", "yellow", "black", "gray"];

function Example1(){
    //local variables
    return (
       <section className="container-fluid">
        <h1>This is the Example component</h1>
        <hr />
        <div className="row">
            <div className="col-md-6">
                <div className="card p-3">
                    <h1 className="fs-4">Global Variables in component</h1>
                    <hr />
                    <p className="fs-5">The global variable number1 = <span className="text-primary"> {number1}</span></p>
                    <p className="fs-5">The global variable number2 = <span className="text-primary"> {number2}</span></p>
                    <p className="fs-5">The global variable title = <span className="text-primary"> {title}</span></p>
                    <p className="fs-5">The global variable isAdmin = <span className="text-primary"> {isAdmin}</span></p>

                    <p>The boolean variable isAdmin = <span className="text-primary">{isAdmin ==true?"Yes  user is a admin":"no User is Not a admin"}</span></p>

                    <p className="fs-5">{isAdmin==true?(<span className="text-success">Yes user is an Admin</span>):(<span className="text-danger">No User is not a Admin</span>)}</p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="card p-3">
                    <h3>Conditional statements</h3>
                    <hr />
                    <h1 className="fs-2">{500>200?(<span className="text-success">yes 100 is greater than 500</span>):(<span className="text-danger">No 100 is not greater than to 500</span>)}</h1>

                    <div className="card p-3 mt-4">
                        {
                            percentage>=85?(
                                <p className="fs-4 text-success">A Grade</p>
                            ):percentage>=50?(
                                <p className="fs-4 text-primary">B Grade</p>
                            ):percentage>=35?(
                                <p className="fs-4 text-warning">C Grade</p>
                            ):(
                                <p className="fs-4 text-danger">Fail</p>
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="col-md-6 mt-4">
              <div className="card p-3">
              <h1 className="fs-2">Object</h1>
              <hr />
              <p>User Name = {user.name}</p>
              <p>User email = {user.email}</p>
              <p>User age = {user.age}</p>
              <p className="fs-4">{user.age>18?(<span className="text-success">This user Eligible for Voting</span> ):(<span className="text-danger">This user not eligible for voting</span> )}</p>
              </div>
            </div>
            <div className="col-md-6">
                <div className="card p-3">
                    <h1 className="fs-2">Arrays</h1>
                    <p className="fs-4" style={{color:colors[0]}}>Colors array index 0 = {colors[0]}</p>
                    <p className="fs-4" style={{color:colors[1]}}>Colors array index 0 = {colors[1]}</p>
                    <p className="fs-4" style={{color:colors[2]}}>Colors array index 0 = {colors[2]}</p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card p-3">
                    <h1 className="fs-2">reading all array values using loops</h1>
                    <hr />
                    {/* {
                        colors.map((item, index)=>{
                            return(
                                <div key={index}>
                                        <p   className="fs-4" style={{color:item}}> {index+1} {item}</p>
                                </div>
                            )
                        })
                    } */}

                    <ul>
                        {
                            colors.map((item, index)=>(
                                <li key={index} className="fs-4" style={{color:item}}>{index+1} {item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
       </section>
    )
}
export default Example1;