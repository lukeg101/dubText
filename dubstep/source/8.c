#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar((int)(t/1e7*t*t+t)%127|t>>4|t>>5|t%127+(t>>16)|t);
	}
}