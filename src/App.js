// eslint-disable-next-line 
import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

import { Cards, Charts, CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';


class App extends React.Component{

  state ={
    data: {},
  }
   
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
    console.log(fetchData)
  }
  render(){
    const {data} = this.state;
    return(
    <div className={styles.container}> 
      <Cards data={data} />
      <Charts />
      <CountryPicker/>
    </div>
    )
  }
}
export default App;
