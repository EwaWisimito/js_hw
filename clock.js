

var myVar = setInterval(timer, 1000);

function timer()
{
    var today = new Date();

    var time = (today.toLocaleTimeString('it-IT'));
    
    
    console.log( time.length );
   
    document.getElementById('hour1').innerText= time[0];
    document.getElementById('hour2').innerText= time[1];
    document.getElementById(':').innerText= time[2];
    document.getElementById('min1').innerText= time[3];
    document.getElementById('min2').innerText= time[4];
    document.getElementById(':2').innerText= time[5];
    document.getElementById('sec1').innerText= time[6];
    document.getElementById('sec2').innerText= time[7];
    
    
    


    
}

