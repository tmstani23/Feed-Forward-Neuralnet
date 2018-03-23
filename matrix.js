//let m = new Matrix(3,2)
//note use console.table(m.matrix) to view the matrix as a table

class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];
        //loop through each row
        for (let i = 0; i < this.rows; i++) {
            //each iteration element is an array 
            //each array is a column
            this.data[i] = [];
            
            //loop until value of cols is reached
            for (let j = 0; j < this.cols; j++) {
                //fill the 2d array with 0 values
                this.data[i][j] = 0;
            }
        }
    }


    static fromArray(arr) {
        let m = new Matrix(arr.length, 1);
        for(let i=0; i < arr.length; i++) {
            m.data[i][0] = arr[i];
        }
        
        return m;
    }

    toArray() {
        let arr = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                arr.push(this.data[i][j]); 
            }
        }
        return arr;
    }

    randomize(n) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                
                //randomize returns a number between -1 and 1:
                this.data[i][j] = Math.random() * 2 - 1;
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
                    this.data[i][j] += n.data[i][j];
                }
            }    
        } 
        //Take a single value "n" and add to every element of 
        //the matrix by that value
        else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                this.data[i][j] += n;
                }
            }
        }
    }

    static transpose(matrix) {
        let result = new Matrix(this.cols, this.rows);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
            result.data[j][i] = this.data[i][j];
            }
        }
        return result;
    }

    static multiply(a, b) {
        //Matrix product
        if (a.cols !== b.rows) {
            console.log("Columns of A must match Rows of B");
            return undefined;
        }
            
        let result = new Matrix(a.rows, b.cols);
        for (let i = 0; i < result.rows; i++) {
            for (let j = 0; j < result.cols; j++) {
                let sum = 0;
                for(let k = 0; k < a.cols; k++) {
                    sum += a.data[i][k] * b.data[k][j];
                }
                result.data[i][j] = sum;
            }
        }
        return result;
    }
        
    multiply(n) {
        if (n instanceof Matrix) {
          // hadamard product
          for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
              this.data[i][j] *= n.data[i][j];
            }
          }
        } else {
          // Scalar product
          for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
              this.data[i][j] *= n;
            }
          }
        }
    }
    
    map(func) {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                let val = this.data[i][j];
                this.data[i][j] = func(val);
            }
        }
    }


}

