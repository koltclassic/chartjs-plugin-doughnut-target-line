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
        let xc = canvas.width / 2;
        let yc = canvas.height - 75;
        let chartWidth = ((100 - chart.options.cutoutPercentage) / 100) * (canvas.width / 2);
        let r = (canvas.width / 2) - (chartWidth / 2);
  
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
