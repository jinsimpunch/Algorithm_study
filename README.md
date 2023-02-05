
<img src="https://capsule-render.vercel.app/api?type=waving&transparent&color=0096FF&height=100&section=header&text=Algorithm_Study&fontSize=90&fontColor=72FFFF" />



# printV // vector 출력

    void printV(vector<int> &v){

      for(int i = 1; i <= 3; i++) cout << v[i] << "";

    }


# next_permutation(v.begin(), v.end) // 순열 1 -> 많이 쓰이는 방식

    do
    {
    
      printV(v);
      
    }while(next_permutation(v.begin(), v.end());

# makePermutation(int n, int r, int depth) // 순열 2 -> 재귀

    void makepermutaion(int n, int r, int depth){
    
        if(r == depth){
        
            print(v);
            
            return;
            
        }
        
        for(int i = depth; i < n; i++){
        
            swap(v[i], v[depth]);
            
            makePermutaion(n, r, depth + 1);
            
            swap(v[i], v[depth]);
        }
        return;
    }
