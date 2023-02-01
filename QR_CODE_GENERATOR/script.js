const genQR = () =>
{
    let gapi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    let myimg=document.getElementById("img");
    let mytext=document.getElementById("qrtext").value;
    let mysize=document.getElementById("size").value;
 
    if (mytext!=="" && mysize=="100")
    {
        myimg.src=gapi+"100x100"+"&chl="+mytext;
        // https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl=hello
    }

    else if(mytext!=="" && mysize=="150")
    {

        myimg.src=gapi+"150x150"+"&chl="+mytext;
    }

    else if(mytext!=="" && mysize=="200")
    {
        myimg.src=gapi+"200x200"+"&chl="+mytext;
    }

    else if (mytext!=="" && mysize=="250")
    {
        myimg.src=gapi+"250x250"+"&chl="+mytext;
    }

    else if (mytext!=="" && mysize=="300")
    {
        myimg.src=gapi+"300x300"+"&chl="+mytext;
    }

    else
    {
        document.body.innerHTML="<center><p><strong>Go back! and Write some text to the particular textarea!</strong></p></center>";
        document.body.style.backgroundColor = "#e63946";   
    }
}
const downloadQR = () => {
    document.body.innerHTML="<center><p><strong>Please wait for some extent to configure this issue soon!!</strong></p></center>";
        document.body.style.backgroundColor = "#ffc8dd";
        document.body.style.color = "#1d3557";
}   
// just need to configure
// const downloadQR = () => {
//     let img = document.getElementById('img');
//     let data = img.src;
//     document.getElementsByTagName('a').
//     item(0).href = data;                        
//     console.log(data);
// }