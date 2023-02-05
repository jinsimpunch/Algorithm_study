
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
    
    
    
    
# 조합 재귀, 3중첩 for문
  
    //입력!
  
  
  
  
# split //문자열 나누기

       vector<string> split(string input, string delimiter){

            vector<string> ret;

            long long pos = 0;

            string token = "";    

            while((pos = input.find(delimiter)) != string::npos){

                toekn=input.substr(0,pos);

                ret.push_back(token);

                input.erase(0, pos + delimiter.length());

            }

            ret.push_back(input);

            return ret;
        }
        
        
# unique() //중복 요소 제거

    vector<int> v = { 2, 2, 1, 1, 2, 2, 3, 3, 2, 3, 4, 5};  //이렇게 순서가 바뀐 상태라면 sort()를 해주는 것이 좋다.
    
    sort(v.begin(), v.end());
    
    unique(v.begin(), v.end()); // unique()는 중복 제거 후 마지막의 다음 이터레이터를 리턴한다.
    
    erase(unique(v.begin(), v.end()), end()); // unique() 마지막 다음 이터레이터를 리턴하기 때문에 erase()를 하면 불필요한 요소를 지울 수 있다.
    
    


# 시간복잡도
    
    빅오 표기법 : 최고 차항의 계수와 나머지 항을 제외시켜 표기하는 방법.
    
    O(1) : 상수시간 시간복잡도 -> 입력크기와 상관업이 일정한 시간복잡도를 가지는 시간복잡도. 
       ex) cin, cout, 간단한 비교if문, 배열 인덱스 참조, 단순 덧셈, 나눗셈
    
   <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs0pox%2Fbtq6Mbphdwr%2Fs5K0D58hi5hiSrBuxmHHwk%2Fimg.png">
   
 

