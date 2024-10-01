#include <iostream>
#include <string>
#include <bits/stdc++.h>
#include <iomanip>
using namespace std;

int main()
{

    int counter = 0;
    string s;
    cin >> s;
    for (int i = 0; i < s.length(); i++)
    {
        char x = tolower(s[i]);
        if (x == 'a' || x == 'e' || x == 'o' || x == 'u' || x == 'i')
            counter++;
    }
    cout << counter;

    return 0;
}