#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar((((((t*((t>>9|t>>13)&15))&255/15)*9)%(1<<7))<<2)%6<<4);
	}
}