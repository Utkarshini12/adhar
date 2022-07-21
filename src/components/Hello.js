import Hellos from '../assets/hello.svg';

function Hello() {
    return(
        <div className="container text-center text-danger">
            <h1 className="text-danger text-danger">Hola! </h1>
            <hr />
            <img src={Hellos} alt="" className="p-2"/>
           
        </div>
    )
}

export default Hello;