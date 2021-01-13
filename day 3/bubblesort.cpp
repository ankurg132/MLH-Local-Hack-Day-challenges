#include <iostream>

using namespace std;

int main()
{
    int sizeofarr;
    cin>>sizeofarr;
    int a[sizeofarr];
    for(int i=0;i<sizeofarr;i++){
        cin>>a[i];
    }
    for(int i=0;i<sizeofarr-1;i++){
        for(int j=0;j<sizeofarr-i-1;j++){
            if(a[j]>a[j+1]){
                int temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    for(int i=0;i<sizeofarr;i++){
        cout<<a[i]<<"  ";
    }
    return 0;
}
