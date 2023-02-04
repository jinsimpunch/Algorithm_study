
<img src="https://capsule-render.vercel.app/api?type=waving&transparent&color=E5E5CB&height=100&section=header&text=Algorithm_Study&fontSize=90&fontColor=65647C" />



# printV // vector 출력

    void printV(vector<int> &v){

      for(int i = 1; i <= 3; i++) cout << v[i] << "";

    }


# next_permutation(v.begin(), v.end) // 조합

    do
    {
    
      printV(v);
      
    }while(next_permutation(v.begin(), v.end());
