import fs from 'fs';
import winston from 'winston';
const fsPromises = fs.promises;


//manually doing for logger
// async function log(logData) {
//     try {
//         logData =  `\n ${new Date().toString() }  ${logData} `;
//         await fsPromises.appendFile('log.txt', logData);
//         console.log('Log saved successfully');
//     } catch (error) {
//         console.error('Error saving log:', error);
//     }
// }


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'request-logging' },
    transports: [
        new winston.transports.File({filename:'logs.txt'}),
        // new winston.transports.File({ filename: 'error.log', level: 'error' }),
        // new winston.transports.File({ filename: 'combined.log' })
    ]
})

const loggerMiddleware = async (req, res, next) => {
    if(!req.url.includes('login')){
        const logData = `\n  req URL : ${req.url} \n  req Body : ${JSON.stringify(req.body) }`
        // await log(logData);
        logger.info(logData);
    }
    next(); 
};

export default loggerMiddleware;