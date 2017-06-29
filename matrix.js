//var m = new Matrix(3,2)
//note use console.table(m.matrix) to view the matrix as a table


function Matrix (rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];
    //loop through each row
    for (var i = 0; i < this.rows; i++) {
        //each iteration element is an array 
        //each array is a column
        this.matrix[i] = [];
        
        //loop until value of cols is reached
        for (var j = 0; j < this.cols; j++) {
            //fill the 2d array with 0 values
            this.matrix[i][j] = 0;
        }
    }
}
//Take a single value "n" and add to every element of the matrix by that value
Matrix.prototype.add = function(n) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
        this.matrix[i][j] += n;
        }
    }
}
//Take a single value "n" and multiply every element of the matrix by that value
Matrix.prototype.multiply = function(n) {
    for (var i = 0; i < this.rows; i++) {
        for (var j = 0; j < this.cols; j++) {
        this.matrix[i][j] *= n;
        }
    }
}