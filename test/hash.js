/**
 * Created by coolbong on 2014. 6. 30..
 */
var crypto  = require('../node_crypto');
var assert = require("assert");

var message;
var answer;
var result;


exports.hash = {
    'sha': {
        'sha1' : function() {
            message = new Buffer("", "hex");
            answer = new Buffer("DA39A3EE5E6B4B0D3255BFEF95601890AFD80709", "hex");
            result = crypto.hash('sha1', message);
            assert(answer.toString('hex') == result.toString('hex'));


            message = new Buffer("61", "hex");
            answer = new Buffer("86F7E437FAA5A7FCE15D1DDCB9EAEAEA377667B8", "hex");
            result = crypto.hash('sha1', message);
            assert(answer.toString('hex') == result.toString('hex'));

            message = new Buffer("616263", "hex");
            answer = new Buffer("A9993E364706816ABA3E25717850C26C9CD0D89D", "hex");
            result = crypto.hash('sha1', message);
            assert(answer.toString('hex') == result.toString('hex'));

            message = new Buffer("6162636465666768696A6B6C6D6E6F707172737475767778797A", "hex");
            answer = new Buffer("32D10C7B8CF96570CA04CE37F2A19D84240D3A89", "hex");
            result = crypto.hash('sha1', message);
            assert(answer.toString('hex') == result.toString('hex'));
        },
        'sha224' : function() {
            message = new Buffer("616263", "hex");
            answer = new Buffer("23097D223405D8228642A477BDA255B32AADBCE4BDA0B3F7E36C9DA7", "hex");
            result = crypto.hash('sha224', message);
            assert(answer.toString('hex') == result.toString('hex'));
        },
        'sha256'  : function() {
            message = new Buffer("616263", "hex");
            answer = new Buffer("BA7816BF8F01CFEA414140DE5DAE2223B00361A396177A9CB410FF61F20015AD", "hex");
            result = crypto.hash('sha256', message);
            assert(answer.toString('hex') == result.toString('hex'));
        },
        'sha384' : function() {
            message = new Buffer("616263", "hex");
            answer = new Buffer("CB00753F45A35E8BB5A03D699AC65007272C32AB0EDED1631A8B605A43FF5BED8086072BA1E7CC2358BAECA134C825A7", "hex");
            result = crypto.hash('sha384', message);
            assert(answer.toString('hex') == result.toString('hex'));
        },
        'sha512' : function() {
            message = new Buffer("616263", "hex");
            answer = new Buffer("DDAF35A193617ABACC417349AE20413112E6FA4E89A97EA20A9EEEE64B55D39A2192992A274FC1A836BA3C23A3FEEBBD454D4423643CE80E2A9AC94FA54CA49F", "hex");
            result = crypto.hash('sha512', message);
            assert(answer.toString('hex') == result.toString('hex'));
        },
    },
    'md5' : function() {
        message = new Buffer("", 'hex');
        answer = new Buffer("D41D8CD98F00B204E9800998ECF8427E", 'hex');
        result = crypto.hash('md5', message);
        assert(answer.toString('hex') == result.toString('hex'));

        message = new Buffer("61", 'hex');
        answer = new Buffer("0CC175B9C0F1B6A831C399E269772661", 'hex');
        result = crypto.hash('md5', message);
        assert(answer.toString('hex') == result.toString('hex'));

        message = new Buffer("616263", 'hex');
        answer = new Buffer("900150983CD24FB0D6963F7D28E17F72", 'hex');
        result = crypto.hash('md5', message);
        assert(answer.toString('hex') == result.toString('hex'));

        message = new Buffer("6162636465666768696A6B6C6D6E6F707172737475767778797A", 'hex');
        answer = new Buffer("C3FCD3D76192E4007DFB496CCA67E13B", 'hex');
        result = crypto.hash('md5', message);
        assert(answer.toString('hex') == result.toString('hex'));
    },



};