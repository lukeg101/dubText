#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		int v=t*(t^t+(t>>15|1)^(t-1280^t)>>10);
		putchar(v);
	}
}