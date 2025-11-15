function compile(code){
  let varriables = {}
  var worldVarriables = {}
  var GlobalVarriables = {}
  let Lines = code.split("\n");
  for(let LineX in Lines) {
    let Line = Lines[LineX]
    //varibles
    variblesTypes = {
      str : /("(.)*")|('(.)*')/, 
      int : /(\d)+( )*/, 
      float : /(\d)+\.(\d)+( )*/, 
      list : /\[( )*(\n)*( )*((.)*( )*(( )*(\n)*( )*,( )*(\n)*( )*(.)*( )*)*(,)?( )*)?( )*(\n)*( )*\]/,
      dict : /\{( )*(\n)*( )*(\w)+( )*:( )*(.)+( )*(,( )*((\n)*( )*(\w)+( )*:( )*(.)+)*)?( )*(\n)*( )*\}/
    }
    const CompoundVariblesType = ["list", "dict"]
    let pattern = /(\w.)*( )*=( )*(\w.)*/;
    let matches = Line.match(pattern);
    for(let each in matches){
      matches[each]
    }
    //maths
    Line
  }
}
