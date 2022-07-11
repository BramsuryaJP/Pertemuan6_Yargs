
// npm module yargs
const yargs = require("yargs");

const contacts = require ('./contact')

// console.log(yargs.argv);

yargs.command({
  // tambah data contact
  command: 'add',
  describe: 'Add a new contact',
  builder: {
    name: {
      describe: 'Contact Name',
      demandOption: true,
      type: 'string',
    },
    phoneNumber: {
      describe: 'Contact Phone Number',
      demandOption: true,
      type: 'string',
    },
    email: {
      describe: 'Contact Email',
      demandOption: false,
      type: 'string',
    },
  },
  handler (argv) {
    // const contact = {
    //   name: argv.name,
    //   phoneNumber: argv.phoneNumber,
    //   email: argv.email,
    // };

    // memanggil fungsi untuk menyimpan contact yang sudah diinput
    contacts.getAnswer(argv.name, argv.phoneNumber, argv.email)

    // melihat content dari contact
    // console.log(contact);
  }
});

// memanggil yargs
yargs.parse();

// membuat fungsi untuk menampung pertanyaan
// const getQuestion = async () => {
//   const name = await contacts.questions (`What's your name ? `);
//   const phoneNumber = await contacts.questions ('Input your phone number : ');
//   const email = await contacts.questions ('Input your email : ');

//   contacts.getAnswer(name, phoneNumber, email);
// }

// getQuestion();