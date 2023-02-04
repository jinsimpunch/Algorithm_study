# Algorithm_study

<img src="https://capsule-render.vercel.app/api?type=transparent&color=auto&height=300&section=header&text=Algorithm study&fontSize=90" />



# printV // vector 출력

    void printV(vector<int> &v){

      for(int i = 1; i <= 3; i++) cout << v[i] << "";

    }


# next_permutation(v.begin(), v.end) // 조합

    do
    {
      printV(v);
    }while(next_permutation(v.begin(), v.end());
