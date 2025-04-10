n=int(input())
i=0
j=1
for i in range(i,n-1):
    print(" "*(n-i) + "*"*(2*i-1))
for j in range(j,n):
    print(" "*(2*j+1)+"*"*(n-2*j))
