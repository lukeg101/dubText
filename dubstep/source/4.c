#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar((v=(v>>1)+(v>>4)+t*(((t>>16)|(t>>6))&(69&(t>>9)))));
	}
}