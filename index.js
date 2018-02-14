var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* variable */
var level = 0;
var price = 5000;
var item = 4;
/* type enum */
var Level;
(function (Level) {
    Level[Level["Normal"] = 0] = "Normal";
    Level[Level["VIP"] = 1] = "VIP";
})(Level || (Level = {}));
var Shopping = /** @class */ (function () {
    function Shopping() {
    }
    Shopping.prototype.Calculate = function (price, item) {
        return price * item;
    };
    return Shopping;
}());
/* VIP class */
var VIP = /** @class */ (function (_super) {
    __extends(VIP, _super);
    function VIP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VIP.prototype.CalculateV = function (Item, Price) {
        var total;
        //this.item = Item;
        //this.price = Price;
        total = _super.prototype.Calculate.call(this, Item, Price);
        if (total >= 500) {
            total = total * 0.8;
            console.log(total);
        }
        else {
            console.log('Not enough money');
        }
    };
    return VIP;
}(Shopping));
/* General class*/
var General = /** @class */ (function (_super) {
    __extends(General, _super);
    function General() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    General.prototype.CalculateG = function (Item, Price) {
        var total;
        //this.item = Item;
        //this.price = Price;
        total = _super.prototype.Calculate.call(this, Item, Price);
        if (item > 3 && total >= 1000) {
            total = total * 0.85;
            console.log(total);
        }
        else {
            console.log('Not enough item or money');
        }
    };
    return General;
}(Shopping));
/* judgment */
if (level === Level.Normal) {
    new General().CalculateG(this.item, this.price);
}
if (level === Level.VIP) {
    new VIP().CalculateV(this.item, this.price);
}
