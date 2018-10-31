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
	var colArray = new(Array(inAr.length)),
	col,
	i,
	sum = 0,
	j = 0;

	for ( i = 0; i < inAr[i][j].length; j++) {
		//sets up the array to go through
		col = 0;
		for(col;  col<inAr.length; i++){
			//goes down the column to get the avg
			col++;
			sum = sum +inAr[i][j];
		}
		colArray[j] = sum/col;
	}
	return colArray;
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
