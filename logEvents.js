const {format} = require("date-fns");
const {v4:uuid}  = require("uuid");


const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message)=>{
    const dateTime = `${format(new Date(),"yyyyMMdd\tHH:mm:ss")}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}`;
    console.log(logItem);

    try{
        await fsPromises.appendFile(path.join(__dirname,"logs",eventLog.txt),logItem);
    }catch(err){
        console.error(err);
    }
}
module.exports=logEvents;
// const os = require("os");
// const path = require("path");
// const { add, substract } = require("./math");

// const fsPromises = require("fs").promises;

// const fileOps = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf8");
//         console.log(data);

        
//         await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data);

//         await fsPromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\n\nNice to meet you");


//         await fsPromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "promiseCompleteWrite.txt"));

//         const newData = await fsPromises.readFile(path.join(__dirname, "files", "promiseCompleteWrite.txt"), "utf8");
//         console.log(newData);


//     } catch (error) {
//         console.log(error);
//     }
// }
// fileOps();


// // const web = path.join(__dirname, "files", "starter.txt");
// // console.log(web);


// // fs.readFile(path.join(__dirname, "files", "starter.txt"), "utf-8", (err, data) => {
// //     if (err) throw err;
// //     console.log(data);
// // })
// // console.log("*********************");

// // fs.writeFile(path.join(__dirname, "files", "reply.txt"),"Nice to meet you batuhan", (err) => {
// //     if (err) throw err;
// //     console.log("Write Complete");
// // })

// // fs.writeFile(path.join(__dirname, "files", "batu.txt"), "batuhan deneme dosyasyı oluşturdu adi batu.txt", (err) => {
// //     if (err) throw err;
// //     console.log("dosya başarıyla oluşturuldu");

// //     fs.appendFile(path.join(__dirname, "files", "reply.txt"), "\n\n yes it is bro", (err) => {
// //         if (err) throw err;
// //         console.log("append complete");
// //     })
// // })

// // process.on("uncaughtException", err => {
// //     console.error(`There was an uncaught error: ${err}`);
// //     process.exit(1);
// // })



// // console.log(add(5,3));
// // console.log(substract(8,2))

// // console.log(math.divide(5,2));
// // console.log(math.multiply(5,2));
// // console.log(math.substract(5,2));


// // console.log(os.type());
// // console.log(os.version());
// // console.log(os.homedir());


// // console.log(__dirname);
// // console.log(__filename);

// // console.log("*************")

// // console.log(path.dirname(__filename));
// // console.log(path.basename(__filename));
// // console.log(path.extname(__filename));


// // console.log(path.parse(__filename));