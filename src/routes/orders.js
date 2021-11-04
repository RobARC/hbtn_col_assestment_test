const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth')

//import connection to DB
const pool = require('../database');

router.get('/add', isLoggedIn, (req, res) => {
    res.render('orders/add')
});

router.post('/add', isLoggedIn, async (req, res) => {
    const { order_date, total, subtotal, taxes, paid } = req.body;
    const newOrder = {
        order_date,
        total,
        subtotal,
        taxes,
        paid
    };
    await pool.query('INSERT INTO orders set ?', [newOrder]);
    req.flash('success', "Order saved succesfully");
    res.redirect('/orders');
});

router.get('/', isLoggedIn, async (req, res) => {
    const orders = await pool.query('SELECT * FROM orders')
    //console.log(orders);
    res.render('orders/list', { orders });
});

router.get('/delete/:orderid', isLoggedIn, async (req, res) => {
    /*console.log(req.params.orderid);*/
    /*res.send('DELETED')*/
    const { orderid } = req.params;
    await pool.query("DELETE FROM orders WHERE ORDERID = ?", [orderid]);
    req.flash('success', "Order removed succesfully");
    res.redirect('/orders')
});

router.get('/edit/:orderid', isLoggedIn, async (req, res) => {
    const { orderid } = req.params;
    const order = await pool.query("SELECT * FROM orders WHERE ORDERID = ?", [orderid]);
    res.render('orders/edit', { orders: order[0] });
});

router.post('/edit/:orderid', isLoggedIn, async (req, res) => {
    const { orderid } = req.params;
    const { order_date, total, subtotal, taxes, paid } = req.body;
    const newOrder = {
        order_date,
        total,
        subtotal,
        taxes,
        paid
    };
    await pool.query('UPDATE orders set ? WHERE orderid = ?', [newOrder, orderid]);
    req.flash('success', "Order updated succesfully");
    res.redirect('/orders');

});


module.exports = router;