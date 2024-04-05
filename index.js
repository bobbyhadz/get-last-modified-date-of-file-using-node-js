// EXAMPLE 1 - How to get the last modified Date of a File in Node.js

import fs from 'fs';

// 👇️ if you use CommonJS require() syntax
// const fs = require('fs')

function getLastModifiedDate(filepath) {
  const stats = fs.statSync(filepath);

  console.log(stats);

  return stats.mtime;
}

console.log(getLastModifiedDate('./example.txt'));

// ------------------------------------------------------------------

// // EXAMPLE 2 - With try/catch

// import fs from 'fs';

// // 👇️ if you use CommonJS require() syntax
// // const fs = require('fs')

// function getLastModifiedDate(filepath) {
//   try {
//     const stats = fs.statSync(filepath);

//     console.log(stats);

//     return stats.mtime;
//   } catch (err) {
//     console.log(err);
//   }
// }

// console.log(getLastModifiedDate('./example.txt'));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Getting the last modified time in Milliseconds

// import fs from 'fs';

// // 👇️ if you use CommonJS require() syntax
// // const fs = require('fs')

// function getLastModifiedTimeInMs(filepath) {
//   const stats = fs.statSync(filepath);

//   return Math.round(stats.mtimeMs);
// }

// console.log(getLastModifiedTimeInMs('./example.txt'));

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the last modified Date of a File Asynchronously in Node.js

// import fs from 'fs';

// // 👇️ if you use CommonJS require() syntax
// // const fs = require('fs')

// fs.stat('example.txt', (error, stats) => {
//   if (error) {
//     console.log(error);
//   }

//   console.log(stats);

//   // ✅ Get last modified time
//   const lastModified = stats.mtime;
//   console.log('last modified:', lastModified);

//   // ✅ Get last time the file was accessed
//   const lastAccessed = stats.atime;
//   console.log('last accessed:', lastAccessed);

//   // ✅ Get the last time the file's status changed
//   const lastStatusChange = stats.ctime;
//   console.log('last status change:', lastStatusChange);

//   // ✅ Get the time the file was created
//   const fileCreatedAt = stats.birthtime;
//   console.log('file created at:', fileCreatedAt);
// });

// ------------------------------------------------------------------

// // EXAMPLE 5 - Using async/await to get the last modified date of a file in Node.js

// import fs from 'fs';
// import util from 'util';

// // 👇️ if you use CommonJS require() syntax
// // const fs = require('fs')
// // const util = require('util')

// async function getLastModifiedDate(filepath) {
//   const statPromise = util.promisify(fs.stat);

//   try {
//     const stats = await statPromise(filepath);

//     // ✅ Get last modified time
//     const lastModified = stats.mtime;
//     console.log('last modified:', lastModified);

//     // ✅ Get last time the file was accessed
//     const lastAccessed = stats.atime;
//     console.log('last accessed:', lastAccessed);

//     // ✅ Get the last time the file's status changed
//     const lastStatusChange = stats.ctime;
//     console.log('last status change:', lastStatusChange);

//     // ✅ Get the time the file was created
//     const fileCreatedAt = stats.birthtime;
//     console.log('file created at:', fileCreatedAt);

//     return stats.mtime;
//   } catch (err) {
//     console.log(err);
//   }
// }

// getLastModifiedDate('./example.txt');
