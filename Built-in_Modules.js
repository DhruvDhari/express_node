// OS,PATH,FS,HTTP

// **** OS MODULE **************{operating System}
// --------------------------------
// const os =require('os');

// const user=os.userInfo();
// user.uptime=os.uptime();
// console.log(user);

// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem : os.freemem()
// }

// console.log(currentOS);

// -----------------------------
// PATH MODULE  ***********************

// const path=require('path');
// console.log(path.dirname);
// const filePath=path.join('content/','hjbkb',"chuha");
// console.log(filePath);

// const base=path.basename(filePath);
// console.log(base);

// const absolute=path.resolve(__dirname,'content');
// console.log(absolute);
// console.log("address",__dirname);


// ***********************************************
// FS MODULE {file system}
// -------------------------
// synchronous is blocking and asynchronous os non-blocking


// const {readFileSync,writeFileSync}=require('fs')
// ***********8 synchronous&****************

// const first=readFileSync('./random/first.txt','utf8');
// const second=readFileSync('./random/second.txt','utf8');
// // console.log(second);
// // console.log(first);

// writeFileSync('./random/new.txt',
// "\n kutteeehta tha,\n bheagra sa hua hoon mai",
// {flag:"a"}
// )

// ********* asynchronous **

// const {readFile,writeFile}=require('fs')
// readFile('./random/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(result)
// })