import * as d3 from "d3";
import { salesData } from "../Constants";

const drawChart = (container) => {
  const width = 550;
  const height = 450;
  const margin = { top: 50, right: 80, bottom: 50, left: 90 };

  const updatedData = salesData.map((sale) => {
    return {
      //To create data in updated date format
      date: d3.timeParse("%Y-%m-%d")(sale.updated_at__date),
      value: sale.sales
    };
  });

  updatedData.sort(function (a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });

  var xScale = d3
    .scaleTime()
    .domain(
      d3.extent(updatedData, function (d) {
        return d.date;
      })
    )
    .range([0, width]);

  var yScale = d3
    .scaleLinear()
    .domain(
      d3.extent(updatedData, function (d) {
        return d.value;
      })
    )
    .range([height - 200, 0]);

  //svg
  var svg = d3
    .select(container.current)
    .append("svg")
    .attr("class", "svgEle")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g") //creates the lines in blue
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr("style", "color:blue;");

  //To create the x axis
  svg
    .append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + (height - 200) + ")")
    .call(
      d3
        .axisBottom(xScale)
        .ticks(updatedData.length < 7 ? (updatedData.length < 3 ? 2 : 5) : 7)
        .tickFormat(d3.timeFormat("%d %b"))
        .tickSize(0)
        .tickPadding(10)
    ) //creates the dates in the x-axis
    .attr("stroke", "violet")
    .attr("stroke-width", "0.5")
    .call((g) => g.select(".domain").attr("stroke", "#99B9E2"));

  svg
    .append("rect")
    .attr("class", "panningContainer")
    .attr("x", 0)
    .attr("y", height - 200)
    .attr("width", width)
    .attr("height", 30)
    .attr("stroke", "none")
    .attr("fill", "transparent")
    .attr("cursor", "all-scroll");

  // 4. Call the y axis in a group tag
  svg
    .append("g")
    .attr("class", "y-axis")
    // creates the numbers in orange in y-axis
    .call(d3.axisLeft(yScale).tickSize(0).tickPadding(10))
    .attr("stroke", "orange")
    .attr("stroke-width", "0.5")
    .call((g) => g.select(".domain").attr("stroke", "#99B9E2"));

  svg
    .append("g")
    .attr("class", "y axis 2")
    .attr("transform", "translate(" + (width + 20) + ",0)")
    .call(d3.axisRight(yScale).tickSize(0).tickPadding(10))
    .attr("stroke", "#D3D3D3")
    .attr("stroke-width", "0.5")
    .call((g) => g.select(".domain").remove());

  //To create grid
  svg
    .append("g")
    .attr("class", "yGrid")
    .attr("transform", "translate(0," + (height - 200) + ")")
    .call(
      d3
        .axisBottom(xScale)
        .ticks(
          updatedData.length < 7
            ? updatedData.length < 3
              ? updatedData.length - 1
              : 5
            : 7
        )
        .tickSize(-height + 200)
        .tickFormat("")
    )
    .call((g) => g.select(".domain").attr("stroke", "#99B9E2"));

  svg
    .append("g")
    .attr("class", "xGrid")
    .attr("transform", "translate(0, 0)")
    .call(d3.axisLeft(yScale).tickSize(-width).tickPadding(10).tickFormat(""))
    .call((g) => g.select(".domain").attr("stroke", "#99B9E2"));

  svg
    .append("text")
    .text("Total Sale Value")
    .attr("x", -(height / 2 - (margin.top + margin.bottom)))
    .attr("y", 20 - margin.left)
    .attr("dy", "1em")
    .style("font-size", "12px")
    .style("fill", "green")
    .style("text-anchor", "middle")
    .attr("transform", "rotate(-90)"); // Create an axis component with d3.axisLeft

  svg
    .append("g")
    .append("rect")
    .attr("class", "graphContainer")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", width)
    .attr("height", height - 200)
    .attr("fill", "none")
    .attr("overflow", "hidden");

  //Lines
  var line = d3
    .line()
    .x(function (d, i) {
      return xScale(d.date);
    }) // set the x values for the line generator
    .y(function (d) {
      return yScale(d.value);
    }) // set the y values for the line generator
    .curve(d3.curveLinear); // apply smoothing to the line        //curveMonotoneX for curved lines

  var Tooltip = d3
    .select(container.current)
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "transparent")
    .style("border-width", "1px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("box-shadow", "rgba(0, 0, 0, 0.24) 0px 3px 8px");

  var mouseover = function (d) {
    Tooltip.style("opacity", 1);
  };

  var mousemove = function (evt, d) {
    Tooltip.html(
      d3.timeFormat("%B %d, %Y")(d.date) +
        "<br />" +
        "<b>" +
        d.value +
        "</b> Sales"
    )
      .style("top", evt.pageY + "px")
      .style("left", evt.pageX + "px");
  };

  var mouseleave = function (d) {
    Tooltip.style("opacity", 0);
  };

  //styles for line
  var drawnLines = svg
    .append("path")
    .datum(updatedData) // 10. Binds data to the line
    .attr("class", "line") // Assign a class for styling
    .attr("d", line) // 11. Calls the line generator
    .style("fill", "none")
    .attr("clip-path", "url(#clip)")
    .style("stroke", "black");

  //Dots
  var drawnDots = svg
    .append("g")
    .selectAll(".dot")
    .data(updatedData)
    .enter()
    .append("circle") // Uses the enter().append() method
    .attr("class", "circleDot") // Assign a class for styling
    .attr("cx", function (d, i) {
      return xScale(d.date);
    })
    .attr("cy", function (d) {
      return yScale(d.value);
    })
    .style("fill", "pink")
    .style("padding", "3")
    .style("stroke", "brown")
    .style("cursor", "pointer")
    .attr("r", 4)
    .attr("clip-path", "url(#dotsClip)")
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave);
};

export default drawChart;
