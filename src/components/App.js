import React from 'react';
import axios from 'axios';
import Header from './Header';
import ContPrev from './ContPrev';
//import data from './testData';

class App extends React.Component{
   state={
       pageHeader:'Naming Contest',
       contests:[]
    };
    componentDidMount(){
        //ajax
        axios.get('/api/contests')
        .then(resp=>{
            //console.log(resp.data.contests);
            this.setState({
                    contests: resp.data.contests
            });
        })
        .catch(console.error)        
    }
    
    componentWillUnmount(){
        
    }
    render(){
        return(        
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.contests.map(contest=>
                        <ContPrev key={contest.id} {...contest}/>
                    )}
                    
                </div>            
            </div>    
        );
    }
}
export default App;
