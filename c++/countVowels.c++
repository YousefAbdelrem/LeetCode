#include <iostream>
#include <string>
#include <bits/stdc++.h>
#include <iomanip>
using namespace std;

int main()
{

    string s, reverse = "";
    cin >> s;
    for (int i = s.length() - 1; i >= 0; i--)
    {
        reverse += s[i];
    }
    cout << reverse;
    return 0;
}
// BUILT IN FUNCTION
// sting for loop in reverse order