/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

const svg = d3.select('#chart-area').append('svg')
            .attr('width',500 )
            .attr('height',400 )

const line = svg.append('line')
            .attr('x1',10 )
            .attr('y1',10 )
            .attr('x2',100 )
            .attr('y2',30 )
            .attr('stroke','black' )
            .attr('stroke-width',10 )
const rect = svg.append('rect')
            .attr('x',200 )
            .attr('y', 50)
            .attr('width',240 )
            .attr('height',120 )
            .attr('fill', 'blue')
const ellipse = 
svg.append('ellipse')
    .attr('cx', 275)
    .attr('cy', 275)
    .attr('rx', 30)
    .attr('ry', 40)
    .style('fill', 'yellow');
