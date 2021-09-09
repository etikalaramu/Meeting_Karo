import logo from './logo.svg';
import React from 'react';
import './App.css';
 class Fab extends React.Component{
    constructor(props){
        super(props);
    };

fab(){
   let fab1 = document.getElementById('fab1');
        let innerFabs = document.getElementsByClassName('inner-fabs')[0];

        fab1.addEventListener('click', function () {
            innerFabs.classList.toggle('show');
        });

        document.addEventListener('click', function (e) {
            switch (e.target.id) {
                case "fab1":
                case "fab2":
                case "fab3":
                case "fabIcon":
                    break;
                default:
                    innerFabs.classList.remove('show');
                    break;
            }

        });
}
  componentDidMount(){
    this.fab();
  }
    render(){
        return(
          <>
             <div className="inner-fabs">
                            <div className="fab round bg-primary" id="fab3" data-tooltip="Create"><i className="fa fa-user-plus"
                                    aria-hidden="true"></i></div>
                            <div className="fab round bg-primary" id="fab2" data-tooltip="user"><i className="fa fa-user"
                                    aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="fab round bg-primary"><i className="fa fa-plus" aria-hidden="true" id="fab1"></i></div>
                        </>

        );
    }
};

export default Fab;
// export {fab};
