import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import * as d3 from 'd3';

const styles = (theme) => ({
  axis: {
    stroke: theme.palette.primary.dark,
    strokeWidth: "1px"
  },
  axisGraph : {
    fill: "transparent",
    stroke: "#000",
    strokeWidth: "1px"
  },
  axisLabels: {
    fontWeight: 700
  },
  graphContainer: {
      width: "100%",
      minHeight: "350px"
  },
  graphTitle: {
      margin: "20px auto"
  }
});

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      width: 700,
      height: 350,
      margin: 20,
      data: []
    };

    this.containerSelector = React.createRef();
  }
  componentDidMount() {
      fetch('http://localhost:3001/usage').then( data => {
        return data.json()
      }).then( data => {
        this.setState({data})
      }).catch( e => {
          console.error(e)
      }).finally(() => {
        const graphContainerRect = this.containerSelector.current.getBoundingClientRect();
        this.setState({
            width: graphContainerRect.width,
            height: graphContainerRect.height
        })
      });
  }

  render() {
    const { classes } = this.props;
    const {data, width, height, margin} = this.state;

    const h = height - 2 * margin, w = width - 2 * margin;

    //number formatter
    const xFormat = d3.format('.2');
    
    //x scale
    const x = d3.scaleLinear()
      .domain(d3.extent(data, d => d.Timestamp)) //domain: [min,max] of a
      .range([margin, w]);
    
    //y scale
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.Factor1)]) // domain [0,max] of b (start from 0)
      .range([h, margin]);
    
    //line generator: each point is [x(d.a), y(d.b)] where d is a row in data
    // and x, y are scales (e.g. x(10) returns pixel value of 10 scaled by x)
    const line = d3.line()
      .x(d => x(d.Timestamp))
      .y(d => y(d.Factor2))
      .curve(d3.curveCatmullRom.alpha(0.5));
     
    const xTicks = x.ticks(8).map((d, index) => (
        x(d) > 0 && x(d) < w ? 
          <g transform={`translate(${x(d)},${h + margin})`} key={index}>  
            <text x="-40" y="10">{new Date(d*1000).toLocaleTimeString("en-US")}</text>
            <line x1='0' x1='0' y1='0' y2='10' stroke="gray" transform="translate(0,-20)"/>
          </g>
        : null
    ));

    const yTicks = y.ticks(6).map((d, index) => (
        y(d) > 10 && y(d) < h ? 
          <g transform={`translate(${margin},${y(d)})`} key={index}>  
            <text x="-12" y="-5">{xFormat(d*100)} %</text>
            <line className='gridline' x1="40" x1={w - margin} y1='0' y2='0' stroke="#ddd" transform="translate(-5,0)"/> 
          </g>
        : null
    ));

    return (
        <div className={classes.chartContainer}>
          <Paper elevation={3}>
            <Typography align="center" variant="h5" color="primary">
              Processor usage
            </Typography>
            <div className={classes.graphContainer} ref={this.containerSelector}>
                <svg width={width} height={height}>
                    <line className={classes.axis} x1={margin*2} x2={w} y1={h} y2={h}/>
                    <line className={classes.axis} x1={margin*2} x2={margin*2} y1={margin} y2={h}/>
                    <path d={line(data)} className={classes.axisGraph} transform={`translate(${margin},0)`}/>
                    <g className={classes.axisLabels}>
                    {xTicks}
                    </g>
                    <g className={classes.axisLabels}>
                    {yTicks}
                    </g>
                </svg>
            </div>
          </Paper>
        </div>
    );
  }
}

export default withStyles(styles)(Chart);
