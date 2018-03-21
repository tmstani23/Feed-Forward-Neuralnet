function setup() {
    let a = new Matrix(2, 3);
    a.randomize();
    let b = a.transpose();
    console.table(a.matrix);
    console.table(b.matrix);
    // let b = new Matrix(3, 2);
    // b.randomize();
    // console.table(a.matrix);
    // console.table(b.matrix);

    // let c = a.multiply(b);
    // console.table(c.matrix);
    
}

function draw() {

}