export function translate(input) {
  //if empty, return blank array
  if (typeof input === 'undefined') {
    return [];
  }

  //define variables to hold codons, proteins, and their relationships
  var codons = (input.match(/.{1,3}/g)); //Break input by dividing every three chars
  var proteins = [];
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

  //Build protein array (until reaching STOP or invalid codon)
  for (var i = 0; i < codons.length; i++) {
    var sequence = codons[i];

    if (!sequenceMap[sequence]) {
      throw new Error("Invalid codon");
    }

    if (sequenceMap[sequence] == "STOP") {
      break;
    } else {
      proteins.push(sequenceMap[sequence]);
    }
  }

  return proteins;

};
