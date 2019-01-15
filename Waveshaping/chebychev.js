// translate partial amplitudes into polynomial coefficients 
//for cheby WS

inlets = 8;
outlets = 8;

var c1 = 0.5;
var c2 = 0.0;
var c3 = 0.0;
var c4 = 0.0;
var c5 = 0.0;
var c6 = 0.0;
var c7 = 0.0;
var c8 = 0.0;
var v = new Array();

v[0] = v[1] = v[2] = v[3] = v[4] = v[5] = v[6] = v[7] = 0;

if (jsarguments.length>0) v[0] = jsarguments[0];
if (jsarguments.length>1) v[1] = jsarguments[1];
if (jsarguments.length>2) v[2] = jsarguments[2];
if (jsarguments.length>3) v[3] = jsarguments[3];
if (jsarguments.length>4) v[4] = jsarguments[4];
if (jsarguments.length>5) v[5] = jsarguments[5];
if (jsarguments.length>6) v[6] = jsarguments[6];
if (jsarguments.length>6) v[7] = jsarguments[7];

function msg_float(f){
	v[inlet] = f;
	bang();
}

function list(){
	if (arguments.length>0) v[0] = arguments[0];
	if (arguments.length>1) v[1] = arguments[1];
	if (arguments.length>2) v[2] = arguments[2];
	if (arguments.length>3) v[3] = arguments[3];
	if (arguments.length>4) v[4] = arguments[4];
	if (arguments.length>5) v[5] = arguments[5];
	if (arguments.length>6) v[6] = arguments[6];
	if (arguments.length>7)v[7] = arguments[7];
		
	bang();	
}

function bang(){
	c1 = v[0]-3*v[2]+5*v[4]-7*v[6]; 
	c2 = 2*v[1]-8*v[3]+18*v[5]-32*v[7];
	c3 = 4*v[2]-20*v[4]+56*v[6];
	c4 = 8*v[3]-48*v[5]+160*v[7];
	c5 = 16*v[4]-112*v[6];
	c6 = 32*v[5]-256*v[7];
	c7 = 64*v[6];
	c8 = 128*v[7];	
	
	outlet(0,c1);
	outlet(1,c2);
	outlet(2,c3);
	outlet(3,c4);
	outlet(4,c5);
	outlet(5,c6);
	outlet(6,c7);
	outlet(7,c8);
}