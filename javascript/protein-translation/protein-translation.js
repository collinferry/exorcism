export function translate(input){
  //if empty, return blank array
  if (typeof input === 'undefined'){ return []; }

  //Map codon/protein relationships (and STOP codons)
  var sequenceMap = {
    "AUG": "Methionine",
    "UUU": "Phenylalanine",
    "UUC": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan",
    "UAA": "STOP",
    "UAG": "STOP",
    "UGA": "STOP",
  }

  //Break input into codon array (dividing every three chars)
  var codons = (input.match(/.{1,3}/g));

  //Loop through array and build protein array (until you reach STOP codon)
  var proteins = [];

  for(var i=0; i<codons.length; i++){
    var sequence = codons[i];

    // console.log(sequenceMap[sequence]);
    if (!sequenceMap[sequence]){ throw new Error("Invalid codon"); }

    if(sequenceMap[sequence] == "STOP"){ break; }
    else {
      proteins.push(sequenceMap[sequence]);
    }
  }

  return proteins;

  // throw new Error("Remove this statement and implement this function");
};

// translate('LOL');
