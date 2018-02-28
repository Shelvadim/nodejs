import React from 'react';
import Header from './Header';
import ContPrev from './ContPrev';

class App extends React.Component{
   state={
       pageHeader:'Naming Contest'
    };
    componentDidMount(){
        
    }
    componentWillUnmount(){
        
    }
    render(){
        return(        
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    {this.props.contests.map(contest=>
                        <ContPrev {...contest}/>
                    )}
                    
                </div>            
            </div>    
        );
    }
}
export default App;
