const express = require('express')
const router = express.Router()
const {
  getNotes,
  setNotes,
  updateNotes,
  deleteNotes,
} = require('../controllers/noteController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getNotes).post(protect, setNotes)
router.route('/:id').delete(protect, deleteNotes).put(protect, updateNotes)

module.exports = router
