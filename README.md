# What is cryptography in Node.js?

Cryptography is the process of converting plain text into unreadable text and vice-versa. This way, only the sender and receiver of the information understand its content.

With cryptography in Node.js, you can hash passwords and store them in the database so that data cannot be converted to plain text after it is hashed; it can only be verified. When malicious actors get ahold of your database, they cannot decode the encrypted information. You, can also encrypt other user data so that it can be decrypted during transmission.

The kind of encryption you employ on your application depends on your needs. For instance, cryptography can be symmetric-key (such as hashing), public-key (such as encrypting or decrypting), and so on.

An end party that receives encrypted data can decrypt it to plain text for their consumption. Cybercriminals cannot decrypt encrypted data if they do not have the key. This is exactly what the Node.js crypto module does.

# What is the Node.js crypto module?

The Node.js crypto module provides cryptographic functions to help you secure your Node.js app. It includes a set of wrappers for OpenSSL’s hash, HMAC, cipher, decipher, sign, and verify functions.

crypto is built into Node.js, so it doesn’t require rigorous implementation process and configurations. Unlike other modules, you don’t need to install Crypto before you use it in your Node.js application.

crypto allows you to hash plain texts before storing them in the database. For this, you have a hash class that can create fixed length, deterministic, collision-resistant, and unidirectional hashes. For hashed data, a password cannot be decrypted with a predetermined key, unlike encrypted data. An HMAC class is responsible for Hash-based Message Authentication Code, which hashes both key and values to create a single final hash.

You may need toencrypt and decrypt other user data later for transmission purposes. This is where the Cipher and Decipher classes come in. You can encrypt data with the Cipher class and decrypt it with the Decipher class. Sometimes, you may not want to encrypt data before storing them in the database.

You can also verify encrypted or hashed passwords to ensure they are valid. All you need is the Verify class. Certificates can also be signed with thesign class.

All these are reasons developers love to use the crypto module. Let’s explore the various crypto classes and discover how to implement cryptography with them.

# Node.js crypto classes


Let us look at the classes in crypto that enable us to implement cryptography.

# Cipher
The Cipher class is responsible for encrypting information. When the user inputs a password during registration, the C``ipher class is called to encrypt the password.

First, we’ll generate a key from an algorithm. After that, we’ll generate a random initialization number (iv) before encrypting the text.

To use this class, you have to create a cipher instance using either the crypto.createCipher() or crypto.createCipheriv(). It‘s advised to use crypto.createCipheriv() since crypto.createCipher() is depreciated.

# Decipher
The Decipher class is responsible for decrypting encrypted texts. When you intend to send information securely to another developer, you have to encrypt it. The only way the receiver of the information can read the information is to decrypt it. This is exactly what the Decipher class does.

You cannot create decipher objects directly with the new keyword. The crypto.createDecipher() or crypto.createDecipheriv() methods are used to create decipher instances.

crypto.createDecipher() is depreciated, so you should use the crypto.createdeCipheriv() method instead.



