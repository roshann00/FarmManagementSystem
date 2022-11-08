var names=new Array();
names[0]="Yasar";
names[1]="John";
names[2]="Jacob";
names[3]="justin";
names[4]="Paul";
names[5]="Frenchie";
names[6]="Linda";
names[7]="Perry";
names[8]="jules";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
