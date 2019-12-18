function obj(prop11, prop21, prop31) {
    this.prop11 = prop11;
    this.prop21 = prop21;
    this.prop31 = prop31;
};

let first = new obj("1.1", "2.1", "3");

const second={
    "prop12": 1.2,
    "prop22": 2.2,
    "prop33": 3.2,
    "prop44": 4.2
    };

let res = {...first, ...second};

console.log(res);