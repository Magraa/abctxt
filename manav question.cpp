#include<iostream>
using namespace std;
int main()
{
	int n,max,i,j;
	cout<<"Enter no. of elements in array"<<endl;
    cin>>n;
    int a[n],count[n];
    cout<<"Enter array "<<endl;
    for(i=0;i<n;i++)
    {
    	cin>>a[i];
	}
	 for(i=0;i<n;i++)
	 {	 	
	 	count[i]=0;
	 	for(j=i;j<n;j++)
	 	{    
	         if(a[i]==a[j])
	 		{
	 			count[i]=count[i]+1;
			 }
		 }
	 }
	 for(i=0;i<n;i++)
	 {
	 	cout<<count[i]
	 }
	 
	 for(i=0;i<n;i++)
	 {
	 	for(j=0;j<n;j++)
	 	{
	    if(count[i]>count[j])
	    {
	    	max=a[i];
		}
	 }
}
	 cout<<"Element repeating maximum no. of times is "<<max;
    return 0;
}
