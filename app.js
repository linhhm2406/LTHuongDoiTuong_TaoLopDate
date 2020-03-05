let MyDate = function (day ,month, year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.getday = function () {
        return this.day;
    };
    this.getmonth = function () {
        return this.month;
    };
    this.getyear = function () {
        return this.year;
    };
    this.getDate = function () {
        if(this.day.toString().length ===1){
            this.day = '0' + this.day;}
        if (this.month.toString().length===1){
            this.month= '0' + this.month}
        return (this.day + '/'+this.month + '/' + this.year);
    };

    this.setday = function (day) {
        this.day = day;
    };
    this.setmonth = function (month) {
        this.month = month;
    };
    this.setyear = function (year) {
        this.year = year;
    };
    this.setDate = function (day,month,year) {
        this.day = day;
        this.month = month;
        this.year = year;
    };
};

let input_Date = new MyDate(2,12,1970);
let day = input_Date.getday();
let month = input_Date.getmonth();
let year = input_Date.getyear();

alert(day + '/'+ month + '/' + year);

input_Date.setday(3);
input_Date.setmonth(5);
input_Date.setyear(1990);

alert(input_Date.getday() + '/'+ input_Date.getmonth() + '/' + input_Date.getyear());

input_Date.setDate(5,12,1902);
alert(input_Date.getDate());