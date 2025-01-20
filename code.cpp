#include <bits/stdc++.h>
using namespace std;
# define ull unsigned long long
# define ll  long long
int g1(int a[]){
  int k=a[0]+a[1];
  if(k+a[1]!=a[2])return 1;
  if(a[2]+k!=a[3])return 2;
  else return 3;
}
int g2(int a[]){
  int k=a[2]-a[1];
  if(k+a[2]!=a[3])return 1;
  return 2;
}
void solve(){
    int a[4];
    cin>>a[0];
    cin>>a[1];
    cin>>a[2];
    cin>>a[3];
    cout<<max(g1(a),g2(a))<<endl; 
}
int main() {
    int t;cin>>t;
    while(t--){
      solve();
    }
}
