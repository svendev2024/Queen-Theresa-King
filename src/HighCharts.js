import React from "react";  
import Highcharts from "highcharts/highcharts.src.js";
import HighchartsReact from "highcharts-react-official";

const HighChart = () => {  
  const options = {  
    title: {  
      text: "High Chart"  
    },  
    series: [  
      {  
        name: "Sample Data",  
        data: [1, 3, 2, 4]  
      }  
    ],  
    xAxis: {  
      categories: ["Jan", "Feb", "Mar", "Apr"]  
    }  
  };  

  return (  
    <div className="row">  
      <HighchartsReact  
        highcharts={Highcharts}  
        options={options}  
      />  
    </div>  
  );  
};  

export default HighChart;