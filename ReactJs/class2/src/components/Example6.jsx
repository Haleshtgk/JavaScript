import React,{Component} from 'react'

class Example6 extends React.Component{
    render(){
        return(
            <section className="container fluid">
                <h1 className="display-3 text-center">React Class component props Example</h1>
                <hr />

                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <img src={this.props.img} className='w-100' alt="class component images" />
                            </div>
                            <div className="card-body">
                                <h3 className="fs-3">{this.props.title}</h3>
                                <p className="fs-6 tet-secondary">{this.props.subtitle}</p>
                            </div>
                            <div className="card-footer">
                               <a href={this.props.link} className="btn btn-dark w-100">React More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Example6;