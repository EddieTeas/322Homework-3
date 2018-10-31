function start()
{
 var rows = prompt( "Number of rows", 1 ),
 cols = prompt( "Number of columns", 1 ),
 inAr;
 inAr = inputArray(rows, cols);
 sumAll( inAr );
 rowSum( inAr );
 colSum( inAr );
}

function sumAll( inAr ){
	var total = 0,
	i,
	j;
	for( i = 0; i < inAr.length; i++){
		for( j=0; j< inAr[i].length; j++){
			total = total +inAr[i][j];
		}
	}
	return total;
}

function rowAVG(inAr){
	car colArray = new(Array(inAr.length)),
		col,
		i = 0,
		j = 0;
		

}

function colSum(inAr){
	 var rowArray = new Array(inAr.length),
		 rowAVG = new Array(inAr.length),
		 row;

		 for (var i = 0; i < inAr.length; i++) {
				row = 0;
				for (var j = 0; j < inAr[i].length; j++) {
			 		row = row + inAr[i][j];
				}
				rowArray[i] = row;
		 }
		 return rowArray;
}