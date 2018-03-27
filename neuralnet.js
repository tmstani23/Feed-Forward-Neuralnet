function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}

function dsigmoid(y) {
    return y * (1-y);
}



class NeuralNetwork {
    constructor(input_nodes, hidden_nodes, output_nodes) {
        this.input_nodes = input_nodes;
        this.hidden_nodes = hidden_nodes;
        this.output_nodes = output_nodes;

        this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes);
        this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes);
        this.weights_ih.randomize();
        this.weights_ho.randomize();

        this.bias_h = new Matrix(this.hidden_nodes, 1);
        this.bias_o = new Matrix(this.output_nodes, 1);
        this.bias_h.randomize();
        this.bias_o.randomize();
        this.learning_rate = 0.1;

    }

    feedforward(input_array) {
        
        //Generating the Hidden Outputs
        let inputs = Matrix.fromArray(input_array);
        let hidden = Matrix.multiply(this.weights_ih, inputs);
        hidden.add(this.bias_h);
        //Activation Function
        hidden.map(sigmoid);
        //Generating the output
        let output = Matrix.multiply(this.weights_ho, hidden);
        output.add(this.bias_o);
        output.map(sigmoid);
        //Sending it back to the caller.
        return output.toArray();
    }

    train(input_array, target_array) {
        //Generating the Hidden Outputs
        let inputs = Matrix.fromArray(input_array);
        
        let hidden = Matrix.multiply(this.weights_ih, inputs);
        hidden.add(this.bias_h);
        //Activation Function
        hidden.map(sigmoid);
        
        //Generating the output
        let outputs = Matrix.multiply(this.weights_ho, hidden);
        outputs.add(this.bias_o);
        outputs.map(sigmoid);
        
        //Convert array to matrix object:
        let targets = Matrix.fromArray(target_array);
        //Calculate the error:
        //Error = Targets- Outputs
        let output_errors = Matrix.subtract(targets, outputs);
        
        //Calculate gradient:
        let gradients = Matrix.map(outputs, dsigmoid);
        gradients.multiply(output_errors);
        gradients.multiply(this.learning_rate);


        //Calculate Deltas:
        let hidden_T = Matrix.transpose(hidden);
        let weight_ho_deltas = Matrix.multiply(gradients, hidden_T);

        //Adjust the weights by deltas:
        this.weights_ho.add(weight_ho_deltas);
        //Adjust the bias by its delta
        this.bias_o.add(gradients);

        //Calculate the hidden layer error:
        let who_t = Matrix.transpose(this.weights_ho);
        let hidden_errors = Matrix.multiply(who_t, output_errors);
        
        //Calculate Hidden Gradient:
        let hidden_gradient = Matrix.map(hidden, dsigmoid);
        hidden_gradient.multiply(hidden_errors);
        hidden_gradient.multiply(this.learning_rate);

        //Calculate input>hidden deltas:
        let inputs_T = Matrix.transpose(inputs);
        let weight_ih_deltas = Matrix.multiply(hidden_gradient, inputs_T);

        this.weights_ih.add(weight_ih_deltas);

        //Adjust the bias by its deltas:
        this.bias_h.add(hidden_gradient);


        // targets.print();
        // outputs.print();
        // error.print();
        // console.log(outputs.data[0]);
        // console.log(targets.data[0]);
        // console.log(error.data[0]);
        
    }
}

   
