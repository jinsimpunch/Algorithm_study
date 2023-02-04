# Algorithm_study






# printV // vector 출력

    void printV(vector<int> &v){

      for(int i = 1; i <= 3; i++) cout << v[i] << "";

    }


# next_permutation(v.begin(), v.end) // 조합

do
{
  printV(v);
}while(next_permutation(v.begin(), v.end());
