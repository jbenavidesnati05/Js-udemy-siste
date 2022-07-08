// ______________________promesas async y await______________________ 
async function funcionConPromesaYAwait(){
    let miPromesa = new Promise(resolver=>{
        resolver("promesa con away");
    });

    console.log(await miPromesa);
}

// funcionConPromesaYAwait();

// ______________________promesas async  await y setTimeout______________________ 

async function funcionConPromesaYAwaitYTimeout(){
    let mipromesa= new Promise(resolver =>{
        setTimeout(()=> resolver(" resolver con awiat y timeout"),3000);
    })
    console.log(await mipromesa);
}

 funcionConPromesaYAwaitYTimeout();