const router = require("express").Router();
const db = require("../models");

const path = require("path");

const PUBLIC_DIR = path.resolve(__dirname, "../public");

router.get('/exercise', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'exercise.html')))

router.get('/stats', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'stats.html')))

router.get('*', (req, res) => res.sendFile(path.join(PUBLIC_DIR, 'index.html')))

module.exports = router;