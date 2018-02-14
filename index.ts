/* variable */
let level: number = 0;
let price: number = 5000;
let item: number = 4;

/* type enum */
enum Level {
	Normal = 0,
	VIP = 1
}

class Shopping {
	Calculate(price:number, item: number){
		return price*item;
	}
}


/* VIP class */
class VIP extends Shopping {
	CalculateV(Item: number, Price: number):void {
		let total: number;
		total = super.Calculate(Item, Price);
		if(total >= 500){
			total = total*0.8;
			console.log(total);
		}else{
			console.log('Not enough money');
		}
	}
}

/* General class*/
class General extends Shopping {
	CalculateG(Item: number, Price: number):void {
		let total: number;
		total = super.Calculate(Item, Price);
		if(item > 3 && total >= 1000){
			total = total*0.85;
			console.log(total);
		}else{
			console.log('Not enough item or money');
		}
	}
}

/* judgment */
if(level === Level.Normal){
	new General().CalculateG(this.item, this.price);
}

if(level === Level.VIP){
	new VIP().CalculateV(this.item, this.price);
}






