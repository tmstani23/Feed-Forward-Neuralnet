//let m = new Matrix(3,2)
//note use console.table(m.matrix) to view the matrix as a table

class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.matrix = [];
        //loop through each row
        for (let i = 0; i < this.rows; i++) {
            //each iteration element is an array 
            //each array is a column
            this.matrix[i] = [];
            
            //loop until value of cols is reached
            for (let j = 0; j < this.cols; j++) {
                //fill the 2d array with 0 values
                this.matrix[i][j] = 0;
            }
        }
    }

    randomize(n) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                //fill the matrix with random values between 0 and 10
                //math.floor rounds numbers down to the nearest whole
                //math.random returns a number between 0 and 1
                this.matrix[i][j] = Math.floor(Math.random() * 10);
            }
        }
    }



    add(n) {
        //if n is a matrix:
        if (n instanceof Matrix) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    //add all the values from the first matrix 
                    //by the values of the second matrix
                    this.matrix[i][j] += n.matrix[i][j];
                }
            }    
        } 
        //Take a single value "n" and add to every element of 
        //the matrix by that value
        else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                this.matrix[i][j] += n;
                }
            }
        }
    }

    multiply(n) {
        
        if (n instanceof Matrix) {
            for (let i = 0; i < this.rows; i++) {
                //multiply all the values from the first matrix 
                //by the values of the second matrix
                for (let j = 0; j < this.cols; j++) {
                this.matrix[i][j] *= n.matrix[i][j];
                }
            }
        }
        else {
            //Take a single value "n" and multiply every 
            //element of the matrix by that value    
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                this.matrix[i][j] *= n;
                }
            }
        }
    }
}