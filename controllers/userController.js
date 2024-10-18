const bcrypt = require('bcrypt');
const db = require('./db');

// Hiển thị tất cả người dùng
const getAllUsers = (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching users:', err);
            return res.status(500).json({ error: 'Error fetching users' });
        }
        res.render('userList', { users: results });
    });
};

// Thêm người dùng mới
const createUser = async (req, res) => {
    const { username, password, fullname, address, sex, email } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    
    db.query('INSERT INTO users (username, password, fullname, address, sex, email) VALUES (?, ?, ?, ?, ?, ?)',
        [username, hashedPassword, fullname, address, sex, email],
        (err, results) => {
            if (err) {
                console.error('Error inserting user:', err);
                return res.status(500).json({ error: 'Error inserting user' });
            }
            res.redirect('/users'); // Quay lại danh sách người dùng
        });
};

// Sửa thông tin người dùng
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, fullname, address, sex, email } = req.body;

    db.query('UPDATE users SET username = ?, fullname = ?, address = ?, sex = ?, email = ? WHERE id = ?',
        [username, fullname, address, sex, email, id],
        (err, results) => {
            if (err) {
                console.error('Error updating user:', err);
                return res.status(500).json({ error: 'Error updating user' });
            }
            res.redirect('/users'); // Quay lại danh sách người dùng
        });
};

// Xóa người dùng
const deleteUser = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error('Error deleting user:', err);
            return res.status(500).json({ error: 'Error deleting user' });
        }
        res.redirect('/users'); // Quay lại danh sách người dùng
    });
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
