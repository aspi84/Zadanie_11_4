function Phone(brand, price, color, interface) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.interface = interface;
}

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", the price is " + this.price + ", and it's interface is " + this.interface + "." );
};

var SamsungGalaxyS6 = new Phone("Samsung", 1650, "white", "TouchWiz");
var iPhone6S = new Phone("Apple", 2250, "silver", "IK Multimedia iRig PRO" );
var OnePlusOne = new Phone("One Plus", 1250, "black", "CyanogenMod ");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();