import React from 'react';
import ReactDOM from 'react-dom';
import ReactHighcharts from 'react-highcharts';

class App extends React.Component { 
    constructor(){
      super();
      this.state = {
        config: {
          series: [
            {
              name: "Domestic",
              data: [150, 900, 675, 400]
            },
            {
              name: "International",
              data: [200, 745, 333, 450]
            }
          ],
          xAxis: {
            categories: ['Sue Frost', 'Jim Stone', 'Linda Brady', 'Edward Lee']
          },
          chart: {
            type: 'column'
          },
          yAxis: {
            title: {
              text: 'US Dollars'
            }
          },
          title: {
            text: "Highcharts Practice"
          }
        }
      }
    }
    render() {
      return (
        <ReactHighcharts config={this.state.config} ref="chart"></ReactHighcharts>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));