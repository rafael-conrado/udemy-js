function soma(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number' ) {
        throw new error("X e Y precisam ser números")
    };
    return x+y;
}

try{
    console.log(soma(25,12));
    console.log(soma('asd',43));
} catch(error){
   // console.log(error);
   console.log("está errado pô")
}