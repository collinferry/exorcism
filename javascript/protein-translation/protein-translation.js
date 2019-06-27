function translate(input){
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

  //Break input into codon array
  var codons = (input.match(/.{1,3}/g));
  console.log(codons);

  //Loop through array and buiid protein array (until you reach STOP codon)
  var proteins = [];
  for(var i=0; i<codons.length; i++){
    var loc = codons[i];
    if(sequenceMap[loc] == "STOP"){ return proteins; }
    else {
      proteins.push(sequenceMap.codons[i]);
    }
  }

  throw new Error("Remove this statement and implement this function");
};

translate('AUGUUA');
