import React, { Component } from 'react';

class Recherche extends Component {
   
    rechercheRef = React.createRef();

 donnees  = (e) => {
    e.preventDefault();

    console.log(this.rechercheRef.current.value);
 }

    render () {
        return (
            <form onSubmit={this.donnees}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.rechercheRef} type="text" className="form-control
                        form-control-lg" placeholder="Recherche ton image.
                        Exemple: Basketball"/>
                                            
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block"
                         value="Rechercher..." />
                        </div> 
                </div>
            </form>
         );
    }
}



export default Recherche;