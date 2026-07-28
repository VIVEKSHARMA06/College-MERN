// Q1. Check if a string is palindrome
function ques1(str) {
    return str === str.split("").reverse().join("");
}

// Q2. Reverse a string
function ques2(str) {
    return str.split("").reverse().join("");
}

// Q3. Check if two strings are anagrams
function ques3(str1, str2) {
    str1 = str1.toLowerCase().split("").sort().join("");
    str2 = str2.toLowerCase().split("").sort().join("");
    return str1 === str2;
}

// Q4. Return the longest word
function ques4(str) {
    let words = str.split(" ");
    let longest = "";

    for (let word of words) {
        if (word !== "" && word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

// Q5. Count number of words
function ques5(str) {
    str = str.trim();

    if (str === "") return 0;

    return str.split(" ").filter((word) => word !== "").length;
}

// Q6. Capitalize first letter of each word
function ques6(str) {
    let words = str.trim().split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i] !== "") {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
    }

    return words.join(" ");
}

// Q7. Count vowels
function ques7(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let ch of str) {
        if (vowels.includes(ch)) {
            count++;
        }
    }

    return count;
}

// Q8. Count occurrences of a substring
function ques8(str, sub) {
    return str.split(sub).length - 1;
}

// Q9. Compress string
function ques9(str) {
    let ans = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            ans += str[i] + count;
            count = 1;
        }
    }

    return ans;
}

// Q10. Count occurrences of each letter
function ques10(str) {
    let obj = {};
    str = str.replaceAll(" ", "");

    for (let ch of str) {
        obj[ch] = (obj[ch] || 0) + 1;
    }

    return obj;
}

// Q11. Find first position of character
function ques11(str, ch) {
    return str.indexOf(ch);
}

// Q12. Check string ending
function ques12(str, target) {
    return str.endsWith(target);
}

// Q13. Replace all occurrences of a word
function ques13(originalString, targetWord, newWord) {
    return originalString.replaceAll(targetWord, newWord);
}

// Q14. Remove leading and trailing spaces
function ques14(str) {
    return str.trim();
}

// Q15. Extract first n characters
function ques15(str, n) {
    return str.slice(0, n);
}

// Q16. Mask all but last 4 characters
function ques16(str) {
    return "#".repeat(str.length - 4) + str.slice(-4);
}

// Q17. Check if sentence contains a word (case-insensitive)
function ques17(sentence, word) {
    return sentence.toLowerCase().includes(word.toLowerCase());
}

// Q18. Remove all occurrences of a character
function ques18(str, ch) {
    return str.split(ch).join("");
}

// Q19. Repeat string
function ques19(str, count) {
    return str.repeat(count);
}

// Q20. Toggle case
function ques20(str) {
    let ans = "";

    for (let ch of str) {
        if (ch >= "A" && ch <= "Z") {
            ans += ch.toLowerCase();
        } else if (ch >= "a" && ch <= "z") {
            ans += ch.toUpperCase();
        } else {
            ans += ch;
        }
    }

    return ans;
}
