/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Event Registration site' });
    };
    module.exports = {
        index
        };