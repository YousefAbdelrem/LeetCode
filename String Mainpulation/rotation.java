public class StringUtility {
    public static int countVowels(String s){
        String vowels = "aeiou";
        int counter = 0;
        for(char ch : s.toLowerCase().toCharArray()){
            if( vowels.indexOf(ch) != -1) counter++;
        }
        return counter;
    }
    public static String reverse(String s){
        String rev = "";

        for(int i = s.length() - 1; i >= 0; i--){
            rev += s.charAt(i);
        }
        return rev;
    }
    public static String reverseString(String s){
        StringBuilder rev = new StringBuilder();
        for(int i = s.length() - 1; i >= 0; i--){
           rev.append(s.charAt(i));
        }
        return rev.toString();
    }

    public static String reversedWords(String s){
        StringBuilder rev = new StringBuilder();
        String[] words = s.split(" ");

        for(int i = words.length - 1; i >= 0 ; i--){
            if(words[i] != ""){
                rev.append(words[i] + " ");
            }
        }
        return rev.toString().trim();
    }


    public static boolean rotation(String s1, String s2, int num){
        //abcd // 1 ??
        char [] word1 = s1.toCharArray();
        char[] word3 = new char[s1.length()];
        int j = s1.length() - num;
        for(int i = 0; i < num; i++){
            word3[i] = word1[j++];
        }
        for(int i = num; i < s1.length(); i++){
            word3[i] = word1[i-num];
        }`
        System.out.println(word3);
        if(s2.equals(new String(word3))) {
            return true;
        } else
                return false;
    }
}
