#include <iostream>
#include <string>
#include <vector>

int main()
{
    std::string str = "my name is satej";
    std::vector<std::string> str_vec;
    std::string temp;
    for(char c:str)
    {
        if(c!=' ')
        {
            temp.append(c);
        }
        else if(c==' ' || c=='\0')
        {
            str_vec.push_back(temp);
            temp.clear();
        }
    }

    for(std::string s:str_vec)
    {
        std::cout<<s<<" ";
    }
    return 0;
}
