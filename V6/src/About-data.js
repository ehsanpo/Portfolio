const bgcolor= "rgba(254, 48, 72, 0.2)";
const borderColor = "rgb(254, 48, 72)";
const options = {scale: {ticks:  {beginAtZero: true,min: 0,max: 10,stepSize: 2},pointLabels: {fontSize: 13,fontFamily: 'lingua-r'}} };
let chart_data; 

export default chart_data = {
dataOptions :options,
dataFE:{
    labels: ['HTML', 'CSS', 'Javascript', 'Performence', 'Buid system', 'Angular', 'React'],
    datasets: [{
       label: 'Front-End',
        data: [10, 10, 10, 10, 8, 7, 8],
        borderWidth: 1,
        fill:true,
        scaleStartValue: 0,
        backgroundColor:bgcolor,
        borderColor:borderColor,
    }]
},

dataBE:{
    labels: ['PHP', 'Nodejs', 'SQL', 'Git', 'Deploy system', 'Wordpress', 'Drupal', 'Laravel'],
    datasets: [{
       label: 'Backend',
        data: [10, 9, 9, 9, 6, 10, 7,6],
        borderWidth: 1,
        fill:true,
        scaleStartValue: 0,
        backgroundColor:bgcolor,
        borderColor:borderColor,
    }]
},

dataDesign:  {
    labels: [ 'UI', 'UX', 'Motion', 'Photoshop', 'Adobe XD'],
    datasets: [{
       label: 'Design',
        data: [10, 8, 6, 10, 9],
        borderWidth: 1,
        fill:true,
        scaleStartValue: 0,
        backgroundColor:bgcolor,
        borderColor:borderColor,
    }]
},

dataDevop: {
    labels: [ 'Linux', 'Apache', 'Nginx', 'AWS', 'Shell script' ,'Pentesting'],
    datasets: [{
       label: 'DevOp',
        data: [10, 9, 10, 7, 8, 6],
        borderWidth: 1,
        fill:true,
        scaleStartValue: 0,
        backgroundColor:bgcolor,
        borderColor:borderColor,
    }]
}
}


