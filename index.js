const { exec } = require('child_process');

exec('npm start', (err, stdout, stderr) => {
    if (err) {
        console.error(`Error executing npm start: ${err.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
