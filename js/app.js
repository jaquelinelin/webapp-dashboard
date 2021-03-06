const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = `<div class="alert-banner">
                          <p><strong>Alert:</strong> You have unread messages</p>
                          <p class="alert-banner-close">x</p>
                        </div>`;
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none";
    }
});

const trafficCanvas = document.getElementById("traffic-chart");
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
        backgroundColor: 'rgba(156,150,212,.5)',
        borderColor: 'rgba(116,100,191,255)',
        borderWidth: 1,
        tension: 0.5,
    }]
}

let hourlyData = {
    labels: ["7-8am", "9-10am", "11-12am", "1-2pm", "3-4pm", "5-6pm", "7-8pm", "9-10pm", "11-12pm"],
    datasets: [{
        data: [150, 185, 140, 200, 150, 175, 125, 35, 50],
    }]
}

let dailyData1 = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    datasets: [{
        data: [2500, 1350, 1400, 1200, 2500, 1750, 2450],
    }]
}

let weeklyData = {
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
    datasets: [{
        data: [1200, 2500, 1750, 2500, 1350, 1400, 2450, 1750, 1500, 1050],
    }]
}

let monthlyData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        data: [2200, 1500, 3750, 2500, 3350, 3400, 4450, 3349, 4845, 3160, 1850, 1950],
    }]
}

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201,.5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// Display hourly, daily, weekly, monthly data chart by clicking the traffic navigation 

const updateChart = (chart, newData) => {
    chart.data.labels = newData.labels;
    chart.data.datasets[0].data = newData.datasets[0].data;
    chart.update();
};


const trafficNavigation = document.querySelector('.traffic-nav');
trafficNavigation.addEventListener('click', (e) => {
    let targetNav = e.target;
    if (targetNav.tagName === 'LI') {
        targetNav.className = "active";
    }
    const trafficList = document.querySelectorAll('.traffic-nav li');
    for (let i = 0; i < trafficList.length; i++) {
        const activeList = trafficList[i];
        if (activeList.className === 'active') {
            activeList.className += ' traffic-active';
            let listName = activeList.textContent;
            if (listName === 'Hourly') {
                updateChart(trafficChart, hourlyData);
            } else if (listName === 'Daily') {
                updateChart(trafficChart, dailyData1);
            } else if (listName === 'Weekly') {
                updateChart(trafficChart, weeklyData);
            } else if (listName === 'Monthly') {
                updateChart(trafficChart, monthlyData);
            }
        } else {
            activeList.className = 'traffic-nav-link';
        }
    }
});





// bar chart

let dailyTraffic = document.getElementById("daily-chart");

const barData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: 'rgba(116,119,191,255)',
        borderWidth: 1
    }]
};

const chartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyTraffic, {
    type: 'bar',
    data: barData,
    options: chartOptions
});





// DOUNUT CHART
const data = {
    labels: [
        'Desktop',
        'Tablet',
        'Phones'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 70, 80],
        backgroundColor: [
            'rgba(116,119,191,255)',
            'rgba(129,201,143,255)',
            'rgba(81,182,200,255)'

        ],
        hoverOffset: 4
    }]
};

const mobilecon = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};

const config = {
    type: 'doughnut',
    data: data,
    options: mobilecon
};


const myChart = new Chart(
    document.getElementById('doughnut-chart'),
    config
);


// ------- Messaging Section ------

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    // make sure user message fields are filled

    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert("message sucessfully sent");
    }
});