


const req_handle = (req,res) => {
    console.log('Server STart');
    res.write('India');
    res.end();
}

module.exports = req_handle;


