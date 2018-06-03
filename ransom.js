function isAlpha(char) {
  return /[a-zA-Z]/.test(char);
}

function canRansom(magazine, note) {
  if (!note) return true; //empty note
  if (!magazine) return false; //note but no magazine
  
  let letters =  new Map();
  for (let i = 0; i < note.length; i++) {
    const c = note.charAt(i);
    if (isAlpha(c)) {
      const upper = c.toUpperCase();
      
      if (letters.has(upper)) {
        letters.set(upper, letters.get(upper) + 1);
      } else {
        letters.set(upper, 1);
      }
    }
  }
    
  for (let i = 0; i < magazine.length; i++) {
    const c = magazine.charAt(i);
    if (isAlpha(c)) {
      const upper = c.toUpperCase();
      if (letters.has(upper)) {
        if (letters.get(upper) == 1) {
          letters.delete(upper);
        } else {
          letters.set(upper, letters.get(upper) - 1);
        }
      }
    }
    
    if(letters.size == 0) return true;
  }
  
  return false;
}

const note = "Hello you";
const magazine = "He will lower you into the well";
console.log(canRansom(magazine, note));