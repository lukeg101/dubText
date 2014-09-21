#include <stdio.h>
#include <stdlib.h>
int main(int argc, char** argv)
{
	for(int t =0;t < 300000;t++){
		putchar(t*((0xbadbea75>>((t>>12)&30)&3)*0.25*(0x5afe5>>((t>>16)&28)&3)));
	}
}