/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

const svg = d3.select('#chart-area').append('svg')
            .attr('width',500 )
            .attr('height',500 )


d3.json('data/buildings.json').then(data => {
    data.forEach(element => {
        element.height = Number(element.height)
    });

    const rects = svg.selectAll('rect')
                .data(data)
    
    
    rects.enter().append('rect')
        .attr('x',(d,i) => (i*60) +50 )
        .attr('y', 0)
        .attr('width', 50)
        .attr('height', (d) => d.height)
        .attr('fill', 'blue');
    
})