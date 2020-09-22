/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

const data = [25,20,10,12,15]

const svg = d3.select('#chart-area').append('svg')
            .attr('height',500 )
            .attr('width',500 )

const circles = svg.selectAll('circles')
                .data(data)


circles.enter().append('circle')
    .attr('cx',(d,i) => {
        return (i*50) + 50
    } )
    .attr('cy', 250)
    .attr('r', (d) => {
        return d
    })
    .style('fill', 'red');
