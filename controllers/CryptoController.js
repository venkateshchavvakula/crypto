const crypto = require('crypto')


class CryptoController {

    static async getCiphers(request, response) {

        try {
            return response.status(200).send(await crypto.getCiphers());
        } catch (error) {
            return response.status(500).send("Internal Server Error");
        }

    }

    static async createCipher(request,response) {
        try {

        } catch (error) {
            return response.status(500).send("Internal Server Error");
        }
    }
}
module.exports = CryptoController;
