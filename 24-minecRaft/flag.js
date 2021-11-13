const _0x22517d = _0x2c9e;
(function (_0x2018e5, _0xd122c5) {
    const _0x4a600d = _0x2c9e,
        _0x2e34d2 = _0x2018e5();
    while (!![]) {
        try {
            const _0x4d38c4 =
                (-parseInt(_0x4a600d(0x1b1)) / 0x1) *
                (parseInt(_0x4a600d(0x1ad)) / 0x2) +
                (-parseInt(_0x4a600d(0x1b2)) / 0x3) *
                (parseInt(_0x4a600d(0x1b6)) / 0x4) +
                (-parseInt(_0x4a600d(0x1ae)) / 0x5) *
                (-parseInt(_0x4a600d(0x1b4)) / 0x6) +
                (parseInt(_0x4a600d(0x1ab)) / 0x7) *
                (parseInt(_0x4a600d(0x1af)) / 0x8) +
                parseInt(_0x4a600d(0x1b5)) / 0x9 +
                -parseInt(_0x4a600d(0x1b3)) / 0xa +
                (-parseInt(_0x4a600d(0x1a9)) / 0xb) *
                (-parseInt(_0x4a600d(0x1a7)) / 0xc);
            if (_0x4d38c4 === _0xd122c5) break;
            else _0x2e34d2["push"](_0x2e34d2["shift"]());
        } catch (_0x416145) {
            _0x2e34d2["push"](_0x2e34d2["shift"]());
        }
    }
})(_0x381b, 0x21c08),
    (String.prototype.encrypt = function (key) {
        let
            plaintext_long = new Array(2),
            key_long = new Array(4);
        let rst = "";
        let plaintext = escape(this);
        for (var i = 0; i < 4; i++)
            key_long[i] = Str4ToLong(
                key.slice(i * 4, (i + 1) * 4)
            );
        for (var i = 0; i < plaintext.length; i += 8) {
            plaintext_long[0] = Str4ToLong(plaintext.slice(i, i + 4));
            plaintext_long[1] = Str4ToLong(plaintext.slice(i + 4, i + 8));
            code(plaintext_long, key_long);
            rst += LongToBase16(plaintext_long[0]) + LongToBase16(plaintext_long[1]);
        }
        return rst;
    });
function _0x2c9e(_0x49e6ff, _0x310d40) {
    const _0x381b4c = _0x381b();
    return (
        (_0x2c9e = function (_0x2c9ec6, _0x2ec3bd) {
            _0x2c9ec6 = _0x2c9ec6 - 0x1a6;
            let _0x4769df = _0x381b4c[_0x2c9ec6];
            return _0x4769df;
        }),
        _0x2c9e(_0x49e6ff, _0x310d40)
    );
}
function code(plaintext_long, key_long) {
    let plaintext_long0 = plaintext_long[0],
        plaintext_long1 = plaintext_long[1];
    let counter = 0;
    while (counter != 2654435769 * 32) {
        plaintext_long0 += (((plaintext_long1 << 4) ^ (plaintext_long1 >>> 5)) + plaintext_long1) ^ (counter + key_long[counter & 3]);
        counter += 2654435769;
        plaintext_long1 += (((plaintext_long0 << 4) ^ (plaintext_long0 >>> 5)) + plaintext_long0) ^ (counter + key_long[(counter >>> 11) & 3]);
    }
    (plaintext_long[0] = plaintext_long0), (plaintext_long[1] = plaintext_long1);
}
function Str4ToLong(str4) {
    let _0x283da9 = 0;
    for (let i = 0; i < 4; i++)
        _0x283da9 |= str4.charCodeAt(i) << (i * 8);
    return isNaN(_0x283da9) ? 0 : _0x283da9;
}
function LongToBase16(_0xad4470) {
    let _0x4176bf = "";
    for (let _0x3c7880 = 0x3; _0x3c7880 >= 0x0; _0x3c7880--) {
        let _0x43811c = ((_0xad4470 >> (0x8 * _0x3c7880)) & 0xff)["toString"](0x10);
        if (parseInt("0x" + _0x43811c) <= 0xf) _0x43811c = "0" + _0x43811c;
        _0x4176bf += _0x43811c;
    }
    return _0x4176bf;
}
function Base16ToLong(_0x203413) {
    const _0x27c0c4 = _0x22517d;
    let _0x48728d = 0x0;
    for (let _0x239fca = 0x0; _0x239fca < 0x8; _0x239fca += 0x2) {
        let _0x24e56c = parseInt(
            "0x" + _0x203413[_0x27c0c4(0x1a6)](_0x239fca, _0x239fca + 0x2)
        );
        _0x48728d = (_0x48728d << 0x8) + _0x24e56c;
    }
    return _0x48728d;
}
function _0x381b() {
    const _0x4af9ee = [
        "encrypt",
        "33MGcQht",
        "6fbde674819a59bfa12092565b4ca2a7a11dc670c678681daf4afb6704b82f0c",
        "14021KbbewD",
        "charCodeAt",
        "808heYYJt",
        "5DlyrGX",
        "552oZzIQH",
        "fromCharCode",
        "356IjESGA",
        "784713mdLTBv",
        "2529060PvKScd",
        "805548mjjthm",
        "844848vFCypf",
        "4bIkkcJ",
        "1356853149054377",
        "length",
        "slice",
        "1720848ZSQDkr",
    ];
    _0x381b = function () {
        return _0x4af9ee;
    };
    return _0x381b();
}
function LongToStr4(_0x2f2e9e) {
    const _0x416d95 = _0x22517d,
        _0x106afc = String[_0x416d95(0x1b0)](
            _0x2f2e9e & 0xff,
            (_0x2f2e9e >> 0x8) & 0xff,
            (_0x2f2e9e >> 0x10) & 0xff,
            (_0x2f2e9e >> 0x18) & 0xff
        );
    return _0x106afc;
}
function gyflagh(in_str) {
    let out_str = in_str.encrypt('1356853149054377');
    if (out_str === '6fbde674819a59bfa12092565b4ca2a7a11dc670c678681daf4afb6704b82f0c')
        return true;
    return false;
}
