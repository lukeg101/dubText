#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar(t>>4|t&((t>>5)/(t>>7-(t>>15)&-t>>7-(t>>15))));
	}
}