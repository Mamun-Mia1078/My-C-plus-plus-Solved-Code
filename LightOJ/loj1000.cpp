#include<bits/stdc++.h>
using namespace std;
int main()
{
    int T;
    cin >> T;
    for(int i = 1; i <= T;i++){
        int a , b;
        cin >> a >> b;
        int sum = b-a;
        printf("Case %d: %d\n",i,sum);
    }
    return 0;

}

