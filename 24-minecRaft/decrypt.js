function decode(plaintext_long, key_long) {
    let plaintext_long0 = plaintext_long[0],
        plaintext_long1 = plaintext_long[1];
    let counter = 2654435769 * 32;
    while (counter != 0) {
        plaintext_long1 -= (((plaintext_long0 << 4) ^ (plaintext_long0 >>> 5)) + plaintext_long0) ^ (counter + key_long[(counter >>> 11) & 3]);
        counter -= 2654435769;
        plaintext_long0 -= (((plaintext_long1 << 4) ^ (plaintext_long1 >>> 5)) + plaintext_long1) ^ (counter + key_long[counter & 3]);
    }
    (plaintext_long[0] = plaintext_long0), (plaintext_long[1] = plaintext_long1);
}

String.prototype.decrypt = function (key) {
    let cipher_long = new Array(2);
    let key_long = new Array(4);
    let rst = '';
    let ciphertext = escape(this);
    for (var i = 0; i < 4; i++)
        key_long[i] = Str4ToLong(
            key.slice(i * 4, (i + 1) * 4)
        );
    for (var i = 0; i < ciphertext.length; i += 16) {
        cipher_long[0] = Base16ToLong(ciphertext.slice(i, i + 8));
        cipher_long[1] = Base16ToLong(ciphertext.slice(i + 8, i + 16));
        decode(cipher_long, key_long);
        rst += LongToStr4(cipher_long[0]) + LongToStr4(cipher_long[1]);
    }
    return rst;
}