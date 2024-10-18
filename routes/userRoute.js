import express from 'express';
import db from '../controllers/db.js'; // Import db từ file db.js
import { getAllUsers, createUser, updateUser, deleteUser } from '../controllers/userController';
const router = express.Router();

// Hiển thị danh sách người dùng
router.get('/', getAllUsers);

// Thêm người dùng mới
router.post('/', createUser);

// Sửa thông tin người dùng
router.put('/:id', updateUser);

// Xóa người dùng
router.delete('/:id', deleteUser);

// Hiển thị form thêm người dùng
router.get('/new', (req, res) => {
    res.render('userForm'); // Gọi form thêm người dùng
});

// Hiển thị form sửa người dùng
router.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).json({ error: 'Error fetching user' });
        }
        res.render('userForm', { user: results[0] }); // Gọi form sửa người dùng
    });
});

module.exports = router;
