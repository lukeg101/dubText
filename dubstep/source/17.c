#include <stdio.h>
#include <stdlib.h>
#include <math.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar(((t&((t>>23)))+(t|(t>>2)))&(t>>3)|(t>>5)&(t*(t>>7)));
	}
}