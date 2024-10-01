#include <iostream>
#include <string>
#include <bits/stdc++.h>
#include <iomanip>
using namespace std;
string reverseWords(string s);
string reverseWords_noSpace(string s);
int main()
{
    
    cout << reverseWords_noSpace("hello   ya joo");

    return 0;
}
// BUILT IN 

string reverseWords_noSpace(string s) {
    reverse(s.begin(), s.end());
    int left = 0, right = 0, i = 0;
    int string_length = s.size();
    while( i < string_length){
        while(s[i] == ' '){
            i++;
        }
        left = right = i;
        while( s[i] != ' '){
            right++;
            i++;
            if( i == string_length){
                break;
            }
        }

        reverse(s.begin() + left, s.begin() + right);
    }
    return s;
}