#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar((t*(t>>5|t>>8))>>(t>>16));
	}
}