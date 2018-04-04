'use strict';

import Chart from 'chart.js';

const defaultOptions = {
    targetValue: null,
    lineWidth: 5,
    strokeStyle: "#000",
};

Chart.plugins.register({
    id: 'doughnutLine',
    afterDraw: (chart, easingValue, options) => {
        const ctx = chart.ctx;
        const pluginOptions = Object.assign({}, defaultOptions, options);
        // This commented out code below is related to showing the line at a certain point in the chart animation
        //let frameToInitDraw = (this.options.targetValue / 100) * (this.options.animation.duration * .06);
        //if (value.currentStep > frameToInitDraw - 25 * (this.options.animation.duration / 1000)) {

        let targetVal = pluginOptions.targetValue ? pluginOptions.targetValue : null;
        let theta;
        let angleToSubtract = 180 * (targetVal / 100);
        theta = angleToSubtract - 180;
        //let ctx = canvas.getContext("2d");
        let widthOfChartCanvas = chart.chartArea.right - chart.chartArea.left;
        let xc = widthOfChartCanvas / 2;
        let yc = (chart.chartArea.bottom - chart.chartArea.top) - (chart.chartArea.bottom / 4);
        let chartWidth = ((100 - chart.options.cutoutPercentage) / 100) * (widthOfChartCanvas / 2);
        let r = (widthOfChartCanvas / 2) - (chartWidth / 2);
  
        if (targetVal !== null && targetVal >= 0 && targetVal <= 100){
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(xc + (r - chartWidth / 2) * Math.cos(Math.PI * theta / 180), yc + (r - chartWidth / 2) * Math.sin(Math.PI * theta / 180));
        ctx.lineTo(xc + (r + chartWidth / 2) * Math.cos(Math.PI * theta / 180), yc + (r + chartWidth / 2) * Math.sin(Math.PI * theta / 180));

        ctx.lineWidth = pluginOptions.lineWidth;
        ctx.strokeStyle = pluginOptions.strokeStyle;
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
        }
    }
});


// Chart.defaults.global.responsive = false;
// Chart.defaults.global.tooltips.enabled = false;
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");
// var skillsChart = new Chart(ctx, {
//   type: 'doughnut', 
//   data: pieData,
//   options: {
//     cutoutPercentage: 80,
//     elements: {
//         arc: {
//             borderWidth: 0
//         }
//     },
//     targetValue: 80,
//     circumference: Math.PI,
//     rotation: 1.0 * Math.PI,
//     hover: {mode: null},
//     legend: {
//             display: false
//     },
//   }}
// );



// var pieData = {
//     datasets: [
//         {
//             data: [80, 20],
//             backgroundColor: [
//                 "#97d700",
//                 "#D3D3D3",
//                 "#97d700",
//             ]
//         }]
//     };

// Chart.defaults.global.responsive = false;
// Chart.defaults.global.tooltips.enabled = false;
// let canvas = document.getElementById("canvas");
// let ctx = canvas.getContext("2d");

// var skillsChart = new Chart(ctx, {
//   type: 'doughnut', 
//   data: pieData,
//   options: {
//     events: [],
//     cutoutPercentage: 80,
//     elements: {
//         arc: {
//             borderWidth: 0
//         }
//     },
//     targetValue: 78,
//     circumference: Math.PI,
//     rotation: 1.0 * Math.PI,
//     hover: {
//       mode: null
//     },
//     legend: {
//       display: false
//     },
//     animation: {
//       duration: 1000,
//       onProgress: function(value, renderLine) {
//         let frameToInitDraw = (this.options.targetValue / 100) * (this.options.animation.duration * .06);
//         if (value.currentStep > frameToInitDraw - 25 * (this.options.animation.duration / 1000)) {
//         console.log(frameToInitDraw);
//         console.log(value.currentStep)
//         let targetVal = this.options.targetValue;
//         let theta;
//         let angleToSubtract = 180 * (targetVal / 100);
//         theta = angleToSubtract - 180;
//         //let ctx = canvas.getContext("2d");
//         let xc = canvas.width / 2;
//         let yc = canvas.height - 75;
//         let chartWidth = ((100 - this.options.cutoutPercentage) / 100) * (canvas.width / 2);
//         let r = (canvas.width / 2) - (chartWidth / 2);
  
//         ctx.beginPath();
//         ctx.moveTo(xc + (r - chartWidth / 2) * Math.cos(Math.PI * theta / 180), yc + (r - chartWidth / 2) * Math.sin(Math.PI * theta / 180));
//         ctx.lineTo(xc + (r + chartWidth / 2) * Math.cos(Math.PI * theta / 180), yc + (r + chartWidth / 2) * Math.sin(Math.PI * theta / 180));

//         ctx.lineWidth = 5;
//         ctx.strokeStyle = "#000";
//         ctx.stroke();
//         ctx.closePath();
//           }
//       }
//     }
//   }}
// );
