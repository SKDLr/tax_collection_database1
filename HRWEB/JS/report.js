const emp_count_Link = "https://ubiquitous-funicular-x5xgjqvjv7qrhv4gq-6006.app.github.dev/tolemp";

fetch(emp_count_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
   document.getElementById('emp').innerHTML+= data[0].count;
}).catch(err=>{
    console.log(err.message);
});

const reg_count_Link = "https://ubiquitous-funicular-x5xgjqvjv7qrhv4gq-6006.app.github.dev/tolreg";

fetch(reg_count_Link).then(response=>{
    if(!response.ok)
        throw new Error("Failed to Fetch data from given URL");
    return response.json();
}).then(data=>{
   document.getElementById('reg').innerHTML+= data[0].count;
}).catch(err=>{
    console.log(err.message);
});