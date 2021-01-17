module.exports = {

    getIndex: (req, res) => {
        res.render('login');
    },

    getDashboard: (req, res) => {
        res.render('dashboard', {
            user: req.user
          })
    },

    getPending: (req, res) => {
        res.render('dashboard-pending', {
            user: req.user
          })
    },

    getComplete: (req, res) => {
        res.render('dashboard-complete', {
            user: req.user
          })
    }

}