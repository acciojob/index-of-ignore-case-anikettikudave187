function indexOfIgnoreCase(s1, s2) {
  const lowerStr = s1.toLowerCase();
    const lowerSubStr = s2.toLowerCase();

    // Use the standard indexOf method on the lowercase versions
    return lowerStr.indexOf(lowerSubStr);
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
