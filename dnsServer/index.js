'use strict';
const dotenv = require('dotenv');
const dnsServer = require('./dnsServer');
dotenv.config()

const PORT = process.env.PORT ? process.env.PORT : 15353;
const HOST = process.env.HOST ? process.env.HOST : '0.0.0.0';
const SERVER_PUBLIC_IP = process.env.SERVER_PUBLIC_IP ? process.env.SERVER_PUBLIC_IP : '127.0.0.1';
const UPSTREAM = process.env.UPSTREAM ? process.env.UPSTREAM : '8.8.8.8';

dnsServer(HOST, PORT, SERVER_PUBLIC_IP, UPSTREAM)
