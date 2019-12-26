// import yargs from 'yargs'
// import { sh, cli } from 'tasksfile'



// let argv = yargs
//   .command('describe', 'Adds a new note', {
//     collection: {
//       describe: 'Name of the collection',
//       demandOption: true
//     }
//   }, yargs => {
//     console.log(yargs._[0])
//     if (yargs._[0] === 'describe' && (yargs.collection !== '' || yargs.collection !== null || yargs.collection !== undefined)) {
//       const runVariety = (collection) => {
//         sh(`variety variety/${collection}`)
//       }

//       runVariety(yargs.collection)

//       // cli({ runVariety })
//     }
//   })
//   .argv

// // console.log(argv)

import { sh, cli } from 'tasksfile'

const describe = (options, collection) => {
  console.log('options', options)
  console.log('collection', collection)
  sh(`variety variety/${collection}`)
}

cli({ describe })