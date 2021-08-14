/*
*********************************************************************************************

Write a recursive function that checks whether a string A is a palindrome or Not.
Return 1 if the string A is palindrome, else return 0.

Note: A palindrome is a string that's the same when reads forwards and backwards.

Constraints:
  1 <= A <= 50000
  String A consist only of lowercase letters.

Example: 
  I/P: A = "naman"
  O/P: 1

  I/P: A = "strings"
  O/P: 0
 
*********************************************************************************************
*/

function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    if (str[l] !== str[r]) return 0;
    l++;
    r--;
  }
  return 1;
}

function isPalindrome_recursive1(str, l = 0, r = str.length - 1) {
  if (l === r) return 1;
  if (str[l] !== str[r]) return 0;
  if (l > r) return 1;
  return isPalindrome_recursive1(str, l + 1, r - 1);
}

function isPalindrome_recursive2(str) {
  if (str.length === 1 || str.length === 0) return 1;
  if (str[0] !== str[str.length - 1]) return 0;

  return isPalindrome_recursive1(str.slice(1, str.length - 1));
}

const str =
  "mnschgziwincvcrhegtkkgzuewasvstiogqaijvtvikjjivatyqbnsrnfcrhxlkkrrqrmzemiqbujbktdnejobxtcjiibcfynrfxbbqwujyleetwwalbuewgewkdrefcdptqgpqhqvguniapbdzdxexeealxmtbmlsdihyllmnmltghyetghrtmpimqepumuzvkdmxvyoweexxckmyqtirjnebodjmuzozmvypdcalffowunzrlflvmimxhemvlhobeenpcvynchlxpsdvlmeddahnvkspuqhgrxdukrhtbtlpxyblucxuyoowsxgtqeiotylvonaublmozlvwsphfilxfncegpleebaiufdjmpiolgdbfcshbwjchuxumyxhhrujifbcehsniqpghdztvztxvliztiqzwaktqohpntxeyfeaijldzhnsyvhjixlymtmrfvzlqgdomawrfddcagjagvcfhbyqgixyqbbpyjijeviyhwrignduetolptfyvmklmdrxqvrdnwssvgujqfwukneddqdvvqxxmuhtxuiufbqxswstgrykpoeiizmbpoturgrnvsshhzoppyktljqxxuhcdfsmesaimxicxfslnfagdfaoczbhivhxmotzbpulduuczfyeijkkcwmqqtrqstwiqmkatyjotoexkeesprwzfxwzshwlqfssryxxvybnrxdiuusvnnlfabkpynsakpnftjqhecuwmyqgwhyrtudmkfcphnnyxqxzxbucfewihqmjjnblrmyertspotzfgzvabnhcxklqdlbtvvqwynenkkhxcjsndltankzkmrkknbkxjqzabatkcdvodhzzmqqcfwshhufezzddzrfldwxylaylpfqpiczfmyymfzcipqfplyalyxwdlfrzddzzefuhhswfcqqmzzhdovdcktabazqjxkbnkkrmkzknatldnsjcxhkknenywqvvtbldqlkxchnbavzgfztopstreymrlbnjjmqhiwefcubxzxqxynnhpcfkmdutryhwgqymwucehqjtfnpkasnypkbaflnnvsuuidxrnbyvxxyrssfqlwhszwxfzwrpseekxeotojytakmqiwtsqrtqqmwckkjieyfzcuudlupbztomxhvihbzcoafdgafnlsfxcixmiasemsfdchuxxqjltkyppozhhssvnrgrutopbmziieopkyrgtswsxqbfuiuxthumxxqvvdqddenkuwfqjugvsswndrvqxrdmlkmvyftploteudngirwhyivejijypbbqyxigqybhfcvgajgacddfrwamodgqlzvfrmtmylxijhvysnhzdljiaefyextnphoqtkawzqitzilvxtzvtzdhgpqinshecbfijurhhxymuxuhcjwbhscfbdgloipmjdfuiabeelpgecnfxlifhpswvlzomlbuanovlytoieqtgxswooyuxculbyxpltbthrkudxrghqupskvnhaddemlvdspxlhcnyvcpneebohlvmehxmimvlflrznuwofflacdpyvmzozumjdobenjritqymkcxxeewoyvxmdkvzumupeqmipmtrhgteyhgtlmnmllyhidslmbtmxlaeexexdzdbpainugvqhqpgqtpdcferdkwegweublawwteelyjuwqbbxfrnyfcbiijctxbojendtkbjubqimezmrqrrkklxhrcfnrsnbqytavijjkivtvjiaqgoitsvsaweuzgkktgehrcvcniwizghcsnm";

console.log("Palindrome Result: ", isPalindrome(str));

console.log("Palindrome Result 1: ", isPalindrome_recursive1(str));

console.log("Palindrome Result 2: ", isPalindrome_recursive2(str));
