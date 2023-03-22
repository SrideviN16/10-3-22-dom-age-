let mydob=new Date("1997/03/06");
	 let year=mydob.getFullYear();
	 console.log(year);
	 let current=new Date();
	 let cyear=current.getFullYear();
	 console.log(cyear);
	 let age=cyear-year;
	 let bmonth=mydob.getMonth();
	 console.log(bmonth);
	 let cmonth=current.getMonth();
	 console.log(cmonth);
	 if(cmonth>=bmonth)
	 {
	 
	 console.log("your age is:"+ age);
	 }
	 else 
	 {
		 age=age-1;
		 console.log("your age is:"+age);
	 }	